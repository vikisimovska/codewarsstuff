function uniq(arr) {
  console.log(arr);
  var work = {};
  arr.forEach(function(value){work[value] = true});
  return Object.keys(work);
}