/*

Find if str2 exists inside str1
and print the position where it starts.

str1 = "examination"
str2 = "nation"

Output: starts at index 5

*/

function findSubstring(str1, str2) {
    if(str2.length == 0) return 0;

    if(str2.length > str1.length) return -1;

    for(let i = 0; i<= str1.length - str2.length; i++){

        let j = 0;
        while(j < str2.length){
            if(str1[i + j] === str2[j]){
               j++; 
            }
            else {
                break;
            }
        }

        if(j === str2.length){
            return i
        }
    }

    // if not found
    return -1;
}

console.log("test:", test("examination", "nations"))
console.log("test2:", test("examination", "nat"))