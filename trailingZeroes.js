function zeros (n) {
  var count = 0;

  for (var i = 5; n/i >= 1; i *= 5){
    count += Math.floor(n/i);
  }

  return count;
}