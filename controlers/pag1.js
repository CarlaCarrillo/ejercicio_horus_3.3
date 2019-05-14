'use scrict'
const modelpag1 = require ('../models/modelpag1');
const pag1 =(req) => {
	var result = modelpag1();
	return (JSON.stringify(result)); //
};

module.exports = pag1;


//const pag1 = (req) => {
//	return req.url;
//};

//function numeros(){
//    for(let i=0, max=10; i<max; i++){
//        console.log("Numero " + (i+1));
//    }
//}
//numeros();


