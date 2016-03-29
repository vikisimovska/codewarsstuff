// http://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// complete the function
function solution(string) {
  var result = '';
  var lib = {};
  var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  
  for (var i = 0; i < upper.length; i++){
    lib[upper[i]] = true;
  }

  for (var i = 0; i < string.length; i++){
    if (lib[string[i]]){
      result += ' ';
      result += string[i];
    } else {
      result += string[i];
    }
  }

  return result;
}
