// STACK lINKED LIST IMPLEMENTATION

/*
Stack looks like this at horizontal view: 
    30(Top) -> 20 -> 10 -> null

Stack at vertical view:
    30(Top)
    ↓
    20
    ↓
    10
    ↓
    null

*/

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
    size;

    constructor(){
        this.top = null;    // nothing on top by default
        this.size = 0;      // height of stack is zero by default
    }
    
    push(value){
        const newNode = new LLNode(value);

        if(this.top) {
            newNode.next = this.top;    // link new node down to the current top node, if top node exists
        }
        this.top = newNode; // marked as new top
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;   // mark the node beneath the topNode as new topNode
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


////// Valid Parenthesis ///////
function validParenthesis(input) {
    // guard condition
    if(input.length === 0 || input.length === 1) return false

    const stack = new StackLL();

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

console.log("validParenthesis:", validParenthesis("())"));
console.log("validParenthesis2:", validParenthesis("{())"));
console.log("validParenthesis3:", validParenthesis("{(})"));
console.log("validParenthesis4:", validParenthesis(""));
console.log("validParenthesis5:", validParenthesis("}"));
console.log("validParenthesis6:", validParenthesis("{[[]]}"));
