var makeNext = function(input){
  var result = '';
  var prev = input[0];
  var count = 1;

  for (var i = 1; i < input.length; i++){
    if (input[i] !== prev){
      result += count.toString();
      result += prev.toString();
      prev = input[i];
      count = 1;
    } else {
      count++;
    }
  }
  result += count.toString();
  result += prev.toString();
  return result;
}

function getLines(line){
  var results = ['1'];
  line--;

  while (line--){
    results.push(makeNext(results[results.length-1]));
  }

  return results.join(',');
}