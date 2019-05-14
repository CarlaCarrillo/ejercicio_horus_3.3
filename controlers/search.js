'use strict'
var path = require('path');
var appDir = path.dirname(require.main.filename);
  
//view
const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');
		console.log(data)
    for(let key in data){
        let exp = "{{"+key+"}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }

    return parsedHtml;
};
	
const search =(req) => {
	var result = modelsearch();
	//se genera una variable para buscar un nombre
	var buscaNombre = "Estefania";
	//se busca ese nombre dentro del arreglo
	result = result.filter((alumno) => {
		if (alumno.nombre === buscaNombre) {
			return alumno;
		}
	})

	const view = fs.readFileSync('./views/index.html').toString('utf8');
	const parsedHtml = htmlRender(view, result[0]);
	
	return (); //
};


module.exports = search;
