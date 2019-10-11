using System;

namespace ContosoExpenses.Data.Models
{
    public class Expense
    {
        public int ExpenseId { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public double Cost { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTimeOffset Date { get; set; }
        public int EmployeeId { get; set; }
    }
}
