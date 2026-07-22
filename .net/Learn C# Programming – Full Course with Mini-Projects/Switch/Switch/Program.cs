using System;

namespace Switch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a day of the week");
            int day = Convert.ToInt32(Console.ReadLine());

            switch (day)
            {
                case 1:
                    Console.WriteLine("Mon");
                    break;
                case 2:
                    Console.WriteLine("tue");
                    break;
                case 3:
                    Console.WriteLine("wed");
                    break;
                case 4:
                    Console.WriteLine("thr");
                    break;
                case 5:
                    Console.WriteLine("fri");
                    break;
                case 6:
                    Console.WriteLine("sat");
                    break;
                       case 7:
                    Console.WriteLine("sun");
                    break;
                default: Console.WriteLine("Invalid, enter a value between 1 and 7");
                    break;

            }
            Console.ReadLine();
        }
    }
}
