// http://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

function isMerge(s, part1, part2) {
  console.log("S VALUE: ", s);
  console.log("PART1: ", part1);
  console.log("PART2: ", part2);
  var work1 = part1.split('');
  var work2 = part2.split('');
  for (var i = 0; i < s.length; i++){
    if (s[i] === work1[0]){
      work1.shift();
    }
    else if (s[i] === work2[0]){
      work2.shift();
    }
    else {
      return false;
    }
  }
  console.log('WOKR1: ', work1);
  console.log('WORK2: ', work2);
  return (work1.length > 0 || work2.length > 0)? false : true;

}