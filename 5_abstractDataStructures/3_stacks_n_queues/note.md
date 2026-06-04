> In short: Stack and Queues are basically used when you want ORDERRING in the way data is processed...but as to how the data need to be sorted - that's where you either choose stack or queue

## STACK
- is a data collection data structure
- based on LIFO operation
- means, last element added to the stack will be the first element to be removed

#### Applications
- when need to store data such that LAST THING ADDED, is the last thing removed ***
- undo
- function call stack: manage function invocations
- VCS: `git stash pop`


## Queue
- is a DS with FIFO operation
- Has 2 operations: 
    - ENQUEUE & DEQUEUE
    - Operations occur at ONLY BOTH SIDES


#### Applications
- uploading resources: first sent is uploading provided same file size
- printing of file
- background tasks


#### Implementation approaches
1. using array
2. using linkedlist DS