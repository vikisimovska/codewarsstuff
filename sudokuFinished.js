// http://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

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

function doneOrNot(board){
  //your code here

    for (var i = 0; i < board.length; i++){
    if (board[i].indexOf(0) > -1){
      return 'Try again!';
    }
  }
  // check columns and rows
  if (!checkColsAndRows(board)){
    return 'Try again!';
  }
  // check blocks
  if (!checkEntireBlock(board)){
    return 'Try again!';
  }


  return 'Finished!';

}