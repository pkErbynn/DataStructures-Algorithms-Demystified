/*
    Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
    If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

    Example:
        Given linked list: 1(head) -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null
            w/ K = 3
        
        Output: 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 8 -> 7 -> null
            (3 -> 2 -> 1) -> (6 -> 5 -> 4) -> (8 -> 7) -> null

*/


using System;
namespace seesharp
{
	public class ReverseKsizedSubLists
	{
        public static void ReverseEveryKsizedSubLists(Node head, int k)
        { 
            // Not reviewed. Simple but yet to understand probably: just copied the solution

            Console.WriteLine("\nReverseKsizedSubLists:");

            if (head == null || head.Next == null || k <= 1) return;    // guard clause: invalid list or k

            Node currentNodePointer = head;
            Node previousNodePointer = null;

            while (currentNodePointer != null)
            {
                Node startNode = currentNodePointer;   // Start of the k-sized sub-list
                Node prevSubListEnd = previousNodePointer; // Previous sub-list's end (for connection)

                int count = 0;

                // Traverse and reverse up to the k-sized sub-list
                while (currentNodePointer != null && count < k)
                {
                    Node nextNode = currentNodePointer.Next;
                    currentNodePointer.Next = previousNodePointer;

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
                    head = previousNodePointer; // If it's the first sub-list (ie, with prevSubListEnd = null), update the head
                }

                startNode.Next = currentNodePointer; // Connect the end of reversed sub-list to the next node

                // Move previousNodePointer to the end of the reversed sub-list for the next iteration
                previousNodePointer = startNode;
            }


            // Print the reversed linked list
            Node currentNodeToPrint = head;
            while (currentNodeToPrint != null)
            {
                Console.Write(currentNodeToPrint.Value + " -> ");
                currentNodeToPrint = currentNodeToPrint.Next;
            }
            Console.WriteLine("done");
        }
    }
}

