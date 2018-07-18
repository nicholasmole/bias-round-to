'use strict';
var _math = require('./bias-round-to/toTenths');
var bias = require('./bias-round-to/bias');
var biasWithTenth = require('./bias-round-to/biasWithTenth');
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

	biasWithTenths: function(givenNumber, tenth = 0, biasNumber = 5)  {
    return biasWithTenth(givenNumber, tenth, biasNumber);
  }
};