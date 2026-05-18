using IoC_Container.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoC_Container.IoC
{
    public class ContainerRegistrator
    {
        private readonly List<ServiceDescriptor> _serviceDescriptors = new();

        public void Register<TService, TImplementation>(Lifetime lifetime)
        {
            _serviceDescriptors.Add(new ServiceDescriptor(typeof(TService), typeof(TImplementation), lifetime));
        }
        public void RegisterTransient<TService, TImplementation>()
            => Register<TService, TImplementation>(Lifetime.Transient);

        public void RegisterSingleton<TService, TImplementation>()
            => Register<TService, TImplementation>(Lifetime.Singleton);

        public void RegisterScoped<TService, TImplementation>()
            => Register<TService, TImplementation>(Lifetime.Scoped);

        public List<ServiceDescriptor> GetServiceDescriptors()
        {
            return _serviceDescriptors;
        }
    }
}
