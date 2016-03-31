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

  var num = codeToDec(input);

  var traverse = function(n) {
    if (n < target.length){
      return target[n];
    }
    
    return traverse(Math.floor(n/target.length)) + target[n%target.length];
  }

  var result = traverse(num);

  return result;
  
}

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER));

