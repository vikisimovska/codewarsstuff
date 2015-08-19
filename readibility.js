var vowelNumber = function(word){
  var vowels = {
    'a': true, 
    'e': true, 
    'i': true,
    'o': true, 
    'u': true
  };

  var count = 0;

  vowels[word[0]] && count++;

  for (var i = 1; i < word.length; i++){
    if (vowels[word[i]] && vowels[word[i-1]] === undefined){
      count++;
    }
  }
  return count;
}

function fleschKincaid(text){
  text = text.split(/\. |! /);
  text = text.map(function(sentence){return sentence.split(' ')});
  var wordCount = 0;
  var vowelCount = 0;
  var sentenceCount = text.length;
  text.forEach(function(sentence){
    wordCount += sentence.length;
    sentence.forEach(function(word){
      vowelCount += vowelNumber(word.toLowerCase());
    })
  })
  console.log("WORD COUNT: ", wordCount);
  console.log("VOWEL COUNT: ", vowelCount);
  console.log("SENTENCE COUNT: ", sentenceCount);
  var averageWords = wordCount / sentenceCount;
  var averageSyllable = vowelCount / wordCount;
  var result = (0.39 * averageWords) + (11.8 * averageSyllable) - 15.59;
  return Number(result.toFixed(2));
}