/*
Given the head of a Singly LinkedList, reverse the LinkedList.
Write a function to return the new head of the reversed LinkedList.
*/

using System;
namespace seesharp
{
	public class __ReversedLinkedList
	{
		public static Node ReverseLinkedList(Node head)
		{
			if (head == null || head.Next == null)
			{
				return null;
			}

			Node previousNode = null;
			Node currentNode = head;

			while (currentNode != null)
			{
				Node nextNode = currentNode.Next;
				currentNode.Next = previousNode;

				// push pointers forward
				previousNode = currentNode;
				currentNode = nextNode;
			}

			return previousNode;
		}

		public static void PrintReversedLinkedList(Node head)
		{
			// print linkedlist before
			var currentNode = head;
            while (currentNode != null)
            {
                Console.Write(currentNode.Value + " -> ");
                currentNode = currentNode.Next;
			}
			Console.WriteLine(); // separate before and after line

            Node reversedLinkedList = ReverseLinkedList(head);

			// print reversed linkedlist
			while (reversedLinkedList != null)
			{
				Console.Write(reversedLinkedList.Value + " -> ");
				reversedLinkedList = reversedLinkedList.Next;
			}
		}
	}

	public class Node
	{
        public int Value { get; set; }
		public Node Next { get; set; }

        public Node(int value)
		{
			this.Value = value;
			this.Next = null;
		}
	}
}

/*
Time complexity = O(N) where ‘N’ is the total number of nodes in the LinkedList
Space complexity = O(1) since only used constant space
 */