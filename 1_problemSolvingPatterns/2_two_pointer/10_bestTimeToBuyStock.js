/*

Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the i-th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell...and times/days moves forward 

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

// [7,1,5,3,6,4]
const maxProfit = function(stocks) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProf = 0;    // 4

    // [7,1,5,3,6,4]
    //  l r
    while (rightPointer < stocks.length) {

        if(stocks[rightPointer] > stocks[leftPointer]){

            let currentProf = stocks[rightPointer] - stocks[leftPointer]
            
            maxProf = Math.max(maxProf, currentProf);
            // if(currentProf > maxProf){
            //     maxProf = currentProf
            // }

        }
        else{
            leftPointer = rightPointer
        }

        rightPointer++;
    }

    return maxProf;
}

console.log("maxProfit1: ", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("maxProfit2: ", maxProfit([1, 6, 4, 3 ,1]));
console.log("maxProfit3: ", maxProfit([6, 4, 3 ,1]));
console.log("maxProfit4: ", maxProfit([1, 2, 3, 4]));
