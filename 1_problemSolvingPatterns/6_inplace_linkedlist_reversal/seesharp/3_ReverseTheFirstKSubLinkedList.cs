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

            // reverse the first k block
            int counter = 1;
            while(currentNode != null && counter <= k){
                Node nextNode = currentNode.Next;
                currentNode.Next = previousNode;

                // Move pointers 1-step forward
                previousNode = currentNode;
                currentNode = nextNode;
                counter = counter + 1;
            }

            // connect last tail element of the k-block to currentNode, which now points one node ahead of k, ie, currentNode points to k+1
            // since the sublist is reversed, head is now the tail of the sub
            head.Next = currentNode;

            // re-tag new head
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

