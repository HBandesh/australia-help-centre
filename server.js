/**
 * This module is the entry point of Express.
 */

import express from 'express';
import compression from 'compression';
import { servePage } from './requestHandler';

const port = process.env.PORT || 8080 ,
server = express();

//Compressing the data before sending it back to client.
server.use(compression());
server.use(express.static('./public'));

//Defining Routes
//Route for Home page
server.get("/",servePage());

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});