// http://www.codewars.com/kata/5263a84ffcadb968b6000513/train/javascript

var testMatrixA = [
  [1, 2], 
  [3, 2]
];

var testMatrixB = [
  [3, 2], 
  [1, 1]
];

var getMthRow = function(matrix, m){
  return matrix[m];
}

var getNthColumn = function(matrix, n){
  var result = [];
  matrix.map(function(row){result.push(row[n])});
  return result;
}

function matrixMultiplication(a, b){
  var result = [];
  for (var i = 0; i < a.length; i++){
    var currentRow = [];
    for (var j = 0; j < a[i].length; j++){
      var aRow = getMthRow(a, i);
      var bCol = getNthColumn(b, j);
      var work = 0;
      aRow.map(function(value, index){work += (value * bCol[index])});
      currentRow.push(work);
    }
    result.push(currentRow);
  }
  return result;
}