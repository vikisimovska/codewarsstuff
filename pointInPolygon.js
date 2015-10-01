var crossesFromLeft = function(node1, node2, point){
  var slope = (node2[1] - node1[1]) / (node2[0] - node1[0]);
  console.log(slope);
  if (node1[1] < node2[1]){
    if (point[1] > node2[1]){
      console.log("false");
      return false;
    } else if (point1[1] < node1[1]){
      console.log("false");
      return false;
    }
    var node1ToPointSlope = (point[1] - node1[1]) / (point[0] - node1[0]);
    if (node1ToPointSlope < slope){
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } else {
    if (point[1] > node1[1]){
      console.log("false");
      return false;
    } else if (point[1] < node2[1]){
      console.log("false");
      return false;
    }
    var node2ToPointSlope = (point[1] - node2[1]) / (point[0] - node2[0]);
    if (node2ToPointSlope < slope){
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}

//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {

}

crossesFromLeft([4, 5], [1, 1], [0, 5]);