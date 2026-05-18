using IoC_Container.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoC_Container.IoC
{
    public class Container
    {
        private readonly Dictionary<Type, ServiceDescriptor> _descriptors;
        
        private readonly Dictionary<Type, object> _singletonInstances = new();

        public Container(ContainerRegistrator registrator)
        {
            _descriptors = registrator.GetServiceDescriptors().ToDictionary(x => x.ServiceType);
        }

        public TService Resolve<TService>()
        {
            return (TService)Resolve(typeof(TService), null);
        }

        internal object? Resolve(Type serviceType, Scope scope)
        {
            if (!_descriptors.TryGetValue(serviceType, out var descriptor))
            {
                throw new InvalidOperationException($"Service of type {serviceType.Name} is not registered.");
            }

            switch (descriptor.Lifetime)
            {
                case Lifetime.Singleton:
                    if (_singletonInstances.TryGetValue(serviceType, out var singletonInstance))
                        return singletonInstance;

                    var newSingletonInstance = CreateInstance(descriptor, null);
                    _singletonInstances[serviceType] = newSingletonInstance;
                    return newSingletonInstance;

                case Lifetime.Scoped:
                    if (scope == null)
                        throw new InvalidOperationException($"Cannot resolve scoped service {serviceType.Name} without a scope.");

                    var scopedInstances = scope.GetScopedInstances();
                    if (scopedInstances.TryGetValue(serviceType, out var scopedInstance))
                        return scopedInstance;

                    var newScopedInstance = CreateInstance(descriptor, scope);
                    scopedInstances[serviceType] = newScopedInstance;
                    return newScopedInstance;

                case Lifetime.Transient:
                    return CreateInstance(descriptor, scope);

                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        private object? CreateInstance(ServiceDescriptor descriptor, Scope scope)
        {
            var constructorInfo = descriptor.ImplementationType.GetConstructors().First();
            var parameters = constructorInfo.GetParameters()
                .Select(p => Resolve(p.ParameterType, scope))
                .ToArray();
            return Activator.CreateInstance(descriptor.ImplementationType, parameters);
        }


        public Scope CreateScope()
        {
            return new Scope(this); 
        }
    }
}
