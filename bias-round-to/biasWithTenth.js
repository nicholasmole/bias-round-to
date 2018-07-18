'use strict';
var _math = require('./toTenths');
/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @param {number} tenth
 * @return {string}
 */
module.exports = function(givenNumber, tenth = 0, biasNumber = 5) {

	var never_calculate_a_tenth_value = Math.abs(tenth);

	var _calc_by_number_that_isnt_tenth = Math.pow(10, never_calculate_a_tenth_value + 1);

	var _floor =  _math.floor10(givenNumber, tenth);
	
	var _differenceBetweenNumbers = Math.abs( ( givenNumber * (_calc_by_number_that_isnt_tenth) ) - Math.round( _floor * _calc_by_number_that_isnt_tenth ) ) * _calc_by_number_that_isnt_tenth;

	
	if ( _differenceBetweenNumbers >= ( biasNumber * _calc_by_number_that_isnt_tenth) ) {

		return _math.ceil10(givenNumber, tenth);

	} 

	return _floor;

};