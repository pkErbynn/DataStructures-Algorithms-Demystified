function same(arr1, arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    let freqC1 = {};
    let freqC2 = {};

    for(const value of arr1){
        freqC1[value] = !freqC1[value] ? 
            1 : freqC1[value] + 1;
    }

    for(const value of arr2){
        freqC2[value] = !freqC2[value] ? 
            1 : freqC2[value] + 1;
    }

    for(let key in freqC1){
        let squaredKey = key ** 2;
        if(!freqC2[squaredKey]){    // no value, then no key exists
            console.log(freqC2[squaredKey]);
            return false;
        }
        if(freqC1[key] !== freqC2[squaredKey]){
            return false;
        }
    }

    return true;
}

console.log(same([1,1,2,2], [1,1,4,4]));
console.log(same([1,2,2,1], [1,1,4,4]));


// {1: 2, 2: 2}
// {1: 2, 4: 2}