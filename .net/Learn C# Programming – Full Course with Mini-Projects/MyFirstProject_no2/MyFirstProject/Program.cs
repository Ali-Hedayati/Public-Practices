using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int x=10 , y = 20 , z = 30 ; // another way of assign and create variables

            int age = 23;
            Console.WriteLine(age);

            Console.WriteLine(int.MinValue); // it will show the min of an int
            Console.WriteLine(int.MaxValue); // it will show the max of an int

            long bigNumber = 90000L; // the "L" is for long
            Console.WriteLine(bigNumber);

            double negetive = 55.2D; // the "D" is for '.'
            float precision = 5.0001F; // the "F" is for float

            decimal money = 14.19M;//the "M" is for decimal

            Console.ReadLine(); //this will wait till user inputs somthing
        }
    }
}
