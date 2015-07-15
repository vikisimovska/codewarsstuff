// http://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript

var powerSet = function(input){
  var work = [];
  var limit = input.length;

  var findCombinations = function(prev, depth){
    if (depth === limit){
      work.push(prev);
      return;
    }

    findCombinations(prev + input[depth], depth+1);
    findCombinations(prev, depth+1);
  }
  findCombinations('', 0);
  return work;
}

function LCS(x, y) {
  var workX = powerSet(x);
  var workY = powerSet(y);
  var possibleRes = [];
  
  var result;

  for (var i = 0; i < workX.length; i++){
    if (workY.indexOf(workX[i]) > -1){
      if (result === undefined){
        result = workX[i];
      }
      else if (workX[i].length > result.length){
        result = workX[i];
      }
    }
  }
  return result;
}