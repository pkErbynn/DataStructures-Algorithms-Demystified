
function countDown(num){

    // base case
    if(num <= 0){
        console.log("All done");
        return;
    }

    console.log(num);

    // recall function itself with **modified input**...modified input makes it possible to reach the base case
    num -= 1;
    countDown(num);
}

countDown(3);

