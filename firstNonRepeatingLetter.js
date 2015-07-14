// http://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  var work = {};

  for (var i = 0; i < s.length; i++){
    if (work[s[i].toLowerCase()]){
      work[s[i].toLowerCase()][1] += 1;
    }
    else {
      work[s[i].toLowerCase()] = [s[i], 1];
    }
  }
  for (var key in work){
    if (work[key][1] === 1){
      return work[key][0];
    }
  }
  return ''
}
