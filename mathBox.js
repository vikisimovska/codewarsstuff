var work = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var run = function(input){
  var result = [];

  var find = function(build, pullFrom){
    if (build.length === 4){
      if (build[0] - build[1] - build[2] - build[3] === -28){
        result.push(build.slice());
      }
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1);
      build.push(temp);
      find(build, pullFrom);
      pullFrom.splice(i, 0);
    }
  }

  find([], input)

  return result;
}


run(work);