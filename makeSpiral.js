//http://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript


var flip = function(matrix, rowIndex, colIndex){
  matrix[rowIndex][colIndex] = 1;
  return matrix;
}

var flipRow = function(matrix, rowIndex, xStart, xStop){
  for (var i = xStart; i < xStop +1; i++){
    matrix = flip(matrix, rowIndex, i);
  }
  return matrix;
}

var flipCol = function(matrix, colIndex, yStart, yStop){
  for (var i = yStart; i < yStop + 1; i++){
    matrix = flip(matrix, i, colIndex);
  }
  return matrix;
}

var getSouthRows = function(matrix){
  var sizeOfMatrix = matrix.length; 
  for (var i = sizeOfMatrix-1; i > Math.floor(sizeOfMatrix/2); i = i-2){
    matrix = flipRow(matrix, i, sizeOfMatrix - i - 1, i)
  }
}

var getEastCols = function(matrix){
  var sizeOfMatrix = matrix.length;
  for (var i = sizeOfMatrix-1; i >= Math.floor(sizeOfMatrix/2); i = i - 2){
    matrix = flipCol(matrix, i, sizeOfMatrix - i - 1, i)
  }
}

var getNorthRows = function(matrix){
  var sizeOfMatrix = matrix.length;
  matrix = flipRow(matrix, 0, 0, sizeOfMatrix-1);
  if (sizeOfMatrix % 4 === 0){
    for (var i = 2; i < Math.floor(sizeOfMatrix/2); i = i + 2){
      matrix = flipRow(matrix, i, i-2, sizeOfMatrix - i - 1);
    }
  }else{
    for (var i = 2; i <= Math.floor(sizeOfMatrix/2); i = i + 2){
      matrix = flipRow(matrix, i, i-2, sizeOfMatrix - i - 1);
    }
  }
}

var getWestCols = function(matrix){
  var sizeOfMatrix = matrix.length;
  for (var i = 0; i < Math.floor(sizeOfMatrix/2); i = i + 2){
    matrix = flipCol(matrix, i, i+2, sizeOfMatrix-i-1);
  }
}


var spiralize = function(size) {
  var work = [];
  for (var i = 0; i < size; i++){
    work.push(Array.apply(null, Array(size)).map(Number.prototype.valueOf,0));
  }
  getWestCols(work);
  getEastCols(work);
  getSouthRows(work);
  getNorthRows(work);
  return work;
}