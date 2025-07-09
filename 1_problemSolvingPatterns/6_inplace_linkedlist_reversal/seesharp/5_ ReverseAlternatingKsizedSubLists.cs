/*
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

Example:
    Given linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null
        w/ K = 2
    
    Output: 2 -> 1 -> 3 -> 4 -> 6 -> 5 -> 7 -> 8 -> null
        (2 -> 1) -> 3 -> 4 -> (6 -> 5) -> 7 -> 8 -> null

*/

using System;
namespace seesharp
{
	public class AlternatingKsizedSubListsReversal
	{
        public static void ReverseAlternatingKsizedSubLists(Node head, int k)
        { 
            // Same scenario

            Console.WriteLine("\nReverseAlternatingKsizedSubLists:");

            if (head == null || head.Next == null || k <= 1) return;    // guard clause: invalid list or k

            Node currentNodePointer = head;
            Node previousNodePointer = null;

            bool reverseSubList = true; // Flag to indicate whether to reverse the sub-list or not

            while (currentNodePointer != null)
            {
                Node startNode = currentNodePointer;   // Start of the k-sized sub-list
                Node prevSubListEnd = previousNodePointer; // Previous sub-list's end (for connection)

                int count = 0;

                // Traverse the k-sized sub-list
                while (currentNodePointer != null && count < k)
                {
                    Node nextNode = currentNodePointer.Next;

                    if (reverseSubList)
                    {
                        currentNodePointer.Next = previousNodePointer;
                    }
                    
                    // Move pointers 1-step forward
                    previousNodePointer = currentNodePointer;
                    currentNodePointer = nextNode;
                    count++;
                }

                // Connect previous sub-list's end to the new start of reversed sub-list
                if (prevSubListEnd != null)
                {
                    prevSubListEnd.Next = previousNodePointer;
                }
                else
                {
                    head = previousNodePointer; // If it's the first sub-list, update the head
                }

                startNode.Next = currentNodePointer; // Connect the end of reversed sub-list to the next node

                // Move previousNodePointer to the end of the reversed sub-list for the next iteration
                previousNodePointer = startNode;

                reverseSubList = !reverseSubList; // Toggle the flag to reverse or not
            }

            // Print the modified linked list
            Node currentNodePointerToPrint = head;
            while (currentNodePointerToPrint != null)
            {
                Console.Write(currentNodePointerToPrint.Value + " -> ");
                currentNodePointerToPrint = currentNodePointerToPrint.Next;
            }
            Console.WriteLine("done");
        }
    }
}

