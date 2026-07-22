using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConditionalOperator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int age = -10;
            string result = age >= 0 ? "valid" : "invalid";
            Console.WriteLine(result);

            Console.ReadLine();
        }
    }
}
