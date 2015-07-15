// http://www.codewars.com/kata/53e57dada0cb0400ba000688/train/javascript

var i;

// Feel free to add helper functions if needed.
var changeLoc = function(array, index){
  var a = array[index];
  var b = array[index+1];
  array[index] = b;
  array[index+1] = a;
  return array;
}


var bubbleSort = function(array) {
  var counter = 1;
  for (i = array.length-1; i > 0; i--){
    var check = 0; 
    for (j = 0; j < i; j++){
      if (array[j] > array[j+1]){
        counter++;
        array = changeLoc(array, j);
      }
      else {
        check++;
      }
      if (check === i){
        console.log('took shortcut');
        return counter;
      }
    }
  }
  return counter;
};

function listPosition(word) {
  //Return the anagram list position of the word
  console.log(word);
}
