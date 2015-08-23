function solution(roman){
  console.log(roman);
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

  roman.split('').forEach(function(value, index, collection){
    count += (collection[index+1] !== undefined && lib[value] < lib[collection[index+1]])? - lib[value] : lib[value];
  })

  return count;
}