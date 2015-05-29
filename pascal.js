//http://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

function pascalsTriangle(n) {
  var result = [1];
  var delve = function(prev, depth){
    if (depth === n-1){
      return;
    }
    prev.push(0);
    prev.unshift(0);
    var temp = [];
    for (var i = 1; i < prev.length; i++){
      temp.push(prev[i] + prev[i-1]);
    }
    result = result.concat(temp.slice());
    delve(temp, depth+1);
  }
  delve([1], 0);
  return result;
}