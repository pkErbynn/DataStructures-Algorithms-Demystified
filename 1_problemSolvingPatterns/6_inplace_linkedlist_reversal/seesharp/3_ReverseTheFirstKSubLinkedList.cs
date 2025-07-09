using System;
namespace seesharp
{
	public class TheFirstKSubLinkedListReversal
	{
        public static void ReverseTheFirstKSubLinkedList(Node head, int k)
        { 
            if(head == null || head.Next == null || k < 2) return;

            Node currentNodePtr = head;
            Node previousNodePtr = null;

            // reverse the first k block
            int counter = 1;
            while(currentNodePtr != null && counter <= k){
                Node nextNode = currentNodePtr.Next;
                currentNodePtr.Next = previousNodePtr;

                // Move pointers 1-step forward
                previousNodePtr = currentNodePtr;
                currentNodePtr = nextNode;

                counter = counter + 1;
            }

            // connect last tail element of the k-block to currentNodePtr, which now points one node ahead of k, ie, currentNodePtr points to k+1
            // since the sublist is reversed, head is now the tail of the sub
            head.Next = currentNodePtr;

            // re-tag new head
            head = previousNodePtr;
            
            // print
            Node currentNodePtrToPrint = head;
            while(currentNodePtrToPrint != null){
                Console.Write(currentNodePtrToPrint.Value + " -> ");
                currentNodePtrToPrint = currentNodePtrToPrint.Next;
            }
            Console.WriteLine("done");
        }
    }
}

