//http://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

function scoreThrows(radiuses){
  if (radiuses.length === 0){
    return 0;
  }
  var check = true;
  var result = 0;
  
  for (var i = 0; i < radiuses.length; i++){
    if (radiuses[i] < 5){
      result += 10;
    }
    else if (radiuses[i] <= 10){
      result += 5;
      check = false;
    }
    else {
      check = false;
    }
  }
  if (check){
    result += 100;
  }
  return result;
}
