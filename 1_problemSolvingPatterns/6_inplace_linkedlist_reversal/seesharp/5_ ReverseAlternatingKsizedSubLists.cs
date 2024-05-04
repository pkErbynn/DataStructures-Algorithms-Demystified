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

            Node currentNode = head;
            Node previousNode = null;

            bool reverseSubList = true; // Flag to indicate whether to reverse the sub-list or not

            while (currentNode != null)
            {
                Node startNode = currentNode;   // Start of the k-sized sub-list
                Node prevSubListEnd = previousNode; // Previous sub-list's end (for connection)

                int count = 0;

                // Traverse the k-sized sub-list
                while (currentNode != null && count < k)
                {
                    Node nextNode = currentNode.Next;

                    if (reverseSubList)
                    {
                        currentNode.Next = previousNode;
                    }
                    
                    // Move pointers 1-step forward
                    previousNode = currentNode;
                    currentNode = nextNode;
                    count++;
                }

                // Connect previous sub-list's end to the new start of reversed sub-list
                if (prevSubListEnd != null)
                {
                    prevSubListEnd.Next = previousNode;
                }
                else
                {
                    head = previousNode; // If it's the first sub-list, update the head
                }

                startNode.Next = currentNode; // Connect the end of reversed sub-list to the next node

                // Move previousNode to the end of the reversed sub-list for the next iteration
                previousNode = startNode;

                reverseSubList = !reverseSubList; // Toggle the flag to reverse or not
            }

            // Print the modified linked list
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

