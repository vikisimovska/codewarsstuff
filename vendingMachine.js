// http://www.codewars.com/kata/526b1dd476952c04cf0000ab/train/javascript

function findSpecialIdx(vms) {
  // FIXME: This isn't a solution :(
  // var prediction = 100;
  // vms[0].vend();
  // vms[3].vend();
  // vms[3].vend();
  var count;

  for (var i = 0; i < 100; i++){
    count = 0; 
    while (count < i+1){
      vms[i].vend();
      count++;
    }
  }
  var work = vms.weigh().toString();
  work = Number(work[work.length-3] + work[work.length-2] + work[work.length-1]) - 1;
  return work;
};