//http://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript



function validateBattlefield(field) {
  var counter = 0; 
  var check = true;
  for (var i = 0; i < field.length; i++){
    for (var j = 0; j < field[0].length; j++){
      counter += field[i][j];
    }
  }
  if (counter !== 20){
    check = false;
  }
  return check;
}