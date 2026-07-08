using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Var
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var age; // the compiler should decide what is this based on value.

            int x = 10, y = 20, z = 30; // another way of assign and create variables

            int age = 23;
            Console.WriteLine(age);

            Console.WriteLine(int.MinValue); // it will show the min of an int
            Console.WriteLine(int.MaxValue); // it will show the max of an int

            var bigNumber = 90000L; // the "L" is for long
            Console.WriteLine(bigNumber);

            var negetive = 55.2D; // the "D" is for '.'
            var precision = 5.0001F; // the "F" is for float

            var money = 14.19M;//the "M" is for decimal

            Console.ReadLine(); //this will wait till user inputs somthing

        }
    }
}
