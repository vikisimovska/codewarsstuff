function prefill(n, v) {
  var work = Array(n + 1);
  console.log(work);

  work = work.join(v + '*');
  console.log(work);

  work = work.split('*');
  console.log(work);

  work.pop();
  console.log(work);
  return work;
}

prefill(5, 'b');
