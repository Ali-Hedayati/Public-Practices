using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace text_based_data_types
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = "Aba";
            char letter = 'a';


            string textAge = "-23";
            int age = Convert.ToInt32(textAge); // becase the int is 32 we convert it to 32
            Console.WriteLine(age);

            string textBigNumber = "-900000"; // in here we don't need the "L"
            long bigNumber = Convert.ToInt32(textBigNumber);
            Console.WriteLine(bigNumber);

            string textNegetive = "-55.2";
            double negetive =  Convert.ToDouble(textNegetive);
            Console.WriteLine(negetive);

            string textPrecision = "5.00001";
            float precision = Convert.ToSingle(textPrecision);
            Console.WriteLine(precision);

            string textMoney = "14.99";
            decimal money = Convert.ToDecimal(textMoney);
            Console.WriteLine(money);

            Console.ReadLine();
        }
    }
}
