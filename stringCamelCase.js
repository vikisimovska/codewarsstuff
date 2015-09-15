var makeCamel = function(word){
  word = word.toLowerCase();
  word = word[0].toUpperCase() + word.slice(1);
  console.log(word);
  return word;
}

function toCamelCase(str){
  var work = (str.indexOf('-') > -1)? str.split('-') : str.split('_');

  work = work.map(function(word, index){
    if (index === 0){
      return word;
    }
    return makeCamel(word);

  })
  console.log(work.join(''));
  return work.join('');
}


// toCamelCase('');
toCamelCase('the_stealth_warrior');