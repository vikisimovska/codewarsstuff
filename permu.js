//http://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript


function permutations(string) {
  var work = string.split('');
  
  var permArr = [],
  usedChars = [];

  function recurse(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      recurse(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr
  };

work = recurse(work);
var work2 = [];
for (var i = 0; i < work.length; i++){
  var current = "";
  for (var j = 0; j < work[i].length; j++){
    current += work[i][j];
  }
  work2.push(current);
}

var resultObj = {};
for (var i = 0; i < work2.length; i++){
  resultObj[work2[i]] = true;
}
var finalResult = [];
for (var key in resultObj){
  finalResult.push(key);
}
return finalResult;
}

// permutations('abcd');