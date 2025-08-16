/*

11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

// Eg: https://youtu.be/UuiTKBwPgAo?si=7bxwVqEuaYQeqAfl
const mostWater_BruteForce = function(input) {
    let maxWaterResult = 0;

    for (let i = 0; i < input.length; i++) {
        
        for (let j = i + 1; j < input.length; j++) {
            
            let currentAreaWater = (j - i) * Math.min(input[i], input[j]);       // area = l * h
            maxWaterResult = Math.max(maxWaterResult, currentAreaWater);
        }
    }

    return maxWaterResult;
}

console.log("mostWater_BruteForce1:", mostWater_BruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("mostWater_BruteForce2:", mostWater_BruteForce([1, 1, 1]));

// TC: O(n^2)
// SP: O(1)


//////////////////

// Exp: https://youtu.be/w7ftYsZtIbs?si=_TCFoNrIbBdPm5cc
const mostWater_Optimized = function(input) {
    // Pointers need to start from the ends cus wanna cover max area
    let leftPtr = 0;
    let rightPtr = input.length - 1;

    let maxAreaWater = 0;

    while (leftPtr < rightPtr) {    // terminate when they meet cus can't find area at same spot

        let minHeight = Math.min(input[leftPtr], input[rightPtr]);
        let currentAreaWater = (rightPtr - leftPtr) * minHeight;
        maxAreaWater = Math.max(currentAreaWater, maxAreaWater);

        if(input[leftPtr] < input[rightPtr]) 
            leftPtr++

        else if(input[leftPtr] > input[rightPtr]) 
            rightPtr--

        else if(input[leftPtr] == input[rightPtr]){
            // explicitly moving smallest height
            if(input[leftPtr + 1] < input[rightPtr - 1])
                leftPtr++
            else
                rightPtr--
        }
        // if equal, any pointer can be moved
        // else{
        //     rightPtr--
        // }

    }

    return maxAreaWater;
}

console.log("mostWater_Optimized1:", mostWater_Optimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("mostWater_Optimized2:", mostWater_Optimized([1, 1, 1]));

// TC: O(n)
// SP: O(1)
