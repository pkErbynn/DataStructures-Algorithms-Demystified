// See https://aka.ms/new-console-template for more information
using _1_mycsharp;

Console.WriteLine("Hello, DSA World!");

System.Console.WriteLine($"cyclic sort: {CyclicSort.SortCyclicly(new int[] {2, 6, 4, 3, 1, 5})}");
System.Console.WriteLine($"missing number: {MissingNumber.findMissingNum(new int[]{4, 0, 3, 1})}");
MissingNumbers.FindMissingNumbers(new int[]{2, 3, 1, 8, 2, 3, 5, 1});

_a_DuplicateNumber.FindDuplicateNumber(new int[] { 1, 4, 4, 3, 2 });
_a_DuplicateNumber.FindDuplicateNumber(new int[] { 2, 1, 3, 3, 5, 4 });
_a_DuplicateNumber.FindDuplicateNumber(new int[] { 2, 4, 1, 4, 4 });

_a_DuplicateNumber.FindDuplicateNumbers(new int[] { 3, 4, 4, 5, 5 });
_a_DuplicateNumber.FindDuplicateNumbers(new int[] { 5, 4, 7, 2, 3, 5, 3 });

_a_DuplicateNumber.FindDuplicateNumber_NoRange(new int[] { 1, 23, 4, 10, 3, 2, 23, });

_a_DuplicateNumber.FindTheCorruptPair(new int[] { 3, 1, 2, 5, 2 });
_a_DuplicateNumber.FindTheCorruptPair(new int[] { 3, 1, 2, 3, 6, 4 });

_a_SmallestMissingPositiveNumber.FindSmallestMissingPositiveNumber(new int[] { -3, 1, 5, 4, 2 });
_a_SmallestMissingPositiveNumber.FindSmallestMissingPositiveNumber(new int[] { 3, -2, 0, 1, 2 });
_a_SmallestMissingPositiveNumber.FindSmallestMissingPositiveNumber(new int[] { 3, 2, 5, 1 });
_a_SmallestMissingPositiveNumber.FindSmallestMissingPositiveNumber(new int[] { 3, 2, 4, 1 });

_a_FirstKMissingPositiveNumbers.FindTheFirstKPositiveMissingNumbers(new int[] { 3, -1, 4, 6, 5 }, 3);
_a_FirstKMissingPositiveNumbers.FindTheFirstKPositiveMissingNumbersImproved(new int[] { 3, -1, 4, 6, 5 }, 3);