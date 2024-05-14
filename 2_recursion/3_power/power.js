// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// 2,3 => 2 x 2 x 2 = 8
// 2,0 => 0

function power_iterative(base, exponent){

    if(exponent === 0) return 1;
    let ans;
    for(let i=0; i<exponent; i++){
        if(i===0){
            ans = base; // keeping initial value to be the base
            continue;
        }
        ans = ans * base;
    }
    return ans;
}

console.log(power_iterative(3, 3));

/////////////////

function power_iterative_2(base, exponent){
    if(exponent === 0) return 1;

    let collector = 1;  // initial value
    for(let i = 0; i<exponent; i++){
        collector = collector * base;
    }
    
    return collector;
}
console.log(power_iterative_2(3, 3));

//////////////////////  //////

function power_recursion(base, exponent){
    if(exponent === 0) return 1;

    let result = base * power_recursion(base, exponent-1);
    return result;
}
console.log(power_recursion(2,3))
console.log(power_recursion(3,3))

