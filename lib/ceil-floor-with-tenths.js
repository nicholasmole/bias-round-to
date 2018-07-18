var create_floor10_ceil10 = require('./create-floor10-ceil10');

create_floor10_ceil10();

module.exports = {

  ceil10: function(number, tenths) {

		return Math.ceil10(number, tenths);
		
  },

	floor10: function(number, tenths) {
		
		return Math.floor10(number,tenths);
		
	}
	
};