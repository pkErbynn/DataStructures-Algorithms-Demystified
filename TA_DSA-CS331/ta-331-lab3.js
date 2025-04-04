////// Valid Parenthesis using Stack ///////

class MyNode {
    value;
    next;

    constructor(value, next) {
        this.value = value;
        this.next = next;                                                                                                                                                                                                       
    }
}

class Stack {
    top;

    constructor(){
        this.top = null
    }

    push(value){
        this.top = new MyNode(value, this.top);  // Fixed the push method syntax
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    peek(){
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.top == null;
    }
}

function validParenthesis(input) {
    const stack = new Stack();
    for (const character of input) {
        if(character == "{" || character == "[" || character == "("){
            stack.push(character);
        }
        else {
            if(character == "}")
                if(!stack.isEmpty() && stack.peek() == "{")
                    stack.pop()
                else 
                    return false
            if(character == "]")
                if(!stack.isEmpty() && stack.peek() == "[")
                    stack.pop()
                else 
                    return false
            if(character == ")")
                if(!stack.isEmpty() && stack.peek() == "(")
                    stack.pop()
                else 
                    return false
        }
    }
    return stack.isEmpty();
}

let res = validParenthesis("())")
console.log(res);



////// Infix to Postfix ///////
/*

<Operand> <Operator> <Operand>

<Operators>
Priority 1 => + - ...Left to Right...low
Priority 2 => * / ...Left to Right...Medium
Priority 3 => ^   ...Right to Left...high
Priority 3 => ()[]                ...highest


1. Declare your priorities right for the operators
1. Use two storage containers: Stack (for operators cus of precedence ordering), List (for operands, and serves at the return result container)
2. Stack used cus want to keep of priority or ordering
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
    const postfixResult = []
    const operatorsStack = new Stack();

    for (const char of inputExpr.split(' ')) {
        if (isANumber(char))
            postfixResult.push(char)

        else if (char == "("){
            operatorsStack.push(char)
        }

        // When using the "in" operator, if the property exists anywhere in the object's prototype chain/parent, it will return true, even if the property is not directly on the child object itself
        else if (orderOfPrecedence.hasOwnProperty(char)){
            // continually be removing existing high priority operator from stack
            while(!operatorsStack.isEmpty() && 
                operatorsStack.peek() !== "(" &&
                orderOfPrecedence[operatorsStack.peek()] >= orderOfPrecedence[char]
            ){
                let higherPriorityOperator = operatorsStack.pop()
                postfixResult.push(higherPriorityOperator)
            }
            // add to stack if incomming operator is higher
            operatorsStack.push(char)
        }

        else if (char == ")"){
            // Gather element between '(' and ')'
            while (!operatorsStack.isEmpty() && 
                operatorsStack.peek() !== "("
            ){
                let poppedChar = operatorsStack.pop();
                postfixResult.push(poppedChar)
            }
            if (operatorsStack.peek() == "(")
                operatorsStack.pop()    // Discard the "("
        }

    }

    // append everything else left in stack to result list
    while (!operatorsStack.isEmpty()) {
        let leftOvers = operatorsStack.pop()
        postfixResult.push(leftOvers)
    }


    return postfixResult.join(' ')
}

// Testing the function
console.log(infixToPostfix("3 + 5 * ( 2 - 8 )"));      // Output: "3 5 2 8 - * +"
console.log(infixToPostfix("10 + 2 * 6"));              // Output: "10 2 6 * +"
console.log(infixToPostfix("100 * ( 2 + 12 ) / 14"));   // Output: "100 2 12 + * 14 /"
console.log(infixToPostfix("1 + ( 2 - 3 )"));           // Output: "1 2 3 - +"
console.log(infixToPostfix("1 + 2 * 3 * 4"));           // Output: "1 2 3 * 4 * +"
console.log(infixToPostfix("1 * ( ( 2 + 3 ) * 4 ) * ( 5 - 6 )"));   // Output: "1 2 3 + 4 * * 5 6 - *"