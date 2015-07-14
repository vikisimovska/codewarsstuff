// http://www.codewars.com/kata/526b1dd476952c04cf0000ab/train/javascript

function findSpecialIdx(vms) {
  // FIXME: This isn't a solution :(
  var prediction = 100;
  vms[0].vend();
  vms[3].vend();
  vms[3].vend();
  console.log(vms.weigh());
  //for (var i = 0 ; i < 100 ; i++) {
  //  vms[i].vend();
  //  if (vms.weigh() != prediction) return i;
  //  else prediction += 100;
  //}
};