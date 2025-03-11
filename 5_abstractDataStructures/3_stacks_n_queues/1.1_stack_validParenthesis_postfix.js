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

////// Valid Parenthesis ///////
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
