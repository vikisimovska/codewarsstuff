// http://www.codewars.com/kata/52763db7cffbc6fe8c0007f8/train/javascript

var converter = function(input){
  var vowelLib = "aiyeou";
  var conLib = "bkxznhdcwgpvjqtsrlmf";

  if (vowelLib.indexOf(input.toLowerCase()) > -1){
    if (input === input.toLowerCase()){
      return (vowelLib[(vowelLib.indexOf(input.toLowerCase()) + 3) % 6]);
    }
    else {
      return (vowelLib[(vowelLib.indexOf(input.toLowerCase()) + 3) % 6]).toUpperCase();
    }
  }
  else if (conLib.indexOf(input.toLowerCase()) > -1){
    if (input === input.toLowerCase()){
      return (conLib[(conLib.indexOf(input.toLowerCase()) + 10) % 20]);
    }
    else {
      return (conLib[(conLib.indexOf(input.toLowerCase()) + 10) % 20]).toUpperCase();
    }
  }
  else {
    return input;
  }
}

function tongues(code) {
  var result = '';
  for (var i = 0; i < code.length; i++){
    result += converter(code[i]);
  }
  return result;
}
