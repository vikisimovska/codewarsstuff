(function(){
'use strict';

function popular_artists(input){

  // this chunk splits up the text file by each line
  // and then goes on to split up each line by artists
  var lines = input.split('\n');
  lines = lines.map((line)=>{
    return line.split(',');
  })
  
  // creates two hashes that I'll be working with
  var results = {};
  var work = {};
  var key;

  // iterates through each line
  // at each line, goes through each author, and combines
  // with every author already found in that line to create
  // a key
  // takes this key and increments or inserts into the 
  // results hash
  lines.forEach((line)=>{
    work = {};
    line.forEach((artist_1)=>{
      for (let artist_2 in work){
        key = [artist_1, artist_2].sort().join('_');
        results[key]? results[key]++ : results[key] = 1;
      }
      work[artist_1] = true;
    })
  })

  // deletes all entries in results that have a count 
  // that is less than 50
  for (let key in results){
    if (results[key] < 50){
      delete results[key];
    }
  }

  return results;
}

function popular_artists_2(input){
  var lines = input.split('\n');
  lines = lines.map((line)=>{
    return line.split(',');
  })

  
}

module.exports = popular_artists;

})();
