using IoC_Container.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoC_Container.Services
{
    public class UserManager : IManager
    {
        private readonly IService _service;
        public UserManager(IService service) => _service = service;
        public void DoWork() => _service.Send();
    }
}
