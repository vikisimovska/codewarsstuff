function josephusSurvivor(n,k){
  var work = [];
  for (var i = 1; i < n+1; i++){
    work.push(i);
  }

  var pointer = 0;

  while (work.length > 1){
    pointer = (pointer + k - 1) % work.length; 
    work.splice(pointer, 1);
  }
  return work[0];
}

josephusSurvivor(7, 3);