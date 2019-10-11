using ContosoExpenses.Data.Models;
using ContosoExpenses.Data.Services;
using ContosoExpenses.Messages;
using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Command;
using GalaSoft.MvvmLight.Messaging;
using System;

namespace ContosoExpenses.ViewModels
{
    public class AddNewExpenseViewModel : ViewModelBase
    {
        private readonly IDatabaseService databaseService;
        private readonly IStorageService storageService;

        public AddNewExpenseViewModel(IDatabaseService databaseService, IStorageService storageService)
        {
            this.databaseService = databaseService;
            this.storageService = storageService;

            Date = DateTimeOffset.Now;

            Messenger.Default.Register<SelectedDateMessage>(this, message =>
            {
                Date = message.SelectedDate;
            });
        }

        private string _address;
        public string Address
        {
            get { return _address; }
            set
            {
                Set(ref _address, value);
                SaveExpenseCommand.RaiseCanExecuteChanged();
            }
        }

        private string _city;
        public string City
        {
            get { return _city; }
            set
            {
                Set(ref _city, value);
                SaveExpenseCommand.RaiseCanExecuteChanged();
            }
        }

        private double _cost;
        public double Cost
        {
            get { return _cost; }
            set
            {
                Set(ref _cost, value);
                SaveExpenseCommand.RaiseCanExecuteChanged();
            }
        }

        private string _description;
        public string Description
        {
            get { return _description; }
            set
            {
                Set(ref _description, value);
                SaveExpenseCommand.RaiseCanExecuteChanged();
            }
        }

        private string _expenseType;
        public string ExpenseType
        {
            get { return _expenseType; }
            set
            {
                Set(ref _expenseType, value);
                SaveExpenseCommand.RaiseCanExecuteChanged();
            }
        }

        private DateTimeOffset _date;
        public DateTimeOffset Date
        {
            get { return _date; }
            set { Set(ref _date, value); }
        }

        private bool IsFormFilled
        {
            get
            {
                return !string.IsNullOrEmpty(Address) && !string.IsNullOrEmpty(City) && !string.IsNullOrEmpty(Description) && !string.IsNullOrEmpty(ExpenseType) && Cost != 0;
            }
        }

        private RelayCommand _saveExpenseCommand;
        public RelayCommand SaveExpenseCommand
        {
            get
            {
                if (_saveExpenseCommand == null)
                {
                    _saveExpenseCommand = new RelayCommand(() =>
                    {
                        Expense expense = new Expense
                        {
                            Address = Address,
                            City = City,
                            Cost = Cost,
                            Date = Date,
                            Description = Description,
                            EmployeeId = storageService.SelectedEmployeeId,
                            Type = ExpenseType
                        };

                        databaseService.SaveExpense(expense);

                        NotificationService notificationService = new NotificationService();
                        notificationService.ShowNotification(expense.Description, expense.Cost);

                        Messenger.Default.Send<UpdateExpensesListMessage>(new UpdateExpensesListMessage());
                        Messenger.Default.Send<CloseWindowMessage>(new CloseWindowMessage());
                    }, () => IsFormFilled
                    );
                }

                return _saveExpenseCommand;
            }
        }
    }
}
