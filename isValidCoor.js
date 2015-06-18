//http://www.codewars.com/kata/5269452810342858ec000951/train/javascript

function isValidCoordinates(coordinates){
  console.log(coordinates);
  var lib = "0123456789 -,."
  for (var i = 0; i < coordinates.length; i++){
    if (lib.indexOf(coordinates[i])){
      return false;
    }
  }
  coordinates

  return true;
}