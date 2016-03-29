// http://www.codewars.com/kata/5274d9d3ebc3030802000165/train/javascript

var gcd = function(a, b) {
  if ( ! b) {
    return a;
  }

  return gcd(b, a % b);
};

var nbrOfLaps = function (x, y) {
  var factor = gcd(x, y);
  return [y/factor, x/factor];
}