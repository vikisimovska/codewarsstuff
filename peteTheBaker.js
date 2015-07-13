// http://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  var necessaryItems = Object.keys(recipe);
  var availableItems = Object.keys(available);

  for (var i = 0; i < necessaryItems.length; i++){
    if (availableItems.indexOf(necessaryItems[i]) === -1){
      return 0;
    }
  }
}