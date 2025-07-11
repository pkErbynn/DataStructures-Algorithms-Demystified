/*
====== Q1 ====== 2p
Use a linked list to implement the addition on two polynomials. If polynomials have m
and n terms respectively, what is the time complexity of your program? Provide pseudo code and
complexity analysis.
*/


// Class to represent a node in the linked list
class MyNode {
    constructor(coefficient, exponent) {
        this.coefficient = coefficient;
        this.exponent = exponent;
        this.next = null;
    }
}

// Class to represent the polynomial as a linked list
class PolynomialLinkedList {
    constructor() {
        this.head = null;
    }

    // Function to append a term (node) to the polynomial
    append(coefficient, exponent) {
        const newNode = new MyNode(coefficient, exponent);
        if (this.head === null) {
            this.head = newNode;
        } 
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Function to add two polynomials
    static addPolynomials(poly1, poly2) {
        const result = new PolynomialLinkedList();
        let p1 = poly1.head;
        let p2 = poly2.head;

        // Traverse both polynomials until both are fully processed
        while (p1 !== null && p2 !== null) {
            if (p1.exponent === p2.exponent) {
                const newCoefficient = p1.coefficient + p2.coefficient;
                if (newCoefficient !== 0) {
                    result.append(newCoefficient, p1.exponent);
                }
                p1 = p1.next;
                p2 = p2.next;
            } else if (p1.exponent > p2.exponent) {
                result.append(p1.coefficient, p1.exponent);
                p1 = p1.next;
            } else if (p1.exponent < p2.exponent) {
                result.append(p2.coefficient, p2.exponent);
                p2 = p2.next;
            }
        }

        // appending the remaining terms from p1
        while (p1) {
            result.append(p1.coefficient, p1.exponent);
            p1 = p1.next;
        }

        // appending the remaining terms from p2
        while (p2) {
            result.append(p2.coefficient, p2.exponent);
            p2 = p2.next;
        }
            
        return result;
    }

    // Function to display the polynomial
    display() {
        let current = this.head;
        const terms = [];
        while (current !== null) {
            terms.push(`${current.coefficient}x^${current.exponent}`);
            current = current.next;
        }
        console.log(terms.join(' + '));
    }
}

// Example Usage

// Polynomial 1: 5x^3 + 4x^2 + 2x^1
const poly1 = new PolynomialLinkedList();
poly1.append(5, 3);
poly1.append(4, 2);
poly1.append(2, 1);

// Polynomial 2: 3x^3 + 1x^2 + 7x^1 + 6
const poly2 = new PolynomialLinkedList();
poly2.append(3, 3);
poly2.append(1, 2);
poly2.append(7, 1);
poly2.append(6, 0);

// Adding polynomials
let result = PolynomialLinkedList.addPolynomials(poly1, poly2);
result.display()

// O(n + m)




/*
========= Q2 =========== 3p

Pros and Cons of Lazy Deletion vs. Standard Deletion:

=== Lazy deletion
Pros:
- Can achieve a deletion time complexity of O(1). 
- Easy undo, can simply unmark the node as deleted.
Cons:
- Uses more memory since the deleted nodes are still occupying memory but not being used. Also, slower traversal because it must check each node for deletion status.

=== Standard deletion 
Pros:
- Memory efficient, free up memory immediately. 
- Faster traversal because no need to check for deleted nodes.
Cons:
- The deletion process is more complex and deleting a node requires access to the preceding
node to update its next pointer. Also, in the worst case, if the node is at the end of the list, the
runtime complexity will be O(n). 
- Requires pointer adjustments.


== Complexity:
Lazy Deletion: Deletion O(1), traversal O(n).
Standard Deletion: Deletion O(n), traversal O(n).

*/

class MyNode2 {
    constructor(value) {
        this.value = value;
        this.deleted = false;  // Mark if the node is deleted
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    lazyDelete(index) {
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                current.deleted = true;  // Mark as deleted
                return;
            }
            current = current.next;
            i++;
        }
    }

    traverse() {
        let current = this.head;
        while (current !== null) {
            if (!current.deleted) {
                console.log(current.value);  // Skip deleted nodes
            }
            current = current.next;
        }
    }
}


// ======== Q3 ======== 2p
/*
Postfix expression evaluation: a mathematical expression=13/25+61. What is its postfix
expression? Give out the pseudo code returning the evaluation of the postfix expression by using
ArrayList class to implement it.
*/

