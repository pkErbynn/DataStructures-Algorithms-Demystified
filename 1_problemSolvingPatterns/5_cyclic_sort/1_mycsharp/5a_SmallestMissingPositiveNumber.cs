
/*

== Question (Medium) ***

Given an unsorted array containing numbers, find the smallest missing positive number in it.


== Solution
This problem follows the Cyclic Sort pattern and shares similarities with Find the Missing Number with one big difference.
In this problem, the numbers are not bound by any range so can have any number in the input array.

Clue for Cyclic Sort, cus answer should start from 1, iterating through array

However, follow a similar approach to place the numbers on their correct indices and
	- ignore all numbers that are out of the range of the array (i.e., all negative numbers and all numbers greater than or equal to the length of the array).
	- Once we are done with the cyclic sort we will iterate the array and
	- the first index that does not have the correct number will be the smallest missing positive number!

CLUE: Positive number means start from 1 to N, thus cyclic sort


Watch: https://youtube.com/watch?v=JfinxytTYFQ&t=380s
*/

using System;
using System.Reflection;

namespace _1_mycsharp
{
	public class _a_SmallestMissingPositiveNumber
	{
		// Input: [-1, 1, 3, 4]
		// Output: 2

		// Question same as: Finding the first missing position number
		public static void FindSmallestMissingPositiveNumber(int[] numbers)
		{
			int startIndex = 0;
			while (startIndex < numbers.Length)
			{
				var correctValueIndex = numbers[startIndex];

                // since 0 is not a positive number, start inserting from number 1 not 0
                // 1 at index 0, 2 at index 1, 3 at index 2, etc
                // and ignoring all out-of range values
				// (correctValueIndex > 0), cus looking for +ve numbers
				// (correctValueIndex < len), cus looking for numbers within range
                if ( (correctValueIndex > 0) && (correctValueIndex <= numbers.Length) && (numbers[startIndex] != numbers[correctValueIndex - 1]) )
				{
					// swap
					var temp = numbers[startIndex];
					numbers[startIndex] = numbers[correctValueIndex - 1];
					numbers[correctValueIndex - 1] = temp;
				}
				else
				{
					startIndex++;
				}
			}

			Console.WriteLine($"{String.Join(", ", numbers)}");

			for (int i = 0; i < numbers.Length; i++)
			{
				// check that 1 is at index slot 1... 2 at slot 2... if not retrieve the slot gab
				if (numbers[i] != (i + 1))	// (i + 1) cus input array values starts from 1
				{
					Console.WriteLine("smallest +ve: " + (i + 1));
					return;
				}
			}

			// else
			Console.WriteLine("smallest +ve: " + "none");
		}
    }
}

