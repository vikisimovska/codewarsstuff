// http://www.codewars.com/kata/52dc4688eca89d0f820004c6/train/javascript

// to help with debugging
function unbleach (n) {
  if (n) return n.replace(/ /g, 's').replace(/\t/g, 't').replace(/\n/g, 'n');
}
// solution
function whitespace(code, input) {
  var output = '', stack = [], heap = {};
  // ...
  return output;
};