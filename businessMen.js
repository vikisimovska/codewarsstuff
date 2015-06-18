//http://www.codewars.com/kata/525f277c7103571f47000147/train/javascript

var convertTime = function(input){
  return Number((input.slice(0, 2) * 60)) + Number(input.slice(3, 5));
}

var convertMinutes = function(number){
  var minutes = number % 60;
  var hours = parseInt(number / 60);

  if (hours < 10){
    if (minutes < 10){
      return "0" + hours.toString() + ":" + "0" + minutes.toString();
    }
    else {
      return "0" + hours.toString() + ":" + minutes.toString(); 
    }
  }
  else{
    if (minutes < 10){
      return hours.toString() + ":" + "0" + minutes.toString();
    }
    else {
      return hours.toString() + ":" + minutes.toString(); 
    }
  }
}


var timeDifference = function(early, later){
  return convertTime(later) - 1 - convertTime(early);
}

function getStartTime(schedules, duration) {
  var work = Array.apply(null, new Array(1440)).map(Boolean.prototype.valueOf,false)
  console.log(work);
}

console.log("CONVERTED: ", convertTime('01:00'));
console.log("TIME DIFF: ", timeDifference('10:30', '12:00'));
convertMinutes(60);