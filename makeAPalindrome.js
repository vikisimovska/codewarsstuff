// http://www.codewars.com/kata/53629117f81a7f9b9e000d1e/train/javascript

var isPalindrome = function(input){
  var work = '';
  input.split('').map(function(letter){work = letter + work});
  return (input === work)? true : false;
}

var addLetterToFront = function(){
  
}


function makePalindrome(text){
  var work = text.slice();

}