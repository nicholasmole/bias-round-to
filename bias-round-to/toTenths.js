var decimal = require('./decimal');

decimal();

module.exports = {

  ceil10: function(number, tenths) {

		return Math.ceil10(number, tenths);
		
  },

	floor10: function(number, tenths) {
		
		return Math.floor10(number,tenths);
		
	}
	
};