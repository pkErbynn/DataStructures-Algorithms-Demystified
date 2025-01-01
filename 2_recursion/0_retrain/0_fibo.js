function fibo(number) {
    
    if(number == 0) return 0;
    
    if(number == 1) return 1;

    return fibo(number - 1) + fibo(number - 2);
}

console.log("fib(5):", fibo(46));
