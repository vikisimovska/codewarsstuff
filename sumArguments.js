function sum(){
  var work = [];

  for (var i = 0; i < arguments.length; i++){
    work.push(arguments[i]);
  }

  return work.reduce(function(prev, curr){
    if (prev === false){
      return false;
    } else if (Number.isNaN(Number(curr))){
      return false;
    } else if (curr === undefined){
      return false;
    } else if (curr === null){
      return false;
    } else {
      return prev + curr;
    }
  }, 0);
}