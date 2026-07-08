using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace operations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int age = 23;
            age++; // plus one or : age = age + 1
            age += 10; // age = age + 10
            age -=10; // age = age -10
            age *= 10;//age = 10 * age
            age /= 10;// age = age/ 10 = 2 if you want exact you should define the age with double
            age--;

            string name = "Aba";
            name += " is here";

            char ch = 'a';
            ch += 'b';
            Console.WriteLine(ch);// it will add unicode a with b 

            Console.WriteLine(name);//Aba is here

            int i = 0;
            Console.WriteLine(i++);// it will show 0, because it first ecexute i then plus
            int j = 0;
            Console.WriteLine(++j);// it will show 1, it plus it then show the result
            Console.WriteLine(i);// it will show 1

            int first = 10;
            int second = 3;
            Console.WriteLine(first % second); // 1 
        }
    }
}
