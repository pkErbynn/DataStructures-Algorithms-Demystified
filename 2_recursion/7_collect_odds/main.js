// using recursion w/ helper method
// helper method helps to collect data so that will not be
// initialized to default



function collect_odds(arr){
    let odds = [];  // to prevent empty array init on recall

    function helper(helperArr){
        if(helperArr.length === 0) return;

        if(helperArr[0] % 2 !== 0){
            odds.push(helperArr[0]);
        }

        //.slice() => [1,2,3,4] => [2,3,4] => [3,4] => [3]
        helper(helperArr.slice(1));
    }

    helper(arr);

    return odds;
}

console.log('collect', collect_odds([3, 4, 6, 7, 9, 8]));

// nb:
// if helper function is not used, and anytime the function calls 
// itself, it will reinitialise with empty array []
// thus need for helper function within the original fxn