function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const doubleValue = arr1[i] ** 2;
        
        if(!arr2.includes(doubleValue)){
            return false;
        }

        // arr2 = arr2.filter(y => y !== doubleValue);
    }

    return true;
}

console.log(same([1,2,3], [1,4,10]));
