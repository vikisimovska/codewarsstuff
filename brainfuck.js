// http://www.codewars.com/kata/526156943dfe7ce06200063e/train/javascript

// for removing any empty spaces in code
var removeSpaces = function(string){
  var work = string.split('');
  return work.filter(function(value){return "><+-.,[]".indexOf(value) > -1}).join('');
}

// for setting up portals
var createPortals = function(string){
  var work = {};
  var stack = [];
  for (var i = 0; i < string.length; i++){
    if (string[i] === "["){
      stack.push(i);
    }else if (string[i] === "]"){
      work[i] = stack.pop();
    }
  }
  return work;
}

// create methods on array for incrementing and decrementing
// values at certain indexes
Array.prototype.increment = function(index){
  if (this[index] === 255){
    this[index] = 0;
  }else {
    this[index]++;
  }
}

Array.prototype.decrement = function(index){
  if (this[index] === 0){
    this[index] = 255;
  }else {
    this[index]--;
  }
}


function brainLuck(code, input){
  
  // remove any potential empty spaces from the code
  var code = removeSpaces(code);
  var codeLength = code.length;

  // prepare input for shifting when input is called on
  var input = input.split('');

  // create portals for brackets
  var portals = createPortals(code);

  // initialize pointers
  var workPointer = 0;
  var codePointer = 0;

  // create 30,000 zero array for performing work
  var work =  Array.apply(null, Array(30000)).map(Number.prototype.valueOf,0);

  // initialize result string to be returned at completion
  // of brainfuck
  var result = '';

  while (codePointer < codeLength){
    if (code[codePointer] === '>'){
      workPointer++;
      codePointer++;
      console.log('hit here');
      continue;
    }else if (code[codePointer] === "<"){
      workPointer--;
      codePointer++;
      console.log('hit here too');
      continue;
    }

  }
  console.log('completed');
}

// will want to use String.fromCharCode(65) to get "A"; 

// will want to use "A".charCodeAt(0) to get 65; 

// will want to use Array.apply(null, Array(5)).map(Number.prototype.valueOf,0) to get array of zeroes;

// arrayPointer will start at 0; pointer = 0;

// codePointer will start at 0 as well; will leave while loop when codePointer exceeds length of code

brainLuck('<><><>', '');