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
using Microsoft.Toolkit.Wpf.UI.XamlHost;
using System.Linq;
using System;

namespace ContosoExpenses.Views
{
    /// <summary>
    /// Interaction logic for AddNewExpense.xaml
    /// </summary>
    public partial class AddNewExpense : Window
    {
        public AddNewExpense()
        {
            InitializeComponent();
            Messenger.Default.Register<CloseWindowMessage>(this, message =>
            {
                this.Close();
            });
        }

        private void CalendarUwp_ChildChanged(object sender, EventArgs e)
        {
            WindowsXamlHost windowsXamlHost = (WindowsXamlHost)sender;

            Windows.UI.Xaml.Controls.CalendarView calendarView =
                (Windows.UI.Xaml.Controls.CalendarView)windowsXamlHost.Child;

            if (calendarView != null)
            {
                calendarView.SelectedDatesChanged += (obj, args) =>
                {
                    if (args.AddedDates.Count > 0)
                    {
                        Messenger.Default.Send<SelectedDateMessage>(new SelectedDateMessage(args.AddedDates[0].DateTime));
                    }
                };
            }
        }
    }
}
