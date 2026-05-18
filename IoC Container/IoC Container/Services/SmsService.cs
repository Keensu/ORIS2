using IoC_Container.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoC_Container.Services
{
    public class SmsService : IService
    {
        public void Send() => Console.WriteLine("SMS Sent!");
    }
}
