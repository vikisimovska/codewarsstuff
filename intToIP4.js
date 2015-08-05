function dec2bin(dec){
  var work = (dec >>> 0).toString(2);
  while (work.length < 32){
    work = '0' + work;
  }
  return work
}

function binary2Int(input){
  return parseInt(input, 2).toString();
}

function int32ToIp(int32){
  var work = dec2bin(int32);
  var result = [];
  result.push(binary2Int(work.slice(0, 8)));
  result.push(binary2Int(work.slice(9, 16)));
  result.push(binary2Int(work.slice(17, 24)));
  result.push(binary2Int(work.slice(25, 32)));
  return result.join('.');
}