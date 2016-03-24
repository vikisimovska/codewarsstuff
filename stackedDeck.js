var StackedDeck = function(cheatCode) {
    
    this.shuffledDeck = [];
    var numbers = ['A','K','Q','J','2','3','4','5','6','7','8','9','10'];
    var suits = ['d','h','c','s'];

    var daDeck = this.shuffledDeck;

    numbers.forEach(function(number){
      suits.forEach(function(suit){
        daDeck.push(number + suit);
      })
    })

    
}
StackedDeck.prototype.shuffle = function () {
  var daDeck = this.shuffledDeck;
  this.shuffledDeck.push(daDeck.shift());
}