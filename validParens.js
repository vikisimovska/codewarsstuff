// http://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens){
  var work = [];

  for (var i = 0; i < parens.length; i++){
    if (parens[i] === '('){
      work.push('(');
    }
    else {
      var checkAgainst = work.pop();
      if (checkAgainst !== '('){
        return false;
      }
    }
  }
  if (work.length > 0){
    return false;
  }
  return true;
}