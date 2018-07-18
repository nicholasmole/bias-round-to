'use strict';

var _math = require('./toTenths');

/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @return {string}
 */

module.exports = function(givenNumber, biasNumber = 5) {

	var _floor =  Math.floor(givenNumber);

	var _differenceBetweenNumbers = Math.abs( (givenNumber * 10) - (_floor * 10));


	if ( _differenceBetweenNumbers >= biasNumber) {

		return Math.ceil(givenNumber);

	} 

	return _floor;
};