function reverseWords(sentence) {
    sentence = sentence.split(" ");
    sentence = sentence.filter(a => a !== "");

    let holder = [];
    for(let i=sentence.length; i>=0; i--){
        holder.push(sentence[i]);
    }

    return holder.join(" ").trim();

}
