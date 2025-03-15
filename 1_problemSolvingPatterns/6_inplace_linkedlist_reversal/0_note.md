## Intro
In a lot of problems, reverse the links between a set of nodes of a LinkedList. 
Often, the constraint is do this in-place, i.e., using the existing node objects and without using extra memory.

In this regard, In-place Reversal of a LinkedList pattern describes an efficient way to solve the above problem. 

## How to Run
- `dotnet build [.csproj-file]`
- `dotnet run [.cs-file]`


/*

Tip so far: 

YOU THINK... => DO...
1. unsorted input + occurrence                                      => frequency counter map
2. sorted input                                                     => binary search, two-pointer 
3. sub continuous array                                             => sliding window  
4. cyclic + linkedlist midpoint                                     => fast n slow (tortoise and hare) 
5. inputs range from 1/0 to n/(n-1) or small overrange difference   => cyclic sort
6. Linkedlist head                                                  => inplace linked list 

*/
