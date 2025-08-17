namespace seesharp;
class Program
{
    static void Main(string[] args)
    {
        // create linkedlist
        Node head = new Node(1);
        head.Next = new Node(2);
        head.Next.Next = new Node(3);
        head.Next.Next.Next = new Node(4);
        head.Next.Next.Next.Next = new Node(5);
        ReversedLinkedList.PrintReversedLinkedList(head);

        // create linkedlist
        Node head2 = new Node(1);
        head2.Next = new Node(2);
        head2.Next.Next = new Node(3);
        head2.Next.Next.Next = new Node(4);
        head2.Next.Next.Next.Next = new Node(5);
        LinkedListSubReversal.ReverseSubLinkedList(head2, 2, 4);

        // create linkedlist
        Node head3 = new Node(1);
        head3.Next = new Node(2);
        head3.Next.Next = new Node(3);
        head3.Next.Next.Next = new Node(4);
        head3.Next.Next.Next.Next = new Node(5);
        TheFirstKSubLinkedListReversal.ReverseTheFirstKSubLinkedList(head3, 3);

        // create linkedlist
        Node head4 = new Node(1);
        head4.Next = new Node(2);
        head4.Next.Next = new Node(3);
        head4.Next.Next.Next = new Node(4);
        head4.Next.Next.Next.Next = new Node(5);
        head4.Next.Next.Next.Next.Next = new Node(6);
        head4.Next.Next.Next.Next.Next.Next = new Node(7);
        head4.Next.Next.Next.Next.Next.Next.Next = new Node(8);
        ReverseKsizedSubLists.ReverseEveryKsizedSubLists(head4, 2);

        // create linkedlist
        Node head5 = new Node(1);
        head5.Next = new Node(2);
        head5.Next.Next = new Node(3);
        head5.Next.Next.Next = new Node(4);
        head5.Next.Next.Next.Next = new Node(5);
        head5.Next.Next.Next.Next.Next = new Node(6);
        head5.Next.Next.Next.Next.Next.Next = new Node(7);
        head5.Next.Next.Next.Next.Next.Next.Next = new Node(8);
        AlternatingKsizedSubListsReversal.ReverseAlternatingKsizedSubLists(head5, 2);
    }
}
