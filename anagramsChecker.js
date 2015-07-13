// http://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

var checkTwo = function(input1, input2){
  var work1 = input1.split('').sort().join('');
  var work2 = input2.split('').sort().join('');
  return (work1 === work2)? true : false;
}

function anagrams(word, words) {
  var work = [];
  words.map(function(toCompare){
    if (checkTwo(word, toCompare)){
      work.push(toCompare);
    }
  })
  return work;
}