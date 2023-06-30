// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.


// FOCUS: p and q
namespace seesharp
{
    class LinkedListSubReversal
    {
        public static void ReverseSubLinkedList(Node head, int p, int q)
        {
            Console.WriteLine("\nReverseSubLinkedList:");

            if (head == null || head.Next == null) return;    // guard clause

            Node currentNode = head;
            Node previousNode = null;

            while (currentNode != null)
            {
                Node nextNode = currentNode.Next;
                currentNode.Next = previousNode;    // point backwards

                previousNode = currentNode;
                currentNode = nextNode;
            }


            // print reversed linkedList
            while (previousNode != null)
            {
                Console.Write(previousNode.Value + ", ");
                previousNode = previousNode.Next;
            }
        }
    }
}
