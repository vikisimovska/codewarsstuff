//http://www.codewars.com/kata/5476f4ca03810c0fc0000098/train/javascript

function getFunction(sequence) {
  
  
  var slope = (sequence[4] - sequence[0]) / 4;
  var start = sequence[0];
  for (var i = 0; i < sequence.length-1; i++){
    if (sequence[i+1] !== sequence[i] + slope){
      return "Non-linear sequence";
    }
  }
  if (slope === 0){
    return "f(x) = " + start;
  }
  if (sequence[0] === 0) {
    if (slope === 1){
      return "f(x) = " + "x";
    }
    else {
      return "f(x) = " + slope.toString() + "x";
    }
  }
  else {
    if (slope === 1){
      if (start < 0){
        return "f(x) = " + "x" + " - "  + Math.abs(start).toString();
      }
      return "f(x) = " + "x" + " + " + start.toString();
    }
    else {
      if (slope === -1){
        if (start < 0){
          return "f(x) = -x - " + Math.abs(start).toString();
        }
        return "f(x) = -x + " + start.toString();
      }
      if (start < 0){
        return "f(x) = " + slope.toString() + "x" + " - "  + Math.abs(start).toString();
      }
      return "f(x) = " + slope.toString() + "x" + " + " + start;
    }
  }
}
