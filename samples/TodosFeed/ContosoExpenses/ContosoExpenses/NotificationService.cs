using System;
using System.Collections.Generic;
using System.Text;
using Windows.Data.Xml.Dom;
using Windows.UI.Notifications;

namespace ContosoExpenses
{
    public class NotificationService
    {
        public void ShowNotification(string description, double amount)
        {
            string xml = $@"<toast>
            <visual>
                <binding template='ToastGeneric'>
                    <text>Expense added</text>
                    <text>Description: {description} - Amount: {amount} </text>
                </binding>
            </visual>
        </toast>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            ToastNotification toast = new ToastNotification(doc);
            ToastNotificationManager.CreateToastNotifier().Show(toast);
        }
    }
}
