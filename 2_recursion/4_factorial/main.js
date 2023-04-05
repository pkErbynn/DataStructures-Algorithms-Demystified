// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// f(3) = 3 * 2 * 1 = 6
// f(4) = 4 * 3 * 2 * 1 = 24

function factorial_iterative_1(num){
    if(num<=0) return 1; // 0! = 1

    // initial value for mult operation is 1, while addition is 0
    let accumulator = 1;

    for(let i=num; i>0; i--){
        accumulator = accumulator * i;
    }

    return accumulator;
}
console.log('iterative1:', factorial_iterative_1(4));

////////////////////////

function factorial_iterative_2(num){
    if(num===0) return 1;

    let accumulator;
    
    for(let i=num; i>0; i--){

        // keep the first number: n! = n * (n-1)
        if(i===num) {
            accumulator = num;
            continue;
        }

        accumulator = accumulator * i;
    }

    return accumulator;
}
console.log('iterative2',factorial_iterative_2(4));

//////////////////////
// why use recursion?
// - same operation performed
// - with reducing input
// (3) * (2) * (1)...(1) stops the loop
function factorial_recursive(num){
    if(num === 1) {
        return 1;
    }

    let res = num * factorial_recursive(num-1);
    return res;
}
console.log('recursive:', factorial_recursive(3));
console.log('recursive:', factorial_recursive(4));