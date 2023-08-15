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
    }
}
