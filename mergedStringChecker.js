// http://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

function isMerge(s, part1, part2) {
  console.log(s);
  console.log(part1);
  console.log(part2);
  var sPointer = 0;
  var pointer1 = 0;
  var pointer2 = 0;

  while (sPointer < s.length){
    if (s[sPointer] === part1[pointer1]){
      sPointer++;
      pointer1++;
    } else if (s[sPointer] === part2[pointer2]){
      sPointer++;
      pointer2++;
    } else {
      return false;
    }
  }
  
  return (pointer1 === part1.length && pointer2 === part2.length);

}