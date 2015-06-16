//http://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript

function christmasTree(height) {
  var workLength = height * 2 - 1;
  work = [];
  for (var i = 0; i < height; i++){
    work[i] = [];
    for (var j = 0; j < workLength; j++){
      work[i].push(" ");
    }
  }
  for (var i = 0; i < work.length; i++){
    for (var j = 0; j < work[i].length; j++){
      if (Math.abs(Math.floor(work[i].length/2) - j) < i+1){
        work[i][j] = "*";
      }
    }
  }
  for (var i = 0; i < work.length; i++){
    work[i] = work[i].join('');
  }
  return work.join('\n')
}