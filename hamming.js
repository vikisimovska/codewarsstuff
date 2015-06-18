// http://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript


var lib = [];
for (var i = 0; i < 100; i++){
  for (var j = 0; j < 100; j++){
    for (var k = 0; k < 100; k++){
      lib.push(Math.pow(2, i) * Math.pow(3, j) * Math.pow(5, k));
    }
  }
}

lib.sort(function(a, b){return a-b});

function hamming (n) {
  return lib[n-1];
}