// http://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

function toUnderscore(string) {
  var capLib = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var work = '';
  if (typeof string === "number"){
    return Number(string);
  }
  work += string[0].toLowerCase();

  for (var i = 1; i < string.length; i++){
    if (capLib.indexOf(string[i]) > -1){
      work += ' ';
    }
    work += string[i].toLowerCase();
  }
  work = work.split(' ');
  work = work.join('_');
  console.log(work);
  return work;
}

