// http://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine){
  var bill25 = 0;
  var bill50 = 0;
  var bill100 = 0;
  var check = true;

  for (var i = 0; i < peopleInLine.length; i++){
    if (peopleInLine[i] === 25){
      bill25++;
      continue;
    }
    else if (peopleInLine[i] === 50){
      if (bill25 > 0){
        bill50++;
        bill25--;
        continue;
      }
      else {
        check = false;
        break;
      }
    }
    else if (peopleInLine[i] === 100){
      if (bill50 === 0){
        if (bill25 >= 3){
          bill25 -= 3;
          continue;
        }
        else {
          check = false;
          break;
        }
      }
      else if (bill50 > 0){
        if (bill25 > 0){
          bill25 -= 1;
          bill50 -= 1;
          continue;
        }
        else {
          check = false;
          break;
        }
      }
    }
  }

  return (check)? "YES" : "NO";
}