// http://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

var xRowCheck = function(board){
  var check = false;
  for (var i = 0; i < 3; i++){
    if (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1){
      check = true;
    }
  }
  return check;
}

var xColCheck = function(board){
  var check = false;
  for (var i = 0; i < 3; i++){
    if (board[0][i] === 1 && board[1][i] === 1 && board[2][i] === 1){
      check = true;
    }
  }
  return check;
}

var xDiagCheck = function(board){
  if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1){
    return true;
  }
  else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1){
    return true;
  }
  return false;
}

var xAllCheck = function(board){
  if (xRowCheck(board)){
    return true;
  }
  else if (xColCheck(board)){
    return true;
  }
  else if (xDiagCheck(board)){
    return true;
  }
  return false;
}

var oRowCheck = function(board){
  var check = false;
  for (var i = 0; i < 3; i++){
    if (board[i][0] === 2 && board[i][1] === 2 && board[i][2] === 2){
      check = true;
    }
  }
  return check;
}

var oColCheck = function(board){
  var check = false;
  for (var i = 0; i < 3; i++){
    if (board[0][i] === 2 && board[1][i] === 2 && board[2][i] === 2){
      check = true;
    }
  }
  return check;
}

var oDiagCheck = function(board){
  if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2){
    return true;
  }
  else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2){
    return true;
  }
  return false;
}

var oAllCheck = function(board){
  if (oRowCheck(board)){
    return true;
  }
  else if (oColCheck(board)){
    return true;
  }
  else if (oDiagCheck(board)){
    return true;
  }
  return false;
}

var checkForCompletion = function(board){
  var check = true;
  board.map(function(row){
    row.map(function(value){
      if (value === 0){
        check = false;
      }
    })
  })
  return check;
}

function isSolved(board) {
  if (xAllCheck(board)){
    return 1;
  }
  else if (oAllCheck(board)){
    return 2;
  }
  else if (checkForCompletion(board)){
    return 0;
  }
  else {
    return -1;
  }
}