const http = require("http");
const url = require("url");

function handler(req,res) {

	const parsedURL = url.parse(req.url,true);
	// console.log(parsedURL);
	
	if(parsedURL.pathname === '/'){
		res.writeHead(200, {'Content-type':'text/plain'});
		res.write('Hello user, I am a webserver!');
		return res.end();
	} else if (parsedURL.pathname === '/time'){
		res.writeHead(200, {'Content-type':'text/plain'});
		res.write(new Date().toString());
		return res.end();
	}
	else{
		res.writeHead(404, {'Content-type':'text/plain'});
		return res.end();
	}

}

const server =  http.createServer(handler);

server.listen(3000);