
####### implement queue with stack

# 1
class QueueUsingStacks:
    def __init__(self):
        self.stack1 = Stack()  # Stack for enqueue operations
        self.stack2 = Stack()  # Stack for dequeue operations

    # Enqueue operation (push to queue)
    def enqueue(self, x):
        self.stack1.push(x)

    # Dequeue operation (remove from queue)
    def dequeue(self):
        if self.stack2.empty():  # If stack2 is empty, transfer elements from stack1
            while not self.stack1.empty():
                self.stack2.push(self.stack1.pop())

        if not self.stack2.empty():  # Pop from stack2 if it has elements
            return self.stack2.pop()
        else:
            return "Queue is empty"

    # Check if the queue is empty
    def empty(self):
        return self.stack1.empty() and self.stack2.empty()

'''
Time Complexity:

- Enqueue: O(1) time because we only push the element onto stack1.
- Dequeue:
...If stack2 is not empty, popping from stack2 takes O(1) time.
...If stack2 is empty, all elements from stack1 are transferred to stack2, which takes O(n) time, where n is the number of elements in stack1. 
...Therefore, the amortized time complexity for dequeue is O(1) because each element is moved between the stacks at most once during the overall sequence of operations.

'''

# 2

class QueueUsingStacks:
    def __init__(self):
        self.stack1 = []  # Stack used to store the queue in order
        self.stack2 = []  # Temporary stack used during enqueue

    # Enqueue operation (push to queue)
    def enqueue(self, x):
        # Move all elements from stack1 to stack2
        while self.stack1:
            self.stack2.append(self.stack1.pop())

        # Push the new element onto stack1
        self.stack1.append(x)

        # Move all elements back from stack2 to stack1
        while self.stack2:
            self.stack1.append(self.stack2.pop())

    # Dequeue operation (remove from queue)
    def dequeue(self):
        if not self.stack1:  # If stack1 is empty, the queue is empty
            return "Queue is empty"
        return self.stack1.pop()  # Simply pop from stack1, which contains the queue in order

    # Check if the queue is empty
    def empty(self):
        return not self.stack1  # Queue is empty if stack1 is empty

'''
Time Complexity Analysis:
- Enqueue: O(n), where n is the number of elements already in the queue. 
...This is because we move all elements from stack1 to stack2, push the new element onto stack1, 
...and then move all elements back from stack2 to stack1. 
Thus, each enqueue operation requires moving all existing elements twice (from stack1 to stack2 and back).
- Dequeue: O(1) because we simply pop from stack1.

'''