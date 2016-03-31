// http://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript

function convert(input, source, target) {

  var codeToDec = function(input){
    var work = 0;
    var i = input.length;
    var power = 0;

    while (i--){
      work += (source.indexOf(input[i]) * (Math.pow(source.length, power)));
      power++;
    }
    return work;
  }

  var traverse = function(n) {
    if (n < target.length){
      return target[n];
    }
    
    return traverse(Math.floor(n/target.length)) + target[n%target.length];
  }

  return traverse(codeToDec(input));
  
}


