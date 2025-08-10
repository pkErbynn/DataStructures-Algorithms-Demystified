


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

console.log("mostWater_BruteForce:", mostWater_BruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// TC: O(n^2)


//////////////////

const mostWater_Optimized = function(input) {
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

console.log("mostWater_Optimized:", mostWater_Optimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// TC: O(n)