/**********************************************************************
 *  Problem : Coin Change                                             *
 *                                                                    *
 *  Prompt: US Currency has coins in circulation with the             *
 *          following value in cents: [1, 5, 10, 25, 50, 100]         *
 *                                                                    *
 *          Given a value, find how many unique ways to make change   *
 *          given the coin values in circulation.                     *
 *                                                                    *
 *  Input:  An integer N (value from which to make change)            *
 *  Output: An integer (number of unique ways to make change)         *
 *                                                                    *
 *  Time Complexity: NA                                               *
 *  Auxiliary Space Complexity: NA                                    *
 *                                                                    *
 *  Example: input = 11                                               *
 *           output = 4 ([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],           *
 *                       [5, 1, 1, 1, 1, 1, 1],                       *
 *                       [5, 5, 1],                                   *
 *                       [10, 1])                                     *
 *                                                                    *
 *  Challenge Mode: Solve coin change with you solution having:       *
 *                  Time Complexity: O(nm)                            *
 *                  Auxiliary Space Complexity: O(n)                  *
 *  Hint: www.geeksforgeeks.org/dynamic-programming-set-7-coin-change *
 **********************************************************************/

// //http://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript







// var countChange = function(money, coins) {
//   coins = Array.prototype.sort.call(coins, function(a, b){
//     if (a > b){
//       return -1;
//     }else if (a < b){
//       return 1;
//     }else {
//       return 0;
//     }
//   })

//   var counter = 0;

//   var addingOnCoins = function(currentTot, usableCoins){
//     if (currentTot === money){
//       counter++;
//       return;
//     }
//     else if (currentTot > money){
//       return;
//     }

//     for (var i = 0; i < usableCoins.length; i++){
//       addingOnCoins(currentTot + usableCoins[i], usableCoins.slice(i));
//     }
//   }
//   addingOnCoins(0, coins);
//   return counter;
// }


var pureCoinSum = function(total, coins){
  if (total === 0){
    return 1;
  } else if (total < 0){
    return 0;
  }

  var ways = 0;

  for (var i = 0; i < coins.length; i++){
    var avail = coins.slice(i);
    ways += pureCoinSum(total - coins[i], avail);
  }
  return ways;
}


console.log(pureCoinSum(4, [2,1])) // => 3
console.log(pureCoinSum(10, [5,2,3])) // => 4
console.log(pureCoinSum(11, [5,7])) //  => 0
console.log(pureCoinSum(101, [2,4,6,8]))
console.log(pureCoinSum(500, [1,5,10,25,50,100]));
// 
// 
// 
// 
// 
// 
// 
// 
// 