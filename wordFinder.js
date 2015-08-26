function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  var lib = { a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true };

  var results = [];

  for (var i = 0; i < this.words.length; i++){
    var counter = 0;
    for (var j = 0; j < pattern.length; j++){
      if (lib[pattern[j]] && this.words[i][j] === pattern[j]){
        counter++;
      } else if (pattern[j] === '?'){
        counter++;
      } else {
        break;
      }
    }
    if (counter === pattern.length && this.words[i].length === counter){
      results.push(this.words[i]);
    }
  }
  return results;

}