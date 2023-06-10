class MissingNumber
{
    // public static void Main()
    // {
    //     System.Console.WriteLine(findMissingNum(new int[]{4, 0, 3, 1}));
    // }

    public static int findMissingNum(int[] numbers)
    {
        int index = 0;
        while(index < numbers.Length){
            int currentNumber = numbers[index];
            // check if a number used as index, exists within array range
            if(currentNumber < numbers.Length && currentNumber != numbers[currentNumber])
            {
                (numbers[index], numbers[currentNumber]) = (numbers[currentNumber], numbers[index]);
            }
            else
            {
                index += 1;
            }
        }

        for(int i = 0; i < numbers.Length; i++)
        {
            if(numbers[i] != i) return i;
        }
        return -1;
    }
}