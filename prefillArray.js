function prefill(n, v) {
  if (typeof n !== 'number'){
    throw TypeError;
  } else if (n % 1 !== 0){
  	throw TypeError;
  } else if (n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY){
  	console.error("Infinity is invalid");
  	return;
  } else if (n === true){
  	console.log('reached here');
  	throw "true is invalid";
  }

  var result = [];

  var recurse = function(depth){
  	if (depth === n){
  		return;
  	}
  	result.push(v);

  	recurse(depth + 1);
  }
  recurse(0)

  return result;
}