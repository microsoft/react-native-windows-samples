using ContosoExpenses.Data.Models;
using System.Collections.Generic;

namespace ContosoExpenses.Data.Services
{
    public interface IDatabaseService
    {
        Employee GetEmployee(int employeeId);
        List<Employee> GetEmployees();
        List<Expense> GetExpenses(int employeedId);
        Expense GetExpense(int expenseId);
        void SaveExpense(Expense expense);
        void InitializeDatabase();
    }
}
