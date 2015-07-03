// floor and eggs

// To quickly demonstrate my method of solving this, I will 
// talk about it in terms of the worst case number of tries 
// it would take to find the floor at which eggs can survive
// on a 100 floor building. 


// floors           -- how many floors the building has
// survivalFloor    -- floor at which egg can survive
var checkBuilding = function(floors, survivalFloor){
  var work = [];
  for (var i = 1; i < floors+1; i++){

    // finding worst case scenario when the spacer is 
    // divisible into floors
    if (floors % i === 0){
      work.push(Math.floor(floors / i) + i -1)
    }

    // finding worst case scneario when the spacer is not 
    // divisible into floors 
    else {
      work.push(Math.max(Math.floor(floors / i) + floors - i * Math.floor(floors / i), Math.floor(floors / i) + i -1));
    }
  }
  // console.log(work);

  // the minimum worst case scenario number of tries 
  // is the minTries
  var minTries = Math.min.apply(this, work);
  console.log("MINIMUM WORST CASE: ", minTries);

  // result will contain the spacer lengths 
  var result = [];
  for (var i = 0; i < work.length; i++){
    if (work[i] === minTries){
      result.push(i+1);
    }
  }
  console.log("SPACERS: ", result);
}

checkBuilding(100);