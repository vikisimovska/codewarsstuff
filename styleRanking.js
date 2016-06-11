// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

var User = function(){
  this.rank = -8;
  this.progress = 0;
}

User.prototype.incProgress = function(activityRank){
  var rankings = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];

  if (rankings.indexOf(activityRank) === -1){
    throw Error;
  } else if (this.rank === 8){
    this.progress = 0;
    return;
  }

  var difference = rankings.indexOf(activityRank) - rankings.indexOf(this.rank);

  var progressPointsToAdd;
  if (difference <= -2){
    progressPointsToAdd = 0;
  } else if (difference === -1){
    progressPointsToAdd = 1;
  } else if (difference === 0){
    progressPointsToAdd = 3;
  } else {
    progressPointsToAdd = 10 * difference * difference;
  }

  this.progress += progressPointsToAdd;

  while (this.progress >= 100){
    this.progress -= 100;
    if (this.rank < 8){
      this.rank = rankings[rankings.indexOf(this.rank) + 1];
    } 
    if (this.rank === 8){
      this.progress = 0;
      break;
    }
  }
}



// var user = new User()
// console.log(user.rank) // => -8
// console.log(user.progress) // => 0
// console.log(user.incProgress(-7))
// console.log(user.progress) // => 10
// console.log(user.incProgress(-5)) // will add 90 progress
// console.log(user.progress) //# => 0 // progress is now zero
// console.log(user.rank) //# => -7 // rank was upgraded to -7

