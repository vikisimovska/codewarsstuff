//http://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

var checkRow = function(array){
  count = 0; 
  array.map(function(value){
    count += value;
  })
  return (count === 45)? true : false;
}
var checkRows = function(puzzle){
  for (var i = 0; i < puzzle.length; i++){
    if (!checkRow(puzzle[i])){
      return false;
    }
  }
  return true;
}
var checkCols = function(puzzle){
  for (var i = 0; i < puzzle.length; i++){
    var count = 0; 
    for (var j = 0; j < puzzle.length; j++){
      count += puzzle[j][i];
    }
    if (count !== 45){
      return false;
    } 
  }
  return true;
}
var checkColsAndRows = function(puzzle){
  return (checkRows(puzzle) && checkCols(puzzle))? true : false;
}
var checkBlock = function(puzzle, blockI, blockJ){
  var count = 0;
  count += puzzle[blockI][blockJ];
  count += puzzle[blockI][blockJ+1];
  count += puzzle[blockI][blockJ+2];
  count += puzzle[blockI+1][blockJ];
  count += puzzle[blockI+1][blockJ+1];
  count += puzzle[blockI+1][blockJ+2];
  count += puzzle[blockI+2][blockJ];
  count += puzzle[blockI+2][blockJ+1];
  count += puzzle[blockI+2][blockJ+2];
  if (count !== 45){
    return false;
  }
  return true;
}
var checkEntireBlock = function(puzzle){
  if (!checkBlock(puzzle, 0, 0)){
    return false;
  };
  if (!checkBlock(puzzle, 0, 3)){
    return false;
  };
  if (!checkBlock(puzzle, 0, 6)){
    return false;
  };
  if (!checkBlock(puzzle, 3, 0)){
    return false;
  };
  if (!checkBlock(puzzle, 3, 3)){
    return false;
  };
  if (!checkBlock(puzzle, 3, 6)){
    return false;
  };
  if (!checkBlock(puzzle, 6, 0)){
    return false;
  };
  if (!checkBlock(puzzle, 6, 3)){
    return false;
  };
  if (!checkBlock(puzzle, 6, 6)){
    return false;
  };

  return true;
}


var test = [[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]]

console.log("ROWS RESULT: ", checkRows(test));
console.log("COLS RESULT: ", checkCols(test));
console.log("FULL RESULT: ", checkColsAndRows(test));
console.log("FULL BLOCK CHECK: ", checkEntireBlock(test));


function validSolution(puzzle) {
  // check for zeroes
  for (var i = 0; i < puzzle.length; i++){
    if (puzzle[i].indexOf(0) > -1){
      return false;
    }
  }
  // check columns and rows
  if (!checkColsAndRows(puzzle)){
    return false;
  }
  // check blocks
  if (!checkEntireBlock(puzzle)){
    return false;
  }


  return true;
  
}

// console.log("RUNNING SUDOKU CHECKER: ", validSolution(test));