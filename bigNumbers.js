//http://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
  var workA = [];
  var workB = [];
  for (var i = 0; i < a.length; i++){
    workA.unshift(a[i]);
  }
  for (var j = 0; j < b.length; j++){
    workB.unshift(b[j]);
  }
  var toGo = Math.max(workA.length, workB.length);
  var preResult = [];
  var current;
  var carryOver = 0;
  for (var i = 0; i < toGo; i++){
    if (workA[i] && workB[i]){
      current = Number(workA[i]) + Number(workB[i]) + carryOver;
    }
    else if (workA[i] === undefined){
      current = Number(workB[i]) + carryOver;
    }
    else if (workB[i] === undefined){
      current = Number(workA[i]) + carryOver;
    }

    if (current < 10){
      preResult.unshift(current.toString());
      carryOver = 0; 
    }
    else {
      preResult.unshift((current % 10).toString());
      carryOver = 1;
    }
  }
  if (carryOver === 1){
    preResult.unshift('1');
  }
  var finalResult = preResult.join('');
  console.log(finalResult);
  return finalResult;
}