function evaluatePostfix(postfixExp){
    const arrayListAsStack = []
    const postfixExpTokens = postfixExp.split(' ')

    for(let token of postfixExpTokens){
        // If token is a number, Push to stack 
        if(!isNaN(token))
        {
            arrayListAsStack.push(parseFloat(token))
        }

        // If token is an operator, pop the last two elements from the stack and perform operation, then push to the stack again
        else {

            // order of operands during the computation matters paa
            // the second operand (operand2) should be the one that was pushed earlier in the stack, 
            // while the first operand (operand1) is the one popped later
            const operand2 = arrayListAsStack.pop(); // stack[stack.length - 1]; // Last operand
            const operand1 = arrayListAsStack.pop();   // stack[stack.length - 2] // penultimate element, or second last element
            const result = performComputation(operand1, operand2, token)
            arrayListAsStack.push(result);
        }
    }

    // the last remaining element in the stack is the final result
    return arrayListAsStack.pop();
}

function performComputation(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            throw new Error("Unsupported operator: " + operator);
    }
}

const postfixExpr = "13 25 / 61 +";  // Postfix expression for "13 / 25 + 61"
console.log(evaluatePostfix(postfixExpr));  // Expected output: 61.52




// ==== Q4 ===== 3p
/*
S and X denote the operations Push and Pop on a stack respectively. We assume that the initial
status of a stack is ф (empty). If we have a sequence of operations, such as SXSX, on the stack
and its status will return to ф, we call the sequence as certified.

(1)  design a rule to verify a sequence of S and X certified or not. (1pt)
(2) If two sequences are both certified, and both operate on the same input array of data,do you
think they return the same output array? Argue for your claim by an example.
*/


/*

(1) Rule to Verify a Sequence of S and X is Certified

To determine whether a sequence of S (Push) and X (Pop) operations is certified:

1. Ensure the number of X (Pop) operations never exceeds the number of S (Push) operations at any point in the sequence.
2. Ensure the total number of S operations equals the total number of X operations at the end of the sequence.
Algorithm:

Initialize a count to 0.
Traverse the sequence:
Increment count for S.
Decrement count for X.
If count becomes negative at any point, the sequence is not certified.
At the end of the sequence, check if count equals 0. If so, the sequence is certified.
Example:

SXSX:

S: count = 1
X: count = 0
S: count = 1
X: count = 0 (Certified)

SXXS:

S: count = 1
X: count = 0
X: count = -1 (Not certified)
(2) Do Two Certified Sequences Return the Same Output Array?

Claim: Certified sequences do not necessarily return the same output array when operating on the same input array of data.

Explanation: The order in which S (Push) and X (Pop) operations are performed determines the output array. Even if two sequences are certified, they can produce different output arrays if the order of operations differs.

Example: Input array: [1, 2, 3]

Sequence 1: SSXXSX

Push 1 → [1]
Push 2 → [1, 2]
Pop → Output [2], Stack [1]
Pop → Output [2, 1], Stack []
Push 3 → [3]
Pop → Output [2, 1, 3], Stack []
Output Array: [2, 1, 3]

Sequence 2: SXSXSX

Push 1 → [1]
Pop → Output [1], Stack []
Push 2 → [2]
Pop → Output [1, 2], Stack []
Push 3 → [3]
Pop → Output [1, 2, 3], Stack []
Output Array: [1, 2, 3]

Conclusion: Certified sequences do not guarantee identical output arrays because the order of S and X operations determines the order of elements in the output. 
Certified sequences only ensure that the stack returns to its initial empty state.

*/




// ===== commond feedback
/*
Q1)
Code block:

if (p1.exponent > p2.exponent) {
    poly_ans.append(p2.coefficient, p2.exponent);
    p2 = p2.next;

...the code incorrectly adds the term from p2 instead of p1. When `p1.exponent > p2.exponent`, it should add the term from p1 to the result and advance p1, not p2. 

This will lead to incorrect polynomial addition results, as terms from p1 with higher exponents than p2 are not added as intended.

Similar situation at (p1.exponent < p2.exponent) 


Q2)
You forgot to mention the pros and cons of standard deletion:

Here can be sample highlight....

=== Lazy deletion
Pros:
- Can achieve a deletion time complexity of O(1).
- Easy undo, can simply unmark the node as deleted.
Cons:
- Uses more memory since the deleted nodes are still occupying memory but not being used. Also, slower traversal because it must check each node for deletion status.

=== Standard deletion
Pros:
- Memory efficient, free up memory immediately.
- Faster traversal because no need to check for deleted nodes.
Cons:
- The deletion process is more complex and deleting a node requires access to the preceding
node to update its next pointer. Also, in the worst case, if the node is at the end of the list, the
runtime complexity will be O(n).
- Requires pointer adjustments.

== Complexity:
Lazy Deletion: Deletion O(1), traversal O(n).
Standard Deletion: Deletion O(n), traversal O(n).

*/


