using IoC_Container.Enum;
using IoC_Container.Interfaces;
using IoC_Container.IoC;
using IoC_Container.Services;

var reg = new ContainerRegistrator();

reg.Register<IService, SmsService>(Lifetime.Transient);
reg.Register<IManager, UserManager>(Lifetime.Scoped);

var container = new Container(reg);

using (var scope = container.CreateScope())
{
    var manager = scope.Resolve<IManager>();
    manager.DoWork();
}


