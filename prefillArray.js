function prefill(n, v) {
  if (typeof n !== 'number'){
    throw TypeError
  }
  return Array(n+1).join(v + 'blah').split('blah');
}