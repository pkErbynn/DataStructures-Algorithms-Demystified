# DataStructuresDemystified
Unveiling core and advanced data structures, mastering essential DSA patterns and techniques, enhancing problem-solving skills, and connecting the dots with clarity.


## The 7 Core Tools

| Structure / Tool | Trigger / Notice |
|---|---|
| **Array / List** | When you need indexed access, order matters, or you need to walk/traverse through the whole collection |
| **Hash Map** | When you need to access one item (or a whole object) by its name/key, or need fast lookup, counting, frequency tracking, or mapping |
| **Set** | When you need to check whether an item has been seen before, or check uniqueness or duplicates. Buzz Words: "no repeated character" |
| **Stack** | When you need to handle the latest item first (LIFO behavior), also for nested/deep tracing/traversal, undo, and backtracking |
| **Queue** | When you need to process items based on the order they arrive, meaning the earliest item matters first (FIFO processing), or for level-by-level traversal |
| **Heap** | When you repeatedly need the smallest (min) or largest (max) element without sorting the entire collection, Top-K elements, or priority-based processing. Used in a **Priority Queue** |
| **Tree** | When data has hierarchical parent-child relationships or you need to efficiently query ordered/range data. Used in a **BST** when ordered searching, insertion, or smaller-left/larger-right relationships matter |

### Secondary / Extra Tools

| Structure / Tool | Trigger / Notice |
|---|---|
| **Linked List** | When you need frequent node insertion/removal or pointer-based traversal |
| **Graph** | When you are dealing with relationships, connections, networks, paths, or dependencies |
| **Trie** | When you need efficient prefix-based searching over strings or words |


## The Core Patterns

| Pattern | Trigger / Notice |
|---|---|
| **Hash Map Frequency Counter** | When you need to keep track of how many times something appears, compare frequencies, count occurrences, detect duplicates, group items based on counts, or group items based on keys |
| **Two Pointers** | When you need to compare or move through elements from two positions, especially in sorted arrays/lists, pairs, palindromes, or in-place rearrangement. **Buzz Word clue/triggers:** sorted input items |
| **Sliding Window** | When you are tracking a contiguous range while expanding and shrinking, or working with a contiguous subarray/substring and need the longest, shortest, maximum, minimum, or valid window. Buzz Word Triggers: Stretch, contiguous run |
| **Binary Search** | When the data/search space is sorted or monotonic and you can eliminate half of the possibilities at each step |
| **DFS** | When you need to go deep into one path before trying another, especially in trees, graphs, grids, paths, or recursive traversal |
| **BFS** | When you need to find the shortest path in an unweighted graph, nearest result, or explore level-by-level |
| **Fast & Slow Pointers** | When you need to detect a cycle, find the middle, or identify repeated traversal behavior |
| **Cyclic Sort** | When the input contains numbers in a known range, usually `1...n` or `0...n`, and you can place each number directly at its correct index. Useful for finding missing, duplicate, or misplaced numbers. Usually sorts/rearranges **in place** |
| **Prefix Sum** | When you need repeated subarray/range sums or cumulative values without recalculating the whole range each time |
| **Backtracking** | When you need to try different arrangements/choices, undo a choice if needed, and generate combinations, permutations, subsets, or paths |
| **Basic Dynamic Programming** | When the same smaller subproblem appears again, reuse the answer instead of solving it again. Often used for minimum, maximum, count, or number-of-ways problems |


### The Secondary / Extra Patterns (Need verification)

| Pattern | Trigger / Notice |
|---|---|
| **Greedy** | When choosing the best option at the current step can lead to the overall best solution, and you do not need to go back and change earlier choices |
| **Monotonic Stack** | When you need the next/previous greater or smaller element, nearest larger/smaller value, or boundary around an element |
| **Topological Sort** | When you have prerequisites, dependencies, or tasks that must happen in a certain order |
| **Union-Find / Disjoint Set** | When you need to merge groups or quickly check whether two items belong to the same connected group |
| **Merge Intervals** | When you are given ranges/intervals and need to merge overlaps, detect conflicts, or organize schedules |
| **Binary Search on Answer** | When you are searching for the minimum possible or maximum feasible answer, and you can test whether a candidate answer works |
| **Divide and Conquer** | When you can split a problem into smaller independent parts, solve each part, then combine the results |
| **Monotonic Queue / Deque** | When you need the maximum or minimum value inside a moving/sliding window efficiently |
| **Bit Manipulation / XOR** | When the problem involves binary states, toggling, odd/even occurrences, or finding a unique item where duplicates cancel out |


NB:
- Just solving tons of questions w/out patterns and tools is not ideal and definitely not the right approach
- Learn the triggers to know how to tackle problem even without writing one line of code
- Combine tools and patterns. 
    - Right Structure/Tool + Right Pattern = Solution
- In an interview, say your triggers, don't go silence cus silence might mean you have no idea in what you're doing or you're stuck...so narrate your triggers...
    - eg: the question says THIS so i need THAT....that shows how you think even without writing a line of code and that matters more than the solution
- Patterns gives you competent but volume(+ repetition) gives you speed, and speed is what is needed for a 2-question in a 45min interview 