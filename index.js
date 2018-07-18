'use strict';
var bias = require('./lib/bias');
var biasIn = require('./lib/bias-in-place-value');
/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @return {string}
 */
module.exports = {
  bias: function(givenNumber, biasNumber = 5)  {
    return bias(givenNumber, biasNumber);
  },

	biasIn: function(givenNumber, tenth = 0, biasNumber = 5)  {
    return biasIn(givenNumber, tenth, biasNumber);
  }
};