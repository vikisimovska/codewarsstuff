//http://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

function loop_size(node){
  var work1 = node;
  var work2 = node.next;
  
  // make work2 the faster traveling one;
  var advanceToggle = false;
  
  while (work1 !== work2){
    work2 = work2.next;
    if (advanceToggle){
      work1 = work1.next;
      advanceToggle = false;
    }else {
      advanceToggle = true;
    }
  }
  
  var counter = 1;
  work2 = work2.next;
  
  while (work1 !== work2){
    counter++;
    work2 = work2.next;
  }
  
  return counter;
}