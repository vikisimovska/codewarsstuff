var giveReverseNumber = function(input){
  var work = input.toString();
  var i = work.length; 
  var result = '';
  while (i--){
    result += work[i];
  }
  return Number(result);
}

var palindromeChainLength = function(n) {
  var counter = 0;
  var backwards = giveReverseNumber(n);

  while (n !== backwards){
    counter++;
    n = backwards + n;
    backwards = giveReverseNumber(n);
  }

  return counter;
};