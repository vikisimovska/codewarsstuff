//http://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

var checkArrays = function(arr1, arr2){
  var work1 = arr1.sort();
  var work2 = arr2.sort();
  
  if (arr1.length !== arr2.length){
    return false;
  }
  
  for (var i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }

  return true;
}

var checkAgainstArrays = function(library, toCheck){
  var check = false;
  for (var i = 0; i < library.length; i++){
    if (checkArrays(library[i], toCheck)){
      check = true;
    }
  }
  return check;
}

checkAgainstArrays([[1, 2, 3], [2, 1, 3], [3, 1, 2]], [3, 2, 1]);

var countChange = function(money, coins) {
  console.log(money);
  console.log(coins);
  var counter = 0; 
  var lib = [];
  
  var recurse = function(currTotal, currPath){
    if (currTotal === money && !checkAgainstArrays(lib, currPath)){
      lib.push(currPath.slice());
      counter++;
      return;
    }
    else if (currTotal > money){
      return;
    }
    for (var i = 0; i < coins.length; i++){
      currPath.push(coins[i]);
      recurse(currTotal + coins[i], currPath);
      currPath.pop();
    }
  }
  recurse(0, []);
  return counter;
}

countChange(4, [1, 2]);

