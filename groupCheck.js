//http://www.codewars.com/kata/54b80308488cb6cd31000161/train/javascript

 function groupCheck(s){
   console.log(s);
  var check = true;
  var work = [];
  for (var i = 0; i < s.length; i++){
    s[i] === "(" && work.push("(");
    s[i] === "[" && work.push("[");
    s[i] === "{" && work.push("{");
    if ("}])".indexOf(s[i]) > -1){
      var temp = work.pop();
      if (s[i] === "}"){
        check = (temp === "{")? true : false;
      }
      if (s[i] === "]"){
        check = (temp === "[")? true : false;
      }
      if (s[i] === ")"){
        check = (temp === "(")? true : false;
      }
    }
  }
  if (work.length > 0){
    return false;
  }
  return check;
 }