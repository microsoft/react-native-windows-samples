namespace ContosoExpenses.Data.Services
{
    public class StorageService : IStorageService
    {
        public int SelectedEmployeeId { get; set; }
        public int SelectedExpense { get ; set; }
    }
}
