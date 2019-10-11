using System;
using System.Globalization;
using System.Windows.Data;

namespace ContosoExpenses.Converters
{
    public class CostToHeightConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value != null)
            {
                double cost = (double)value;
                double height = (cost * 400) / 1000;
                return height;
            }

            return 0;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
