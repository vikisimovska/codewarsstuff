// http://www.codewars.com/kata/54a0689443ab7271a90000c6/train/javascript

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      var individualDigs = number.toString().split('');
      var sumDigs = individualDigs.reduce(function(prev, curr){
        return prev + Number(curr);
      }, 0)
      return number % sumDigs === 0;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      number++;
      while (!this.isValid(number)){
        number++;
      }
      return number;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      start = (start !== undefined)? start+1 : 1; 
      var work = [];
      while (work.length < count){
        if (this.isValid(start)){
          work.push(start);
        }
        start++;
      }
      return work;
    }
  };

} () );