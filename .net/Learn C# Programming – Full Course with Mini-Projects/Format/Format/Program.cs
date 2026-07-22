using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Format
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double value = 1000D / 12.34D;
            Console.WriteLine(value); //81.0372771474878

            Console.WriteLine(string.Format("{0:0}", value)); //81
            Console.WriteLine(string.Format("{0:0.0}", value)); //81.0
            Console.WriteLine(string.Format("{0:0.#}", value)); //81
            Console.WriteLine(string.Format("{0:0.00}", value)); //81.04
            Console.WriteLine(string.Format("USD {0:0.00}", value)); //USD 81.04


            Console.WriteLine(value); //81.0372771474878
            Console.WriteLine(string.Format("{0} {1}", value,1000)); //81.0372771474878 1000

            double money = -10D / 3D;
            Console.WriteLine(money.ToString("C"));// C means curuncy // ($3.33)
            Console.WriteLine(money.ToString("C0"));// ($3)
            Console.WriteLine(money.ToString("C1"));// ($3.3)
            Console.WriteLine(money.ToString("C2"));// ($3.33)


            Console.WriteLine(money.ToString("C",CultureInfo.CurrentCulture)); // ($3.33)
            Console.WriteLine(money.ToString("C", CultureInfo.CreateSpecificCulture("en-GB")));//-£3.33
            Console.WriteLine(money.ToString("C", CultureInfo.CreateSpecificCulture("en-US"))); //($3.33) 
        }
    }
}
