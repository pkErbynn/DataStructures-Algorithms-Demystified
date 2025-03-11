class LinkedList:
    class Node:
        def __init__(self, val, next=None):
            self.val = val
            self.next = next
    
    def __init__(self):
        self.head = None
        self.size = 0
    
    def prepend(self, value): # O(1)
        self.head = LinkedList.Node(value, self.head)
        self.size += 1
    
    def __len__(self):
        return self.size
        
    def __iter__(self):
        n = self.head
        while n:
            yield n.val
            n = n.next
    
    def __repr__(self):
        return '[' + ', '.join(repr(x) for x in self) + ']'
    

# Sample test cases
# Test case 1: Prepending elements to the list and checking its representation
ll = LinkedList()
ll.prepend(3)
ll.prepend(2)
ll.prepend(1)

# Printing the results of test case 1
print("Elements:", repr(ll))
print("Length:", len(ll))
print("Listings:", list(ll))





# Reimplementing the provided JavaScript code into Python

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SLL:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    # append
    def push(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return self
    
    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        current_node = self.head
        for i in range(index):
            current_node = current_node.next
        return current_node

    def set(self, index, value):
        node = self.get(index)
        if node:
            node.value = value
            return True
        return False

    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.shift()
        if index == self.length - 1:
            return self.pop()
        previous_node = self.get(index - 1)
        removed_node = previous_node.next
        previous_node.next = removed_node.next
        self.length -= 1
        return removed_node

    def insert(self, index, value):
        if index < 0 or index > self.length:
            return False
        if index == 0:
            self.unshift(value)
            return True
        if index == self.length:
            self.push(value)
            return True
        new_node = Node(value)
        previous_node = self.get(index - 1)
        new_node.next = previous_node.next
        previous_node.next = new_node
        self.length += 1
        return True
    
    # helper functions
    def pop(self):
        if self.length == 0 or self.head is None:
            return None
        if self.length == 1:
            removed_node = self.head
            self.head = None
            self.tail = None
            self.length -= 1
            return removed_node
        current_node = self.head
        penultimate_node = None
        while current_node.next is not None:
            penultimate_node = current_node
            current_node = current_node.next
        penultimate_node.next = None
        self.tail = penultimate_node
        self.length -= 1
        return current_node

    # prepend
    def unshift(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return self

    def shift(self):
        if self.length == 0:
            return None
        if self.length == 1:
            head = self.head
            self.head = None
            self.tail = None
            self.length = 0
            return head
        remove_head = self.head
        self.head = self.head.next
        self.length -= 1
        remove_head.next = None
        return remove_head

    def print_list(self):
        current_node = self.head
        result = []
        while current_node:
            result.append(current_node.value)
            current_node = current_node.next
        return result

######### Nath
    def append(self, value):
        if self.head == None:
            self.head = LinkedList.Node(value, None)
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = LinkedList.Node(value, None)
        self.size += 1
            
    def __getitem__(self, index):
        if (index < 0) or (index >= self.size):
            return None
            
        current = self.head
        for i in range(index):
            current = current.next
        return current.val
        
    def __setitem__(self, index, newVal):
        if (index < 0) or (index >= self.size - 1):
            print("Invalid Index")
        else:
            current = self.head
            for i in range(index):
                current = current.next
            current.val = newVal
    
    def deletion(self, index):
        if (index < 0) or (index >= self.size - 1):
            print("Invalid Index")
        elif index == 0:
            self.head = self.head.next
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next
            current.next = current.next.next
        self.size -= 1
                
    def insertion(self, index, newVal):
        insert = LinkedList.Node(newVal, None)
        if (index < 0) or (index >= self.size - 1):
            print("Invalid Index")
        elif index == 0:
            insert.next = self.head
            self.head = insert
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next
            insert.next = current.next
            current.next = insert
        self.size += 1  
#######

# Testing the implementation with a sample case
sl = SLL()
sl.push(1)
sl.push(2)
sl.push(3)
print("Initial list:", sl.print_list())

# Testing get function
print("Value at index 1:", sl.get(1).value if sl.get(1) else None)

# Testing insert
sl.insert(1, 4)
print("List after inserting 4 at index 1:", sl.print_list())

# Testing pop
sl.pop()
print("List after popping the last element:", sl.print_list())

# Testing reverse
sl.reverse()
print("List after reversing:", sl.print_list())


'''

TIME COMPLEXITIES for insertion and deletion in a singly linkedlist is generally O(1) or O(n) depending on the position or index of operation

Considering best and worse case scenarios,

Insertion:
...@ head/beginning => 0(1)..as it doesn't matter the number of items in the list
...@ tail/end => O(1), if tail pointer EXISTS, as can directly access the tail node and append the new node in constant time.
...@ tail/end => O(n), if NO tail pointer exists, need to traverse entire list in 'n' time.
...@ middle/anywhere => O(n)

Removal:
...@ head => O(1)...as only need to update the head pointer to point to the second node.
...@ anywhere else => O(n)...as requires traversing the entire list to find the penultimate node to set its node's next pointer to null to truncate list and to avoid data leakage.

If you need any more clarification, feel free to join my office hours on Tues 10pm CT.


'''
