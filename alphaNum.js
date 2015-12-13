function alphanumeric(string){
  var dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  var check = true;

  string.split('').forEach(function(char){
    if (dict.indexOf(char) === -1){
      check = false;
      return;
    }
  })

  return string.length > 0? check : false;
}