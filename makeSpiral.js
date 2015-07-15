//http://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript


var spiralize = function(size) {
  var work = [];
  for (var i = 0; i < size; i++){
    work.push(Array.apply(null, Array(size)).map(Number.prototype.valueOf,0));
  }
  console.table(work);
}