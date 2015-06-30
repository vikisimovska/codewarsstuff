// http://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
  console.log(url);
  var work = url.split('.');
  if (url.indexOf('www') > -1){
    return work[1];
  }
  work = work[0];
  console.log(work);
  if (work.indexOf('://') > -1){
    work = work.split('://');
    return work[1];
  }
  return work;
}