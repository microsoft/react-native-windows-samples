using GalaSoft.MvvmLight.Messaging;
using System;

namespace ContosoExpenses.Messages
{
    public class SelectedDateMessage: MessageBase
    {
        public DateTime SelectedDate { get; set; }

        public SelectedDateMessage(DateTime selectedDate)
        {
            this.SelectedDate = selectedDate;
        }
    }
}
