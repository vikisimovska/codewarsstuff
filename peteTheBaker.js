// http://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  console.log('RECIPE: ', recipe);
  console.log('AVAILABLE: ', available);
  var necessaryItems = Object.keys(recipe);
  var availableItems = Object.keys(available);
  var howMany = [];
  var workingOn = [];
  for (var i = 0; i < necessaryItems.length; i++){
    if (availableItems.indexOf(necessaryItems[i]) === -1){
      return 0;
    }
    // workingOn.push(necessaryItems[i]):
    howMany.push(Math.floor(available[necessaryItems[i]] / recipe[necessaryItems[i]]));
  }
  console.log(workingOn);
  console.log(howMany);
  return Math.min.apply(this, howMany);
}