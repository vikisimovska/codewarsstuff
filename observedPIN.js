// http://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

function getPINs(observed) {
  var lib = {
    "1": "124", 
    "2": "1235", 
    "3": "236", 
    "4": "1457", 
    "5": "24568", 
    "6": "3569", 
    "7": "478", 
    "8": "57890", 
    "9": "689", 
    "0": "80"
  }

  var work = observed.split('');
  work.map(function(value, key){work[key] = lib[value]});

  console.log("WORK: ", work);

  var result = [];

  var recurse = function(current, depth){
    if (current.length === observed.length){
      result.push(current);
      return;
    }

    for (var i = 0; i < work[depth].length; i++){
      recurse(current += work[depth][i], depth + 1);
      current = current.slice(0, current.length-1);
    }
  }

  recurse('', 0);
  return result;


}