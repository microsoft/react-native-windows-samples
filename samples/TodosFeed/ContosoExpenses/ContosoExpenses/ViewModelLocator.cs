using ContosoExpenses.Data.Services;
using ContosoExpenses.ViewModels;
using Unity;

namespace ContosoExpenses
{
    public class ViewModelLocator
    {
        private UnityContainer _container;

        public ViewModelLocator()
        {
            _container = new UnityContainer();

            _container.RegisterType<MainWindowViewModel>();
            _container.RegisterType<ExpensesListViewModel>();
            _container.RegisterType<ExpensesDetailViewModel>();
            _container.RegisterType<AddNewExpenseViewModel>();
            _container.RegisterType<IDatabaseService, DatabaseService>();

            _container.RegisterSingleton<IStorageService, StorageService>();
        }

        public MainWindowViewModel MainWindowViewModel => _container.Resolve<MainWindowViewModel>();

        public ExpensesListViewModel ExpensesListViewModel => _container.Resolve<ExpensesListViewModel>();

        public ExpensesDetailViewModel ExpensesDetailViewModel => _container.Resolve<ExpensesDetailViewModel>();

        public AddNewExpenseViewModel AddNewExpenseViewModel => _container.Resolve<AddNewExpenseViewModel>();


    }
}