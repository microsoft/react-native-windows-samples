using ContosoExpenses.Data.Models;

namespace ContosoExpenses.Data.Services
{
    public interface IStorageService
    {
        int SelectedEmployeeId { get; set; }

        int SelectedExpense { get; set; }
    }
}
