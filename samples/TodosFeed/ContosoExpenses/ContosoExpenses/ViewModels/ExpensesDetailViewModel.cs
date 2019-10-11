using ContosoExpenses.Data.Services;
using GalaSoft.MvvmLight;

namespace ContosoExpenses.ViewModels
{
    public class ExpensesDetailViewModel: ViewModelBase
    {
        private string _expenseType;
        public string ExpenseType
        {
            get { return _expenseType; }
            set { Set(ref _expenseType, value); }
        }

        private string _description;
        public string Description
        {
            get { return _description; }
            set { Set(ref _description, value); }
        }

        private string _location;
        public string Location
        {
            get { return _location; }
            set { Set(ref _location, value); }
        }

        private double _amount;
        public double Amount
        {
            get { return _amount; }
            set { Set(ref _amount, value); }
        }

        public ExpensesDetailViewModel(IDatabaseService databaseService, IStorageService storageService)
        {
            var expense = databaseService.GetExpense(storageService.SelectedExpense);

            ExpenseType = expense.Type;
            Description = expense.Description;
            Location = expense.Address;
            Amount = expense.Cost;

            TimelineService timeline = new TimelineService();
            timeline.AddToTimeline(expense);
        }
    }
}
