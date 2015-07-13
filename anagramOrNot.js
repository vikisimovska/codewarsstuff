// http://www.codewars.com/kata/546274b0eaa31f79c9000d5d/train/javascript

var removeSpaces = function(input){
  var work = '';
  var lib = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  for (var i = 0; i < input.length; i++){
    if (lib.indexOf(input[i]) > -1){work += input[i]}
  }
  return work;
}


function isAnagram(test, original){
  return removeSpaces(test).toLowerCase().split('').sort().join('') === removeSpaces(original).toLowerCase().split('').sort().join('');
}