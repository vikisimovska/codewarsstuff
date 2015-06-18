//http://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

function loop_size(node){
  var counter = 0;
  var current = node;
  while (current.value === undefined){
    current.value = counter;
    current = current.next;
    counter++;
  }
  console.log("THE COUNTER: ", counter);
  console.log("NODE: ", node.value);
  return (counter - node.value);
}