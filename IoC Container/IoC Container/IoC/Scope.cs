using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoC_Container.IoC
{
    public class Scope : IDisposable
    {
        private readonly Container _container;
        
        private readonly Dictionary<Type, object> _scopedInstances = new();

        public Scope(Container container)
        {
            _container = container;
        }

        public TService? Resolve<TService>()
        {
            // передаём себя
            return (TService?)_container.Resolve(typeof(TService), this);
        }

        public Dictionary<Type, object> GetScopedInstances() => _scopedInstances;

        public void Dispose()
        {
            foreach (var instance in _scopedInstances.Values)
            {
                if (instance is IDisposable disposable)
                {
                    disposable.Dispose();
                }
            }
        }
    }
}
