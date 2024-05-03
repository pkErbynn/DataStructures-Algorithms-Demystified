### DOUBLY LINKED LIST

Almost identical to Singly Linked List
- bunch of nodes
- no indexing for random access
- has NODE, HEAD, TAIL, LENGTH
- node point to the next node ahead of it

But every NODE has a pointer to the NODE BEHIND IT
- pointer at both directions, front n back

Tradoff
- more flexible,
- uses more memory

#### Applications
- Caching: In microservices architecture, caching can be used to improve performance by storing frequently accessed data in memory. Linked lists can be used to implement a cache by creating a list of recently accessed items, with the most recently accessed item at the head of the list. When a new item is accessed, it can be added to the head of the list, and the least recently accessed item can be removed from the tail.
- Queues: In API development, linked lists can be used to implement a queue, which is a data structure used to manage requests or tasks. For example, a queue can be used to manage requests to a server or to manage tasks in a background process. Linked lists can be used to implement a queue by creating a list of tasks, with the first task added to the head of the list, and the last task added to the tail. When a task is completed, it can be removed from the head of the list.


#### Time complexity
- insertion: O(1)
- deletion: depends...start/end: O(1)...middle: o(n)
- access: o(n)
- search: o(n).....technically, search is O(n/2) but still o(n)

#### In sum:
- singly linked list 
  ...better for start/end insertion operations
  ...doesn't eat memory
- doubly linked list
  ...better for start/end insertion/deletion operations
  ...better for finding node cus can be done in half the time
  ...takes up MORE MEMORY considering the extra pointer
  ...USE-CASE
     ...navigating back and forth with browser history
     ...since prev and next history is stored in pointer

##### what is the time complexity for node removal in doubly linked list

The time complexity for node removal in a doubly linked list depends on the position of the node being removed.

- If the node to be removed is at the beginning or end of the doubly linked list (i.e., the head or tail node), then the time complexity is O(1) since no traversal of the list is required.

- If the node to be removed is somewhere in the middle of the doubly linked list, then the time complexity is O(n), where n is the number of nodes in the linked list. This is because we need to traverse the list to find the node to be removed, and then update the pointers of the surrounding nodes to remove the node from the list.

Overall, 
- the worst-case time complexity for node removal in a doubly linked list is O(n), 
- while the best-case time complexity is O(1) if the node being removed is at the beginning or end of the list.


#### what is the time complexity for insertion operation in doubly linked list

The time complexity for insertion operation in a doubly linked list also depends on the position where the new node is to be inserted.

- If the new node is being inserted at the beginning of the doubly linked list (i.e., as the new head node), then the insertion operation can be done in O(1) time complexity since no traversal of the list is required.

- If the new node is being inserted at the end of the doubly linked list (i.e., as the new tail node), then the insertion operation requires updating the tail node pointer, which can be done in O(1) time complexity.

- If the new node is being inserted at some position in the middle of the doubly linked list, then the time complexity will be O(n) since we need to traverse the list to reach the position where the new node is to be inserted. Once we have reached the desired position, the insertion operation can be done in O(1) time complexity by updating the pointers of the surrounding nodes to include the new node.

Overall, the worst-case time complexity for insertion operation in a doubly linked list is O(n), while the best-case time complexity is O(1) if the new node is being inserted at the beginning or end of the list.

#### what are some of the practical use-cases of doubly linked list
Doubly linked lists have several practical use cases where we need to access the previous and next nodes of a current node. Some examples include:

- Implementing undo and redo functionality in applications: In applications where users can perform a sequence of operations, we can use a doubly linked list to maintain a history of the operations. When a user undoes an operation, we can easily traverse the list backward to find the previous operation and undo it.

- Implementing cache in web browsers: Web browsers use a cache to store recently accessed web pages to speed up page loading time. We can use a doubly linked list to implement a cache where each node represents a web page. The previous node of a given node represents the page that was accessed before it, while the next node represents the page that was accessed after it.

- Implementing music playlists: In music players, we can use a doubly linked list to represent a playlist where each node represents a song. The previous node of a given node represents the previous song in the playlist, while the next node represents the next song in the playlist.

- Implementing text editors: In text editors, we can use a doubly linked list to represent the text buffer where each node represents a character. The previous node of a given node represents the previous character in the buffer, while the next node represents the next character in the buffer.

- In microservices api implementations, One potential use case for doubly linked lists in microservice API implementations is for message queuing. A doubly linked list can be used to maintain a queue of messages that need to be processed by microservices. The previous node of a given node in the linked list can represent the previous message in the queue, while the next node can represent the next message in the queue. This can help ensure that messages are processed in the order that they are received.
    
Overall, doubly linked lists are useful in situations where we need to traverse a list both forward and backward, and can be used in a wide range of applications.