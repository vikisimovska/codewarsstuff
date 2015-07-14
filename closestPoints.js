// http://www.codewars.com/kata/5376343a003bf6e034000c56/train/javascript

var checkDistance = function(point1, point2){
  return Math.sqrt(Math.pow((point1[0] - point2[0]), 2) + Math.pow((point1[1] - point2[1]), 2));
}

// Calculate a pair of closest points
function closestPair( points ){
  var currClose;
  for (var i = 0; i < points.length-1; i++){
    for (var j = i+1; j < points.length; j++){
      if (currClose === undefined){
        currClose = [points[i], points[j]];
      }
      else if (checkDistance(points[i], points[j]) < checkDistance(currClose[0], currClose[1])){
        currClose = [points[i], points[j]];
      }
    }
  }
  return currClose;
}