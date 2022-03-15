using ContosoExpenses.Data.Models;
using ContosoExpenses.Data.Services;
using ContosoExpenses.Messages;
using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Messaging;
using System.Collections.Generic;

namespace ContosoExpenses.ViewModels
{
    public class MainWindowViewModel : ViewModelBase
    {
        private List<Employee> _employees;
        public List<Employee> Employees
        {
            get { return _employees; }
            set { Set(ref _employees, value); }
        }

        private Employee _selectedEmployee;
        private readonly IStorageService storageService;

        public Employee SelectedEmployee
        {
            get { return _selectedEmployee; }
            set
            {
                if (value != null)
                {
                    storageService.SelectedEmployeeId = value.EmployeeId;
                    Messenger.Default.Send<SelectedEmployeeMessage>(new SelectedEmployeeMessage());
                    Set(ref _selectedEmployee, value);
                }
            }
        }

        public MainWindowViewModel(IDatabaseService databaseService, IStorageService storageService)
        {
            databaseService.InitializeDatabase();
            Employees = databaseService.GetEmployees();
            this.storageService = storageService;
        }
    }
}
