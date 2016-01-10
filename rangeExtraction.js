function solution(list){
  var work = [];
  var start = list[0];

  for (var i = 1; i < list.length; i++){
    if (list[i] !== list[i-1]+1){
      work.push([start, list[i-1]]);
      start = list[i];
    } else {

    }
  }
  work.push([start, list[list.length-1]]);
  var result = [];
  
  work.forEach(function(chunk){
    if (chunk[0] === chunk[1]){
      result.push(chunk[0].toString());
    } else if (chunk[1] - chunk[0] < 2){
      result.push(chunk[0].toString());
      result.push(chunk[1].toString());
    } else{
      result.push(chunk[0].toString() + '-' + chunk[1].toString());
    }
  })
  console.log(work);
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);