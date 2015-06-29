// http://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript

function SubstitutionCipher(abc1, abc2) {

  this.encode = function (str) {
    return str.split('').map(function(value){return (abc1.indexOf(value) > -1)? abc2[abc1.indexOf(value)] : value}).join('');
  }

  this.decode = function (str) {
    return str.split('').map(function(value){return (abc2.indexOf(value) > -1)? abc1[abc2.indexOf(value)] : value;}).join('');
  }
}

