// http://www.codewars.com/kata/5255892719453db6d2000a23/train/javascript

var anarchy = function () {
  var smallerWork = "a".charCodeAt();
  var largerWork = "b".charCodeAt();
  var work = largerWork - smallerWork;
  return 'I can write numbers like, ' + (work).toString() + ', ' + (work + work).toString() + ', ' + (work + work + work).toString() + '.';
}