var solution = function(firstArray, secondArray) {
  var work = 0;
  firstArray.forEach(function(value, index){
    work += Math.abs((value - secondArray[index]) * (value - secondArray[index]));
  })
  return work / firstArray.length;
}