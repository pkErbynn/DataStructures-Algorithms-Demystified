/*
Given the head of a Singly LinkedList, reverse the LinkedList.
Write a function to return the new head of the reversed LinkedList.
*/

using System;
namespace seesharp
{
    public class ReversedLinkedList
	{
		public static Node ReverseLinkedList(Node head)
		{
			if (head == null || head.Next == null)
			{
				return null;
			}

			Node previousNodePtr = null;
			Node currentNodePtr = head;

			while (currentNodePtr != null)	// while valid
			{
				Node nextNode = currentNodePtr.Next;
				currentNodePtr.Next = previousNodePtr;	// point in reverse

				// push/move pointers forward
				previousNodePtr = currentNodePtr;
				currentNodePtr = nextNode;
			}

			return previousNodePtr;
		}

		public static void PrintReversedLinkedList(Node head)
		{
            // Console.WriteLine("OriginalLinkedList:");

            // // print linkedlist before
            // var currentNodePtr = head;
            // while (currentNodePtr != null)
            // {
            //     Console.Write(currentNodePtr.Value + " -> ");
            //     currentNodePtr = currentNodePtr.Next;
			// }
			// Console.WriteLine(); // separate before and after line

            Node reversedLinkedList = ReverseLinkedList(head);
            Console.WriteLine("ReversedLinkedList:");

			// print reversed linkedlist
			while (reversedLinkedList != null)
			{
				Console.Write(reversedLinkedList.Value + " -> ");
				reversedLinkedList = reversedLinkedList.Next;
			}
		}
	}
}

/*
Time complexity = O(N) where ‘N’ is the total number of nodes in the LinkedList
Space complexity = O(1) since only used constant space
 */