// http://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  var check = true;

  var traverse = function(sel1, sel2){
    if (sel1 === undefined || sel2 === undefined){
      check = false;
      return;
    } else if (Array.isArray(sel1) !== Array.isArray(sel2)){
      check = false;
      return;
    }

    if (Array.isArray(sel1)){
      for (var i = 0; i < sel1.length; i++){
        traverse(sel1[i], sel2[i]);
      }
      for (var i = 0; i < sel2.length; i++){
        traverse(sel1[i], sel2[i]);
      }
    }
  }

  traverse(this, other);
  return check;

};
