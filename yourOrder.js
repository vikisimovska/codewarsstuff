function order(words){
  var lib = {};
  var numLib = {};

  for (var i = 0; i < '123456789'.length; i++){
    numLib['123456789'[i]] = true;
  }

  words = words.split(' ');
  words.forEach(function(word){
    for (var j = 0; j < word.length; j++){
      if (numLib[word[j]]){
        lib[word[j]] = word;
      }
    }
  })

  var result = [];

  for (var i = 1; i < Object.keys(lib).length + 1; i++){
    result.push(lib[i]);
  }

  return result.join(' ');
}