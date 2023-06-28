namespace seesharp;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        // create linkedlist
        Node head = new Node(1);
        head.Next = new Node(2);
        head.Next.Next = new Node(3);
        head.Next.Next.Next = new Node(4);
        head.Next.Next.Next.Next = new Node(5);
        __ReversedLinkedList.PrintReversedLinkedList(head);
    }
}
