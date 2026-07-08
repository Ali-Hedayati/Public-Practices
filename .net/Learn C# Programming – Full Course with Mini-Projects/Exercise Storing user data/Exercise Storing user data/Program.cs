using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercise_Storing_user_data
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var name = "Aba";
            var number = "0123456789"; // if you don't use string the 0 at first dosn't show
            var age = 23;

            Console.WriteLine(name);
            Console.WriteLine(number);
            Console.WriteLine(age);

            //////////////////////////////////////////////////
            //odd or even 
            int num1 = 10;
            int num2 = 2;
            int remainder = num1 % num2;
            Console.WriteLine(remainder);

            //////////////////////////////////////////////////
            //consoleIO

            Console.WriteLine("Enter your name:");
            string usrName = Console.ReadLine(); // this is how you get data from user

            Console.WriteLine("Enter your age:");
            string usrAge = Console.ReadLine();
            int convertedAge = Convert.ToInt32(usrAge);
            Console.WriteLine("your name is" + usrName + "and your age is " + convertedAge);

            //////////////////////////////////////////////////

            Console.ReadLine();

        }
    }
}
