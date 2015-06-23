// http://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  var count = names.length;

  if (count > 3){
    return names[0] + ', ' + names[1] + ' and ' + (count-2).toString() + ' others like this';
  }
  else if (count === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }
  else if (count === 2){
    return names[0] + ' and ' + names[1] + ' like this';
  }
  else if (count === 1){
    return names[0] + ' likes this';
  }
  else {
    return 'no one likes this';
  }
}