(function(){
'use strict';

var fs = require('fs');
var popular_artists = require('./popular_artists.js');

fs.readFile('Artist_lists_small.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(popular_artists(data));
});

})()
