function whoIsNext(names, r){  
  var pointer = 0;
  while (names[r-1] === undefined){
    names.push(names[pointer]);
    names.push(names[pointer]);
    pointer++;
  }
  return names[r-1];
}