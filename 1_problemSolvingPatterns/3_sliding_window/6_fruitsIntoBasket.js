/*
Problem Statement #

Given an array of characters where each character represents a fruit tree, 
you are given two baskets and your goal is to put maximum number of fruits in each basket. 
The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. 
You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

===

TIP:
- "start with any tree, but once you have started you can’t skip a tree" => contiguous
- similar to previous question
- In simple terms, the question is askin' to find the maximum continuous subarray that contains only two distinct characters/fruit types

*/


function fruitIntoBasket(fruits){
    let maxLength = 0;
    let frequencyCounterTwoBaskets = {};
    let windowStartIndex = 0;

    for (let windowEndIndex = 0; windowEndIndex < fruits.length; windowEndIndex++) {
        let rightChar = fruits[windowEndIndex];
        frequencyCounterTwoBaskets[rightChar] = !frequencyCounterTwoBaskets[rightChar] ? 1 : frequencyCounterTwoBaskets[rightChar] + 1; // fruit types equals keys
        
        while(Object.keys(frequencyCounterTwoBaskets).length > 2){ // 2 => two fruit kinds  
            let leftChar = fruits[windowStartIndex];

            if(frequencyCounterTwoBaskets[leftChar] > 1){
                frequencyCounterTwoBaskets[leftChar] = frequencyCounterTwoBaskets[leftChar] - 1;
            }else {
                delete frequencyCounterTwoBaskets[leftChar];
            }

            windowStartIndex++;
        }

        let currentWindowLength = (windowEndIndex - windowStartIndex) + 1;
        maxLength = Math.max(maxLength, currentWindowLength);
    }

    console.log(frequencyCounterTwoBaskets);
    return maxLength;
}

console.log("x:", fruitIntoBasket(['A', 'B', 'C', 'B', 'B', 'C']));



/*
Time Complexity #
The time complexity = O(N). 
Because the outer for-loop runs for all characters and 
the inner while-loop PROCESS EACH CHARACTER ONLY ONCE, 
therefore, the time complexity of the algorithm = O(N+N) which is asymptotically equivalent to O(N).

Space Complexity #
The algorithm runs in constant space  O(1)
because there can be a maximum of three types of fruits stored in the frequency map.
*/



function fruitIntoBsket(fruits) {
    let ml = 0;
    let fc = {};
    let ws = 0;

    for(let we = 0; we < fruits.length; we++){
        let rc = fruits[we];
        fc[rc] = !fc[rc] ? 1 : fc[rc] + 1;

        while (Object.keys(fc).length > 2) {
            let lc = fruits[ws];

            if(fc[lc] > 1){
                fc[lc] = fc[lc] - 1;
            }
            else {
                delete fc[lc]
            }

            ws++;
        }

        let cwl = we - ws + 1;
        ml = Math.max(cwl, ml);

    }

    return ml

}

console.log("xxxx:", fruitIntoBsket(['A', 'B', 'C', 'B', 'B', 'C']));
