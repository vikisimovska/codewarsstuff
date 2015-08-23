function solution(roman){
  
  var lib = {
    'M': 1000,
    'D': 500,
    'C': 100, 
    'L': 50, 
    'X': 10, 
    'V': 5, 
    'I': 1
  };

  var count = 0;

  for (var i = 0; i < roman.length; i++){
    if (lib[roman[i+1]] !== undefined && lib[roman[i]] < lib[roman[i+1]]){
      count -= lib[roman[i]];
    }else {
      count += lib[roman[i]];
    }
  }

  return count;
}