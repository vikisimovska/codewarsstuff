// http://www.codewars.com/kata/547fb94931cce5f5de00024f/train/javascript

Array.prototype.sumItUp = function(){
  return this.reduce(function(prev, curr){return prev + curr});
}

function tug_o_war(teams) {
  console.log(teams);
  var team1Sum = teams[0].sumItUp();
  var team2Sum = teams[1].sumItUp();
  if (team1Sum > team2Sum){
    return 'Team 1 wins!';
  }
  else if (team2Sum > team1Sum){
    return 'Team 2 wins!';
  }
  else {
    if (teams[0][0] > teams[1][teams[0].length-1]){
      return 'Team 1 wins!';
    }
    else if (teams[0][0] < teams[1][teams[0].length-1]){
      return 'Team 2 wins!';
    }
    else {
      return "It's a tie!";
    }
  }
}