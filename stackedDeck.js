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

  if (cheatCode !== undefined){
    for (var i = 0; i < cheatCode; i++){
      this.shuffle();
    }
  }

  this.times = 0;
    
}
StackedDeck.prototype.shuffle = function () {
  var daDeck = this.shuffledDeck;
  var switchIndex = this.times % 52;
  var temp = this.shuffledDeck[switchIndex];

  this.shuffledDeck[switchIndex] = this.shuffledDeck[51];
  this.shuffledDeck[51] = temp;
  this.times++;
}





