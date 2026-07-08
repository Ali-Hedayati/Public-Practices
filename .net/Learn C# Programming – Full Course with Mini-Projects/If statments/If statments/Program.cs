using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace If_statments
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string ageInput = Console.ReadLine();
            int age = Convert.ToInt32(ageInput);
            if(age < 0 || age > 150)
            {
                Console.WriteLine("invalid age");
            }
            else
            {
                Console.WriteLine("valid age");
                if (age >= 18 && age <= 25)
                {
                    Console.WriteLine("you are between 18 and 25");
                }
                else if (age >= 26)
                {
                    Console.WriteLine("you are more than 26");
                }
            }
           
        }
    }
}
