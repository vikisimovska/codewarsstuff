//http://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript


var flip = function(matrix, i, j){
  matrix[i][j] = 1;
}

// var test = [[0, 0], [0, 0]];
// flip(test, 1, 1);

var traverse = [0, 1]

var switchDirection = function(upDown, leftRight){
  if (upDown === 0 && leftRight === 1){
    upDown = 1;
    leftRight = 0;
  }
  else if (upDown === 1 && leftRight === 0){
    upDown = 0;
    leftRight = -1;
  }
  else if (upDown === 0 && leftRight === -1){
    upDown = -1;
    leftRight = 0;
  }
  else if (upDown === -1 && leftRight === 0){
    upDown = 0;
    leftRight = 1;
  }
  return [upDown, leftRight]
}

// console.log(traverse);
// var traverse = switchDirection(traverse[0], traverse[1]);
// console.log(traverse);
// var traverse = switchDirection(traverse[0], traverse[1]);
// console.log(traverse);
// var traverse = switchDirection(traverse[0], traverse[1]);
// console.log(traverse);
// var traverse = switchDirection(traverse[0], traverse[1]);
// console.log(traverse);

var checkWall = function(matrix, i, j){
  
}


var spiralize = function(size) {
  // insert code here
}