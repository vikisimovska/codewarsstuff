function orderWeight(input) {
  var work = input.split(' ').map(function(value){return Number(value)});
  var check;

  var compareWaz = function(a, b){
    var aSplitUp = a.toString().split('').reduce(function(prev, curr){return Number(prev) + Number(curr)});
    var bSplitUp = b.toString().split('').reduce(function(prev, curr){return Number(prev) + Number(curr)});

    if (aSplitUp < bSplitUp){
      return -1;
    }else if (aSplitUp > bSplitUp){
      return 1;
    }else {
      if (a.toString() < b.toString()){
        return -1;
      }else if (a.toString() > b.toString()){
        return 1;
      }else {
        return 0;
      }
    }
  }

  work.sort(function(a, b){
    return compareWaz(a, b);
  })

  return (work.length !== 1)? work.join(' ') : '';
}