// ******************************************************************

// Copyright (c) Microsoft. All rights reserved.
// This code is licensed under the MIT License (MIT).
// THE CODE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE CODE OR THE USE OR OTHER DEALINGS IN THE CODE.

// ******************************************************************

using System.Windows;
using GalaSoft.MvvmLight.Messaging;
using ContosoExpenses.Messages;

namespace ContosoExpenses.Views
{
    /// <summary>
    /// Interaction logic for ExpensesList.xaml
    /// </summary>
    public partial class ExpensesList : Window
    {
        public ExpensesList()
        {
            InitializeComponent();
            Messenger.Default.Register<AddNewExpenseMessage>(this, message =>
            {
                AddNewExpense addNewExpense = new AddNewExpense();
                addNewExpense.Show();
            });

            Messenger.Default.Register<SelectedExpenseMessage>(this, message =>
            {
                ExpenseDetail detail = new ExpenseDetail();
                detail.Show();
            });
        }

        private void Window_Closed(object sender, System.EventArgs e)
        {
            Messenger.Default.Unregister<SelectedExpenseMessage>(this);
        }
    }
}
