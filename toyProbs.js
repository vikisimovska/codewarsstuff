/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


Number.prototype.toEnglish = function () {
  // return my value as english words
  var work = this.toString();
  var result = "";

  var chunked = [];

  for (var i = work.length-1; i > -1; i--){
    var temp = "";
    temp = work[i] + temp;
    i--;
    temp = work[i] + temp;
    i--;
    temp = work[i] + temp;
    temp = temp.split('').filter(function(value){return ("1234567890".indexOf(value) > -1)}).join('');
    chunked.push(temp);
  }
  console.log('THE CHUNK: ', chunked);

  var result = "";
  var bigWork = [];

  if (chunked[0] && (chunked[0] !== '000')){
    var current = chunked[0];
    if (current % 100 <= 20 && current % 100 > 0){
      result = numbersToWords[current%100] + result;
    }
    if (current % 100 > 20){
      result = numbersToWords[(current % 100) - (current % 10)];
      if (current % 10){
        result = result + '-' + numbersToWords[current % 10];
      }
    }
    if (current >= 100) {
      result = 'hundred ' + result;
      result = numbersToWords[current[0]] + ' ' + result;
    }
    result = result.slice();

  }
  bigWork.push(result);

  if (chunked[1] && (chunked[1] !== '000')){
    var result1 = ''
    var temp = chunked[1];
    if (temp % 100 <= 20 && temp % 100 > 0){
      result1 = numbersToWords[temp%100] + result1;
      console.log(result1);
    }
    if (temp % 100 > 20){
      result1 = numbersToWords[(temp % 100) - (temp % 10)];
      if (temp % 10){
        result1 = result1 + '-' + numbersToWords[temp % 10];
      }
    }
    if (temp >= 100) {
      result1 = 'hundred ' + result1;
      result1 = numbersToWords[temp[0]] + ' ' + result1;
    }
    result1 += ' thousand';
  }
  bigWork.push(result1);
  
  if (chunked[2] && (chunked[2] !== '000')){
    var result2 = ''
    var temp = chunked[2];
    if (temp % 100 <= 20 && temp % 100 > 0){
      result2 = numbersToWords[temp%100] + result2;
    }
    if (temp % 100 > 20){
      result2 = numbersToWords[(temp % 100) - (temp % 10)];
      if (temp % 10){
        result2 = result2 + '-' + numbersToWords[temp % 10];
      }
    }
    if (temp >= 100) {
      result2 = 'hundred ' + result2;
      result2 = numbersToWords[temp[0]] + ' ' + result2;
    }
    result2 += ' million';
  }
  bigWork.push(result2);
  
  if (chunked[3] && (chunked[3] !== '000')){
    var result3 = ''
    var temp = chunked[3];
    if (temp % 100 <= 20 && temp % 100 > 0){
      result3 = numbersToWords[temp%100] + result3;
    }
    if (temp % 100 > 20){
      result3 = numbersToWords[(temp % 100) - (temp % 10)];
      if (temp % 10){
        result3 = result3 + '-' + numbersToWords[temp % 10];
      }
    }
    if (temp >= 100) {
      result3 = 'hundred ' + result3;
      result3 = numbersToWords[temp[0]] + ' ' + result3;
    }
    result3 += ' billion';
  }
  bigWork.push(result3);

  if (chunked[4] && (chunked[4] !== '000')){
    var result4 = ''
    var temp = chunked[4];
    if (temp % 100 <= 20 && temp % 100 > 0){
      result4 = numbersToWords[temp%100] + result4;
    }
    if (temp % 100 > 20){
      result4 = numbersToWords[(temp % 100) - (temp % 10)];
      if (temp % 10){
        result4 = result4 + '-' + numbersToWords[temp % 10];
      }
    }
    if (temp >= 100) {
      result4 = 'hundred ' + result4;
      result4 = numbersToWords[temp[0]] + ' ' + result4;
    }
    result4 += ' trillion';
  }
  bigWork.push(result4);

  if (chunked[5] && (chunked[5] !== '000')){
    var result5 = ''
    var temp = chunked[5];
    if (temp % 100 <= 20 && temp % 100 > 0){
      result5 = numbersToWords[temp%100] + result5;
    }
    if (temp % 100 > 20){
      result5 = numbersToWords[(temp % 100) - (temp % 10)];
      if (temp % 10){
        result5 = result5 + '-' + numbersToWords[temp % 10];
      }
    }
    if (temp >= 100) {
      result5 = 'hundred ' + result5;
      result5 = numbersToWords[temp[0]] + ' ' + result5;
    }
    result5 += ' quadrillion';
  }
  bigWork.push(result5);

  var finalResult = "";
  for (var i = bigWork.length -1; i > -1; i--){
    if (bigWork[i]){
      finalResult += bigWork[i];
      finalResult += ' ';
    }
  }

  for (var i = 0; i < finalResult.length-1; i++){
    if (finalResult[i] === ' ' && finalResult[i+1] === ' '){
      var temp = finalResult.split('');
      temp.splice(i, 1);
      finalResult = temp.join('');
    }
  }
  if (finalResult[finalResult-1] === ' '){
    finalResult.pop();
  }
  return finalResult;
};

// (2873783000800072).toEnglish();
