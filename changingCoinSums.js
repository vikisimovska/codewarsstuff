//http://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

var countChange = function(money, coins) {
  coins = Array.prototype.sort.call(coins, function(a, b){
    if (a > b){
      return -1;
    }else if (a < b){
      return 1;
    }else {
      return 0;
    }
  })

  var counter = 0;

  var addingOnCoins = function(currentTot, usableCoins){
    if (currentTot === money){
      counter++;
      return;
    }
    else if (currentTot > money){
      return;
    }

    for (var i = 0; i < usableCoins.length; i++){
      addingOnCoins(currentTot + usableCoins[i], usableCoins.slice(i));
    }
  }
  addingOnCoins(0, coins);
  return counter;
}
