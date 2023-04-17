class StringBuilder {
    constructor() {
        this.buffer = [];
    }
  
    append(str) {
        this.buffer.push(str);
    }
  
    toString() {
        return this.buffer.join("");
    }
}


const sb = new StringBuilder();

sb.append("Hello");
sb.append(" ");
sb.append("world");

const finalString = sb.toString();
console.log(finalString); // Output: "Hello world"


/*
why is a StringBuilder more effective than using the '+' operator
Using the + operator to concatenate strings in JavaScript creates a new string every time it is used. 
For example, consider the following code:
*/

// let str = "";
// for (let i = 0; i < 1000; i++) {
//   str += "a";
// }

// console.log("str:", str);

/*

In this code, a new string is created and assigned to the str variable in each iteration of the loop. 
This can be slow and inefficient, especially when dealing with large strings.

In contrast, a StringBuilder object in JavaScript can be used to efficiently build and manipulate strings without creating new strings every time. 
Instead, a StringBuilder object maintains an internal buffer to which strings can be appended. 
When the final string is needed, the buffer is joined together into a single string.

By using a StringBuilder object, you can """avoid the performance overhead of creating new strings for each concatenation""". 
This can be particularly useful when building large strings or when building strings in a loop.

Additionally, since strings in JavaScript are immutable, creating new strings with + can lead to a large number of unnecessary allocations and deallocations of memory,
which can slow down your code and increase its memory usage. 
A StringBuilder object, on the other hand, only needs to allocate memory once, when it is created, and can reuse that memory as needed when strings are appended.

*/