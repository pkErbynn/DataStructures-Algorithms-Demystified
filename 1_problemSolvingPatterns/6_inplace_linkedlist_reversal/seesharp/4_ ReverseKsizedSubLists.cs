using System;
namespace seesharp
{
	public class ReverseKsizedSubLists
	{
        public static void ReverseEveryKsizedSubLists(Node head, int k)
        { 
            // Not reviewed and understood: just copied the solution

            Console.WriteLine("\nReverseKsizedSubLists:");

            if (head == null || head.Next == null || k <= 1) return;    // guard clause: invalid list or k

            Node currentNode = head;
            Node previousNode = null;

            while (currentNode != null)
            {
                Node startNode = currentNode;   // Start of the k-sized sub-list
                Node prevSubListEnd = previousNode; // Previous sub-list's end (for connection)

                int count = 0;

                // Traverse the k-sized sub-list
                while (currentNode != null && count < k)
                {
                    Node nextNode = currentNode.Next;
                    currentNode.Next = previousNode;

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

