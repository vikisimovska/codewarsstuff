var areThereZeroes = function(matrix){
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[0].length; j++){
      if (matrix[i][j] === 0){
        return true;
      }
    }
  }
  return false;
}

var checkIfSafe = function(matrix, yCoor, xCoor){
  if (matrix[yCoor] !== undefined){
    if (matrix[yCoor][xCoor] !== undefined && matrix[yCoor][xCoor] === 0){
      return true;
    }
    
  }
  return false;
}

function createSpiral(n) {
  console.log(n);
  if (typeof n !== 'number' || n % 1 !== 0 || n < 1){
    return [];
  }
  var work = [];
  var i = n;
  while (i--){
    work.push(Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0));
  }

  var directions = {
    east: [0, 1],
    south: [1, 0], 
    west: [0, -1], 
    north: [-1, 0]
  }

  var switchDirection = {
    'east': 'south', 
    'south': 'west', 
    'west': 'north', 
    'north': 'east'
  }

  var pointer = [0, 0];
  var toGo = 'east';
  var insertIntoMatrix = 1;

  while (areThereZeroes(work)){
    work[pointer[0]][pointer[1]] = insertIntoMatrix;
    insertIntoMatrix++;
    if (checkIfSafe(work, pointer[0] + directions[toGo][0], pointer[1] + directions[toGo][1])){
      pointer = [pointer[0] + directions[toGo][0], pointer[1] + directions[toGo][1]];
    } else {
      toGo = switchDirection[toGo];
      pointer = [pointer[0] + directions[toGo][0], pointer[1] + directions[toGo][1]];
    }
  }

  return work;
};