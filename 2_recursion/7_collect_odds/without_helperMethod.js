// using Pure Recursion

function collectOdds(arr){
    let odds = [];

    if(arr.length === 0) return odds;

    if(arr[0] % 2 !== 0){
        odds.push(arr[0]);
    }

    odds = odds.concat(collectOdds(arr.slice(1)));

    return odds;
}

console.log(collectOdds([2,3,4,6,7,11]));


// nb
// - for arrays, use concat(), slice() make copy of arrays so it's not mutate