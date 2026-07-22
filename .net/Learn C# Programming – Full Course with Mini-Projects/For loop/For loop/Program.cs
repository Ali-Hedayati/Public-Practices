using System;
using System.Collections.Generic;
using System.IO.Pipes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace For_loop
{
    internal class Program
    {


        static void Main(string[] args)
        {

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine(i);
            }
            for (int i = 0; i < 10; i += 2)
            {
                Console.WriteLine(i);
            }

            //while

            string numberAInput = Console.ReadLine();
            int numberA = Convert.ToInt32(numberAInput);

            string numberBInput = Console.ReadLine();
            int numberB = Convert.ToInt32(numberBInput);



            int answer = numberA * numberB;
            int actualAnswer = 0;

            Console.WriteLine("waht the value of hte" + numberA + "x" + numberB + "?");
            Console.WriteLine();
            while (answer != actualAnswer)
            {
                string answerInput = Console.ReadLine(); ;
                actualAnswer = Convert.ToInt32(answerInput);
                if (answer != actualAnswer)
                {
                    Console.WriteLine("close but iw was wrong!");
                }

            }
          

            // dowhile
            do
            {
                string answerInput = Console.ReadLine(); ;
                actualAnswer = Convert.ToInt32(answerInput);
                if (answer != actualAnswer)
                {
                    Console.WriteLine("close but iw was wrong!");
                }

            } while (answer != actualAnswer);
            Console.WriteLine("correct");
            Console.ReadLine();
        }
    }
}
