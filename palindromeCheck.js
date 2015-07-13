// http://www.codewars.com/kata/5301239dc7c0f49de200092a/train/javascript

function isPalindrome(str){
  str= str.toLowerCase();
  var work = '';
  var toCompare = '';
  var lib = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < str.length; i++){
    if (lib.indexOf(str[i]) > -1){
      work += str[i];
    }
    if (lib.indexOf(str[str.length - i - 1]) > -1){
      toCompare += str[str.length - i - 1];
    }
  }
  return work === toCompare;
}