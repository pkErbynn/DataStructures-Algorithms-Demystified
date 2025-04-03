
////// Infix to Postfix ///////
/*

<Operand> <Operator> <Operand>

<Operators>
Priority 1 => + - ...Left to Right...low
Priority 2 => * / ...Left to Right...Medium
Priority 3 => ^   ...Right to Left...high
Priority 3 => ()[]                ...highest


Algorithm:

1. Declare your priorities right for the operators
1. Use two storage containers: Stack (for operators cus of precedence ordering), List (for operands, and serves at the return result container)
2. Stack used cus want to keep priority or ordering
1. Higher priority operator after "(" is okay and can be pushed to stack
3. If stack is closed with ")", pop all elements and append to stack until opening "(" is met
2. "(" are ignored/discarded when adding to list
4. Operators with same priority can't stay side-by-side, pop existing ones to the list cus of associativity rule from left to right order,
...assuming associativity was right to left, operands could be kept side-by-side


Actual Rules:

1. Know the priorities of operators
2. No two operators of same priority can stay side-by-side together in stack, unless separated by opening "("
3. Lowest priority operator can't be placed on top of highest priority operator, 
...if happens, pop the highest priority operand appending to list the after, place the lowest priority on stack
4. All operators engulved in a "()" should be poped from the stack and appended to the list

*/


// == Copied from previous ===
class LLNode {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;                                                                                                                                                                                                       
    }
}

class StackLL {
    top;
    size

    constructor(){
        this.top = null
        this.size = 0;
    }
    push(value){
        const newNode = new LLNode(value);
        if(this.top) {
            newNode.next = this.top;
        }
        this.top = newNode; // marked as new top
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;   // mark new top
        this.size--;
        return poppedValue;
    }

    peek(){
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.top == null || this.size == 0;
    }

    getSize(){
        return this.size;
    }
}
// ==== End of copy =====


// Xplore: https://youtu.be/PAceaOSnxQs?si=l8YbhRj7lfV_Wy50

function isANumber(char) {
    return !isNaN(Number(char));
}

function infixToPostfix(inputExpr){
    const orderOfPrecedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    const postfixResultList = []

    const operatorsStack = new StackLL();

    for (const char of inputExpr.split(' ')) {
        // 1) when char is a number...push to result list easily 
        if (isANumber(char))
            postfixResultList.push(char)

        // 2) when char is an open ( operator...push to operator stack
        else if (char == "("){
            operatorsStack.push(char)
        }

        // 3) when char is a close ) operator...
        else if (char == ")"){

            // Gather element between ()
            while (!operatorsStack.isEmpty() && operatorsStack.peek() !== "(" ){
                let poppedChar = operatorsStack.pop();
                postfixResultList.push(poppedChar)
            }
            
            if (operatorsStack.peek() == "(")
                operatorsStack.pop()    // Discard the "("
        }

        // 4) when character is in +, -, etc operators
        
        // When using the "in" operator, if the property exists anywhere in the object's prototype chain/parent, it will return true, even if the property is not directly on the child object itself
        else if (orderOfPrecedence.hasOwnProperty(char)){

            // if incomming operator has higher precedence, add to stack 
            if(orderOfPrecedence[char] > orderOfPrecedence[operatorsStack.peek()])
                operatorsStack.push(char)
            
            // if has lower precedence, continually be removing existing high priority operator from stack and add them to the result list
            while(!operatorsStack.isEmpty() && operatorsStack.peek() !== "(" &&
                orderOfPrecedence[char] <= orderOfPrecedence[operatorsStack.peek()] 
            ){
                let higherPriorityOperator = operatorsStack.pop()
                postfixResultList.push(higherPriorityOperator)
            }
        }
    }

    // append everything else left in stack to result list
    while (!operatorsStack.isEmpty()) {
        let leftOvers = operatorsStack.pop()
        postfixResultList.push(leftOvers)
    }


    return postfixResultList.join(' ')
}

// Testing the function
console.log(infixToPostfix("3 + 5 * ( 2 - 8 )"));      // Output: "3 5 2 8 - * +"
console.log(infixToPostfix("10 + 2 * 6"));              // Output: "10 2 6 * +"
console.log(infixToPostfix("100 * ( 2 + 12 ) / 14"));   // Output: "100 2 12 + * 14 /"
console.log(infixToPostfix("1 + ( 2 - 3 )"));           // Output: "1 2 3 - +"
console.log(infixToPostfix("1 + 2 * 3 * 4"));           // Output: "1 2 3 * 4 * +"
console.log(infixToPostfix("1 * ( ( 2 + 3 ) * 4 ) * ( 5 - 6 )"));   // Output: "1 2 3 + 4 * * 5 6 - *"

/*

Time Complexity: 
- O(n), where n is the number of tokens and 
- since does the conversion in only one pass from left to right

Space Complexity:
- O(n)
- Output array (postfixResultList): stores all operands and operators → O(n)
- Operators stack: holds operators and parentheses → in worst case all tokens are operators/parentheses → O(n)
- Thus, O(n + n) = O(2n), ignoring the contant is O(n)

*/