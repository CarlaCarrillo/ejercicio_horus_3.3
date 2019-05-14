'use scrict'
const modelpag2 = require ('../models/modelpag2');
const pag2 =(req) => {
	var result = modelpag2();
	return (JSON.stringify(result)); //
};

module.exports = pag2;
