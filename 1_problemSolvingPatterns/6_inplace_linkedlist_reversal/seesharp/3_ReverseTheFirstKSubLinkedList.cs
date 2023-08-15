using System;
namespace seesharp
{
	public class TheFirstKSubLinkedListReversal
	{
        public static void ReverseTheFirstKSubLinkedList(Node head, int k)
        { 
            if(head == null || head.Next == null || k < 2) return;

            Node currentNode = head;
            Node previousNode = null;

            int counter = 1;
            while(currentNode != null && counter <= k){
                Node nextNode = currentNode.Next;
                currentNode.Next = previousNode;

                // Move pointers 1-step forward
                previousNode = currentNode;
                currentNode = nextNode;
                counter = counter + 1;
            }

            // point previous head to current (first node of other half)
            head.Next = currentNode;

            // tag head
            head = previousNode;
            
            // print
            Node currentNodeToPrint = head;
            while(currentNodeToPrint != null){
                Console.Write(currentNodeToPrint.Value + " -> ");
                currentNodeToPrint = currentNodeToPrint.Next;
            }
            Console.WriteLine("done");
        }
    }
}

