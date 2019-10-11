using AdaptiveCards;
using ContosoExpenses.Data.Models;
using System;
using System.Threading.Tasks;
using Windows.ApplicationModel.UserActivities;
using Windows.UI.Shell;

namespace ContosoExpenses
{
    public class TimelineService
    {
        private UserActivityChannel _userActivityChannel;
        private UserActivity _userActivity;
        private UserActivitySession _userActivitySession;

        private string BuildAdaptiveCard(Expense expense)
        {
            AdaptiveCard card = new AdaptiveCard("1.0");

            AdaptiveTextBlock title = new AdaptiveTextBlock
            {
                Text = expense.Description,
                Size = AdaptiveTextSize.Medium,
                Wrap = true
            };

            AdaptiveColumnSet columnSet = new AdaptiveColumnSet();

            AdaptiveColumn photoColumn = new AdaptiveColumn
            {
                Width = "auto"
            };

            AdaptiveImage image = new AdaptiveImage
            {
                Url = new Uri("https://appmodernizationworkshop.blob.core.windows.net/contosoexpenses/Contoso192x192.png"),
                Size = AdaptiveImageSize.Small,
                Style = AdaptiveImageStyle.Default
            };
            photoColumn.Items.Add(image);

            AdaptiveTextBlock amount = new AdaptiveTextBlock
            {
                Text = expense.Cost.ToString(),
                Weight = AdaptiveTextWeight.Bolder,
                Wrap = true
            };

            AdaptiveTextBlock date = new AdaptiveTextBlock
            {
                Text = expense.Date.Date.ToShortDateString(),
                IsSubtle = true,
                Spacing = AdaptiveSpacing.None,
                Wrap = true
            };

            AdaptiveColumn expenseColumn = new AdaptiveColumn
            {
                Width = "stretch"
            };
            expenseColumn.Items.Add(amount);
            expenseColumn.Items.Add(date);

            columnSet.Columns.Add(photoColumn);
            columnSet.Columns.Add(expenseColumn);

            card.Body.Add(title);
            card.Body.Add(columnSet);

            string json = card.ToJson();
            return json;
        }

        public async Task AddToTimeline(Expense expense)
        {
            _userActivityChannel = UserActivityChannel.GetDefault();
            _userActivity = await _userActivityChannel.GetOrCreateUserActivityAsync($"Expense-{expense.ExpenseId}");

            _userActivity.ActivationUri = new Uri($"contosoexpenses://expense/{expense.ExpenseId}");
            _userActivity.VisualElements.DisplayText = "Contoso Expenses";

            string json = BuildAdaptiveCard(expense);

            _userActivity.VisualElements.Content = AdaptiveCardBuilder.CreateAdaptiveCardFromJson(json);

            await _userActivity.SaveAsync();
            _userActivitySession?.Dispose();
            _userActivitySession = _userActivity.CreateSession();
        }
    }
}
