#### Big O

1. 
```javascript
fibonacci(i) {
    if (i == 0) return 0;
    if (i == 1) return 1;
    return fibonacci(i - 1) + fibonacci(i - 2);
}
```

- If you said O(n) or O(n2) (as many people do)
- The root node has two children. Each of those children has two children (so four children total in the "grand-
children" leve/). Each of those grandchildren has two children, and so on. If we do this n times, we'll have roughly O( 2n) nodes. 
- This gives us a runtime of roughly **O(2^n)**.
    - bacause of two branches, `fibonacci(i - 1) + fibonacci(i - 2)`, calls

2. 
```javascript
someFunction(i) {
    if (i == 1) return 1;
    return 1 + fibonacci(i - 1);
}
```

- This gives us a runtime of roughly **O(n)**.
    - bacause of `1 + fibonacci(i - 1)` calls

3. 
```javascript
someFunction(i) {
    if (i == 1) return 1;
    return fibonacci(i - 1);
}
```

- This gives us a runtime of roughly **O(n)**.
    - because of `fibonacci(i - 1)` calls

4. 
```js
countWays(int n) {
    if (n < e) {
        return e;
    } else if (n e) {
        return 1;
    } else {
        return countWays(n-l) + countWays(n-2) + countWays(n-3);
    } 
}
```
Runtime: is exponential (roughly O( 3 n )), since each call branches out to three more calls.