//http://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(matrix) {
  var result = [];
  var rowSize = matrix.length; 
  var columnSize = matrix[0].length;

  var direction = (direction)? direction : 1;

  if (direction === 1){
    for (var i = 0; i < columnSize; i++){
      var currentRow = [];
      for (var j = 0; j < rowSize; j++){
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