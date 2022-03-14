using ContosoExpenses.Data.Models;
using ContosoExpenses.Data.Services;
using ContosoExpenses.Messages;
using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Command;
using GalaSoft.MvvmLight.Messaging;
using System.Collections.Generic;
using System.Windows.Input;

namespace ContosoExpenses.ViewModels
{
    public class ExpensesListViewModel : ViewModelBase
    {
        private readonly IDatabaseService databaseService;
        private readonly IStorageService storageService;

        private Employee _selectedEmployee;

        public Employee SelectedEmployee
        {
            get { return _selectedEmployee; }
            set { Set(ref _selectedEmployee, value); }
        }

        private string _fullName;
        public string FullName
        {
            get { return _fullName; }
            set { Set(ref _fullName, value); }
        }

        private List<Expense> _expenses;
        public List<Expense> Expenses
        {
            get { return _expenses; }
            set { Set(ref _expenses, value); }
        }

        private Expense _selectedExpense;

        public Expense SelectedExpense
        {
            get { return _selectedExpense; }
            set
            {
                if (value != null)
                {
                    storageService.SelectedExpense = value.ExpenseId;
                    Messenger.Default.Send<SelectedExpenseMessage>(new SelectedExpenseMessage());
                    Set(ref _selectedExpense, value);
                }
            }
        }

        private ICommand _addNewExpenseCommand;


        public ICommand AddNewExpenseCommand
        {
            get
            {
                if (_addNewExpenseCommand == null)
                {
                    _addNewExpenseCommand = new RelayCommand(() =>
                    {
                        Messenger.Default.Send<AddNewExpenseMessage>(new AddNewExpenseMessage());
                    });
                }

                return _addNewExpenseCommand;
            }
        }

        public ExpensesListViewModel(IDatabaseService databaseService, IStorageService storageService)
        {
            SelectedEmployee = databaseService.GetEmployee(storageService.SelectedEmployeeId);
            Expenses = databaseService.GetExpenses(storageService.SelectedEmployeeId);

            FullName = $"{SelectedEmployee.FirstName} {SelectedEmployee.LastName}";

            this.databaseService = databaseService;
            this.storageService = storageService;

            Messenger.Default.Register<UpdateExpensesListMessage>(this, message =>
            {
                Expenses = this.databaseService.GetExpenses(this.storageService.SelectedEmployeeId);
            });
        }
    }
}
