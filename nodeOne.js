//http://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

function loop_size(node){
  var counter = 0;
  while (node.value === undefined){
    node.value = counter;
    node = node.next;
    counter++;
  }
  console.log("THE COUNTER: ", counter);
  console.log("NODE: ", node.value);
  return (counter - node.value);
}