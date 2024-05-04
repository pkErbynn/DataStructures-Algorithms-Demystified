// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

/* 
Solution #
The problem follows the In-place Reversal of a LinkedList pattern. Similar approach can be used as discussed in Reverse a LinkedList. 
Here are the steps we need to follow:

1. Skip the first p-1 nodes, to reach the node at position p.
2. Remember the node at position p-1 to be used later to connect with the reversed sub-list.
3. Next, reverse the nodes from p to q using the same approach discussed in Reverse a LinkedList.
4. Connect the p-1 and q+1 nodes to the reversed sub-list. 
    NB: 4 pointers are needed from the 3 partitioned sections for complete connections:
        - 1. last node of first (1/3) section
        - 2. first node of middle (2/3) section
        - 3. last node of middle (2/3) section
        - 4. first node of last (3/3) section
*/

// FOCUS: p and q
namespace seesharp
{
    class LinkedListSubReversal
    {
        public static void ReverseSubLinkedList(Node head, int start, int end) // start = p, end = q
        {
            Console.WriteLine("\nReverseSubLinkedList:");

            if (head == null || head.Next == null || start == end) return;    // guard clause: invalid list

            Node currentNode = head;
            Node previousNode = null;

            // move current forward to get to the start point, p
            // nb: test data is int type not string so ".value < start" makes sense, ensuring it's within range
            while (currentNode != null && currentNode.Value < start)
            {
                previousNode = currentNode;
                currentNode = currentNode.Next;
            }

            // alternatively: 
            // while (currentNode != null)
            // {
            //     previousNode = currentNode;
            //     currentNode = currentNode.Next;

            //     if(currentNode.Value == start) break;
            // }
            
            // after this while-loop: 
                // currentNode is exactly on the start point, p (cus last iteration is: currentNode = currentNode.Next)
                // previousNode is on the penultimate node of currentNode
                    // previousNode is needed since it's the pointer storage holding the node section that will be extracted 
                    // (ie, last node of first section(1/2)) 

            // store these pointers (nodeBeforeSubList, nodeBeforeSubList.next) for future connection of reversedSubList to the original whole list
            Node nodeBeforeSubList = previousNode;
            Node endNodeOfSubList = currentNode;    // currentNode/first node of subList will become the end of subList after reversal

////////
///CONTINUE FROM HERE
///////
            // do regular linkedList reversal in range, ie. from "start" to "end" 
            while (currentNode != null && start <= end)
            {
                Node nextNode = currentNode.Next;
                currentNode.Next = previousNode;

                // move pointers 1-step forward
                b
                 = currentNode;
                currentNode = nextNode;
                start = start + 1;
            }
            // after this while-loop: 
                // currentNode is at the first node of last (3/3) section
                // previousNode is now the head/start of the reversed sublist

            // connect main list with first node of reversedSubList (previousNode)
            if (nodeBeforeSubList != null)  // nodeBeforeSubList can be null if "previousNode" was initialized to null or when the "start/p" interval starts from the head. Means, previousNode will point outside the linkedList and that it's not needed for connection
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

            // connect end node of reversed sublist to main list (first node of last (3/3) section)
            endNodeOfSubList.Next = currentNode;    // currentNode is now the first node after subList, connected to by the endOfReversedSubList


            // === print reversed linkedList
            Node currentNodeToPrint = head;     // above operations done in-place so head can be traversed and will see the effect
            while (currentNodeToPrint != null)
            {
                Console.Write(currentNodeToPrint.Value + " -> ");
                currentNodeToPrint = currentNodeToPrint.Next;
            }
            Console.WriteLine("done");
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


