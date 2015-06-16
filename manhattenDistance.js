//http://www.codewars.com/kata/52998bf8caa22d98b800003a/train/javascript

function manhattanDistance(pointA, pointB){
  var horiz = Math.abs(pointA[0] - pointB[0]);
  var vert = Math.abs(pointA[1] - pointB[1]);
  return horiz + vert;
}

