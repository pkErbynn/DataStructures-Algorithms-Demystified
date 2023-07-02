// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.


// FOCUS: p and q
namespace seesharp
{
    class LinkedListSubReversal
    {
        public static void ReverseSubLinkedList(Node head, int start, int end) // start = p, end = q
        {
            Console.WriteLine("\nReverseSubLinkedList:");

            if (head == null || head.Next == null || start == end) return;    // guard clause

            Node currentNode = head;
            Node previousNode = null;

            // move current forward to get to the start point
            while (currentNode != null && currentNode.Value < start)
            {
                previousNode = currentNode;
                currentNode = currentNode.Next;
            }

            // store these pointers (nodeBeforeSubList, nodeBeforeSubList.next) for future connection of reversedSubList to original whole list
            Node nodeBeforeSubList = previousNode;
            Node endNodeOfSubList = currentNode;    // currentNode/first node of subList will become the end of subList after reversal

            // do regular linkedList reversal in range, ie. from start to end 
            while (currentNode != null && start <= end)
            {
                Node nextNode = currentNode.Next;
                currentNode.Next = previousNode;

                previousNode = currentNode;
                currentNode = nextNode;
                start = start + 1;
            }

            // connect main list with first node of reversedSubList (previousNode)
            if (nodeBeforeSubList != null)
            {
                nodeBeforeSubList.Next = previousNode;  // previousNode is now the head of the reversedSubList, connected to by the nodeBeforeReversedSublist
            }

            // if happens nodeBeforeSubList is null, means start subList range started from the head of main linkedList
            // further means, didn't enter first while loop, thus previousNode will be null
            // then head has to start from prevNode, which is the startNode of the reversedSubList
            if (nodeBeforeSubList == null)
            {
                head = previousNode;
            }

            // connect end node of reversed sublist to main list
            endNodeOfSubList.Next = currentNode;    // currentNode is now the first node after subList, connected to by the endOfReversedSubList


            // === print reversed linkedList
            Node currentNodeToPrint = head;     // above operations done in-place so head can be traversed and will see the effect
            while (currentNodeToPrint != null)
            {
                Console.Write(currentNodeToPrint.Value + ", ");
                currentNodeToPrint = currentNodeToPrint.Next;
            }
            Console.WriteLine("...");
        }
    }
}

/*
Time complexity: O(N) where ‘N’ is the total number of nodes in the LinkedList.
Space complexity: O(1), as used constant space

=====

Similar Question: Reverse the first ‘k’ elements of a given LinkedList.
Solution: This can be easily converted to above problem; to reverse the first ‘k’ nodes of the list, from p=1 to q=k.
*/


