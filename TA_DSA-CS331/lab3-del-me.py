class Stack:
    class Node:
        def __init__(self, val, next=None):
            self.val = val
            self.next  = next
    
    def __init__(self):
        self.top = None

    def push(self, val):
        self.top = Stack.Node(val, self.top)
        
    def pop(self):
        assert self.top, 'Stack is empty'
        val = self.top.val
        self.top = self.top.next
        return val
    
    def peek(self):
        return self.top.val if self.top else None
    
    def empty(self):
        return self.top == None
    
    def __bool__(self):
        return not self.empty()
    
    def __repr__(self):
        if not self.top:
            return ''
        return '--> ' + ', '.join(str(x) for x in self)
    
    def __iter__(self):
        n = self.top
        while n:
            yield n.val
            n = n.next


delim_openers = '{([<'
delim_closers = '})]>'

def check_delimiters(expr):
    s = Stack() # Initializes stack
    array = list(expr) # Next 3 lines make the strings into arrays
    array_open = list(delim_openers)
    array_close = list(delim_closers)
    for i in range(len(array)): # Cycles through each object in array
        for j in range(len(array_open)): # Cycles through each object in array_open
            if array_open[j] == array[i]: # Determines if the object of array is in array_open, if so, adds object to stack
                s.push(array[i])
        for j in range(len(array_close)): # Cycles through each object in array_close
            if array_close[j] == array[i]: # Determines if the object of array is in array_close
                if s.empty(): # If stack is empty then you can't close so false
                    return False
                elif array_close.index(array[i]) != array_open.index(s.peek()): # If stack isn't empty, checks if the delimiters are satisfiable
                    return False
                else: # Removes element because the delimiters are satisfiable
                    s.pop()
    if s.empty(): # If stack is empty after cycling through array, it is satisfied
        return True
    else: # If stack isn't empty after cycling through array, it isn't satisfied
        return False       
    """Returns True if and only if `expr` contains only correctly matched delimiters, else returns False."""


    # (1 point)
# you may find the following precedence dictionary useful
prec = {'*': 2, '/': 2,
        '+': 1, '-': 1}

def infix_to_postfix(expr):
    """Returns the postfix form of the infix expression found in `expr`"""
    ops = Stack()
    postfix = []
    toks = expr.split()

    for token in toks:
        if token.isdigit():
            postfix.append(token)
        if ops.empty() or ops.peek() == '(':
            ops.push(token)
        if token == '(':
            ops.push(token)
        if token == ')':
            while not ops.empty():
                item = ops.pop()
                if item in ('+', '-', '*', '/'):
                    postfix.append(item)
                if item == '(':
                    break
        if prec.get(token, 0) > prec.get(ops.peek(), 0):
            ops.push(token)
        if prec.get(token, 0) == prec.get(ops.peek(), 0):
            postfix.append(ops.pop())
            ops.push(token)
        if prec.get(token, 0) < prec.get(ops.peek(), 0):
            while not ops.empty() and ops.peek() in ('*', '/'):
                postfix.append(ops.pop())
                
    while not ops.empty():
        if ops.peek() in ('+', '-', '*', '/'):
            postfix.append(ops.pop())
    
    return ' '.join(postfix)

# I have been working on this for a long time and trying to go over and follow each step perfectly and making sure its all right, but for some reason,
# I keep getting an error thrown at me. I've tried following the steps as best as I can but something keeps going wrong.
from unittest import TestCase
tc = TestCase()
tc.assertTrue(check_delimiters('()'))
tc.assertTrue(check_delimiters('[]'))
tc.assertTrue(check_delimiters('{}'))
tc.assertTrue(check_delimiters('<>'))

tc.assertTrue(check_delimiters('([])'))
tc.assertTrue(check_delimiters('[{}]'))
tc.assertTrue(check_delimiters('{<()>}'))
tc.assertTrue(check_delimiters('<({[]})>'))

tc.assertFalse(check_delimiters('([] () <> [])'))
tc.assertTrue(check_delimiters('[{()} [] (<> <>) {}]'))
tc.assertTrue(check_delimiters('{} <> () []'))
tc.assertTrue(check_delimiters('<> ([] <()>) <[] [] <> <>>'))