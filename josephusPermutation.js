function josephus(items,k){
  var pointer = 0;

  var work = [];

  while (items.length > 0){
    pointer += (k-1);
    if (pointer >= items.length){
      pointer = pointer % items.length;
    }
    var temp = items.splice(pointer, 1)[0];
    work.push(temp);
  }

  return work;
}
