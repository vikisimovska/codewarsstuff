// http://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

var grow = function(input){
  if (input.length > 0){
    return input[0].toUpperCase() + input.slice(1);
  }
  return '';
}

function generateHashtag (str) {
  console.log("INPUT", str);
  if (str.length === 0){
    return false;
  }
  var work = str.split(' ');
  console.log(work);
  var work = work.map(function(value){return grow(value)}).join('');
  var work = "#" + work;
  if (work.length > 140){
    return false;
  }
  return work;
}