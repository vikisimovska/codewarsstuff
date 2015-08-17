// http://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript

function Xbonacci(signature,n){
  console.log("SIG: ", signature);
  console.log("HOW MANY: ", n);
  for (var i = 0; i < n; i++){
    signature[i] = (signature[i] !== undefined)? signature[i] : signature.slice(i-n, i).reduce(function(prev, curr){return prev + curr}, 0);
  }
  return signature;
}
