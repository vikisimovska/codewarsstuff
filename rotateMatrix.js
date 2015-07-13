// http://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

var rotateMatrix = function(matrix, direction) {
  var result = [];
  var rowSize = matrix.length; 
  var columnSize = matrix[0].length;

  direction = (direction)? direction : 1;

  if (direction === 1){
    for (var i = 0; i < columnSize; i++){
      var currentRow = [];
      for (var j = rowSize-1; j > -1; j--){
        currentRow.push(matrix[j][i]);
      }
      result.push(currentRow);
    }    
  }
  else{
    for (var i = columnSize-1; i > -1; i--){
      var currentRow = [];
      for (var j = 0; j < rowSize; j++){
        currentRow.push(matrix[j][i]);
      }
      result.push(currentRow);
    } 
  }

  return result;
};


function rotate(matrix, direction) {
  var result = [];
  var rowSize = matrix.length; 
  var columnSize = matrix[0].length;

  direction = (direction)? direction : 1;

  if (direction === 'clockwise'){
    for (var i = 0; i < columnSize; i++){
      var currentRow = [];
      for (var j = rowSize-1; j > -1; j--){
        currentRow.push(matrix[j][i]);
      }
      result.push(currentRow);
    }    
  }
  else{
    for (var i = columnSize-1; i > -1; i--){
      var currentRow = [];
      for (var j = 0; j < rowSize; j++){
        currentRow.push(matrix[j][i]);
      }
      result.push(currentRow);
    } 
  }

  return result;
}