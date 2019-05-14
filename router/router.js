'use strict'
const pag1 = require ('../controlers/pag1');
const pag2 = require ('../controlers/pag2');
const Search = require ('../controlers/search');

const router = (req, res) => {
	console.log(req.url);
	if(req.url === "/pag1") {	
		//pag1(req); //para llamar al lcontrolador
		var result = pag1(req);
		res.end(result);
	} 
	else if (req.url === "/pag2") {
		var newadd = pag2(req);
		res.end(newadd);
	}
	else if (req.url === "/search") {
		var search = Search(req);
		res.end(search);
	 }
	 else {
		 res.end("no estas en nigún lugar")
	 }

};



module.exports = router;
