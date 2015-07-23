// http://www.codewars.com/kata/530265044b7e23379d00076a/train/javascript

var doLinesIntersect = function(line1, line2){
  return line1[0][0] <= line2[1][0] && line1[1][0] >= line2[0][0] && line1[0][1] <= line2[1][1] && line1[1][1] >= line2[0][1] || line2[0][0] <= line1[1][0] && line2[1][0] >= line1[0][0] && line2[0][1] <= line1[1][1] && line2[1][1] >= line1[0][1];
}

//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  var count = 0;
  var pointLine = [[-999999, point[1]], point];
  poly[poly.length] = poly[0];
  for (var i = 1; i < poly.length; i++){
    console.log(poly[i-1]);
    console.log(poly[i]);
    console.log(pointLine);
    if (doLinesIntersect([poly[i-1], poly[i]], pointLine)){
      count++;
    }
  }
  console.log(count);
}

