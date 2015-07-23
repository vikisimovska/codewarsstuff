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
  var temp;
  for (var i = 0; i < string.length; i++){
    if (string[i] === "["){
      stack.push(i);
    }else if (string[i] === "]"){
      temp = stack.pop();
      work[i] = temp;
      work[temp] = i;
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

  // create variable for temporary work on inputs
  var currInput;

  while (codePointer < codeLength){
    if (code[codePointer] === '>'){
      workPointer++;
      codePointer++;
    }else if (code[codePointer] === '<'){
      workPointer--;
      codePointer++;
    }else if (code[codePointer] === '+'){
      work.increment(workPointer);
      codePointer++;
    }else if (code[codePointer] === '-'){
      work.decrement(workPointer);
      codePointer++;
    }else if (code[codePointer] === '.'){
      result += String.fromCharCode(work[workPointer]);
      codePointer++;
    }else if (code[codePointer] === ','){
      currInput = input.shift();
      work[workPointer] = currInput.charCodeAt(0);
      codePointer++;
    }else if (code[codePointer] === '['){
      if (work[workPointer] === 0){
        codePointer = portals[codePointer] + 1;
      }else {
        codePointer++;
      }
    }else if (code[codePointer] === ']'){
      if (work[workPointer] === 0){
        codePointer++;
      }else {
        codePointer = portals[codePointer] + 1;
      }
    }

  }
  return result;
}