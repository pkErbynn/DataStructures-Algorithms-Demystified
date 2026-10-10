
function countDown(num){

    // base case => when to stop
    if(num <= 0){
        console.log("All done");
        return;
    }

    console.log(num);

    // self call => recall function itself with **modified input**...modified input makes it possible to reach the base case
    num = num - 1;  // num -= 1;
    countDown(num); // uses built-in stack
}

countDown(3);

