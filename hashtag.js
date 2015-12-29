function getHashtags(post) {
  
  var work = [];
  var lib = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  post.split(' ').forEach(function(word){
    if (word[0] === '#'){
      var justWord;
      for (var i = 0; i < word.length; i++){
        if (word[i] !== '#'){
          justWord = word.slice(i);
          break;
        }
      }

      if (justWord !== undefined && justWord.split('#').length ===1 && lib.indexOf(justWord[0]) > -1){
        work.push(justWord);
      }
    }
  })
  return work;
}