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
            Console.WriteLine("ReverseAlternatingKsizedSubLists:");

            if (head == null || head.Next == null || k <= 1) return;    // guard clause: invalid list or k

            Node currentNodePointer = head;
            Node previousNodePointer = null;

            bool reverseSubList = true; // Flag to indicate whether to reverse the sub-list or not

            while (currentNodePointer != null)
            {
                Node startNode = currentNodePointer;        // start of current sub-list
                Node prevSubListEnd = previousNodePointer;  // end of last processed sub-list
                Node nextNode = null;

                int count = 0;

                if (reverseSubList)
                {
                    // Reverse k nodes
                    Node subListPrev = null;
                    while (currentNodePointer != null && count < k)
                    {
                        nextNode = currentNodePointer.Next;
                        currentNodePointer.Next = subListPrev;

                        subListPrev = currentNodePointer;
                        currentNodePointer = nextNode;
                        count++;
                    }

                    // Connect previous part
                    if (prevSubListEnd != null)
                    {
                        prevSubListEnd.Next = subListPrev;
                    }
                    else
                    {
                        head = subListPrev;
                    }

                    // Connect end of reversed sub-list to the next node
                    startNode.Next = currentNodePointer;

                    // Move pointer to end of this sublist for next iteration
                    previousNodePointer = startNode;
                }
                else
                {
                    // Skip k nodes (no reversal)
                    while (currentNodePointer != null && count < k)
                    {
                        previousNodePointer = currentNodePointer;
                        currentNodePointer = currentNodePointer.Next;
                        count++;
                    }
                }
                reverseSubList = !reverseSubList; // toggle
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

