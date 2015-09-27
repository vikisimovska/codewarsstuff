function highAndLow(numbers){
  return (Math.max.apply(this, numbers.split(' ').map(function(value){return Number(value)}))).toString() + ' ' + (Math.min.apply(this, numbers.split(' ').map(function(value){return Number(value)}))).toString()
}