function reverseWords(sentence) {
    let words = sentence.split(" ");
    words = words.filter(a => a !== "");

    let holder = [];
    for(let i = words.length - 1; i >= 0; i--){
        holder.push(words[i]);
    }

    return holder.join(" ").trim();
}

console.log("A:", reverseWords("This puzzle game is    interesting"));
console.log("A2:", reverseWords("This puzzle game is interesting"));


// ======

function reverseWords2(sentence) {
    let words = sentence.split(" ");
    words = words.filter(a => a !== "");

    let reversedSentence = "";
    for (let index = words.length - 1; index >= 0; index--) {
        let word = words[index];
        reversedSentence += (word + " "); 
    }

    return reversedSentence;
}

console.log("B:", reverseWords2("This puzzle game is interesting"));
console.log("B2:", reverseWords2("This   puzzle game is    interesting"));



// ==== using 2-pointer
// ...not using extra memory space, done in-place
// ...swap values at both ends

function reverseSentence(sentence) {    // **
    // input validation
    if(!sentence || sentence.length === 0) return "invalid input";
    
    let wordsArray = sentence.split(" ").filter(f => f !== "");
    if(wordsArray.length === 0) return "invalid input";

    let leftPointer = 0;
    let rightPointer = wordsArray.length - 1;

    while (leftPointer < rightPointer) {    // not '<=' cus need to swap diff values and can't swap same value if '='
        [wordsArray[leftPointer], wordsArray[rightPointer]] = [wordsArray[rightPointer], wordsArray[leftPointer]];
        leftPointer ++;
        rightPointer --;
    }

    return wordsArray.join(" ");
}


console.log("C:", reverseSentence(null));
console.log("C2:", reverseSentence("  "));
console.log("C3:", reverseSentence(""));
console.log("C4:", reverseSentence("This   puzzle game is    interesting"));

