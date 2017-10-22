function findEvenIndex(arr){
  let total = 0;
  arr.forEach(item=>{
    total += item;
  })

  if (arr.length === 1){
    return 0;
  }

  let left = 0;
  let right = total;

  for (let i = 0; i < arr.length; i++){
    right -= arr[i];
    if (left === right){
      return i;
    }
    left += arr[i];
  }

  return -1;
}
