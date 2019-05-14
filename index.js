'use strict'
const http = require ('http');
const puerto= 3000;
const router= require ('./router/router');

http.createServer(router).listen(puerto);