
// 1, 2, 3, 4, 5...
function oneToN(num) {
    if(num == 1)
        return;

    oneToN(num - 1);

    console.log(num);
}

oneToN(8)