
function countDown(num){

    // base case
    if(num <= 0){
        console.log("All done");
        return;
    }

    console.log(num);

    // recall function itself with modified input
    num--;
    countDown(num);
}

countDown(3);

