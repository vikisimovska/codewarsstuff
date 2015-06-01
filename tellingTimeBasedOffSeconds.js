//http://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {
  var result = [];
  var current;
  if ((seconds / 31536000) >= 1){
    current = Math.floor(seconds/31536000);
    if (current > 1){
      result.push(current.toString() + " years");
    }
    else {
      result.push("1 year");
    }
  }
  seconds = seconds % 31536000;
  if ((seconds / 86400) >= 1){
    current = Math.floor(seconds/86400);
    if (current > 1){
      result.push(current.toString() + " days");
    }
    else {
      result.push("1 day");
    }
  }
  seconds = seconds % 86400;
  if ((seconds / 3600) >= 1){
    current = Math.floor(seconds/3600);
    if (current > 1){
      result.push(current.toString() + " hours");
    }
    else {
      result.push("1 hour");
    }
  }
  seconds = seconds % 3600;
  if ((seconds / 60) >= 1){
    current = Math.floor(seconds/60);
    if (current > 1){
      result.push(current.toString() + " minutes");
    }
    else {
      result.push("1 minute");
    }
  }
  seconds = seconds % 60;
  if (seconds >=1){
    current = seconds;
    if (current > 1){
      result.push(current.toString() + " seconds");
    }
    else {
      result.push("1 second");
    }
  }
  if (result.length === 0){
    return "now";
  }else if (result.length === 1){
    return result[0];
  }else if (result.length === 2){
    return result[0] + " and " + result[1];
  }
  else {
    var temp = result.pop();
    return result.join(", ") + " and " + temp;
  }
}
