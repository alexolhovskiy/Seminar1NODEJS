const http = require('http')
const fs = require("fs");

var home_cnt = 0,about_cnt=0;

let server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	switch (req.url) {
		case '/':
			fs.createReadStream('./template/index.html').pipe(res);
			home_cnt++;
			break;
		case '/about':
			fs.createReadStream('./template/about.html').pipe(res);
			about_cnt++;
			break;
		case '/other':
			fs.createReadStream('./template/other.html').pipe(res);
			break;
		case '/homecnt':
			res.end(`${home_cnt}`);
			break;
		case '/aboutcnt':
			res.end(`${about_cnt}`);
			break;
		default:
			fs.createReadStream('./template/error.html').pipe(res);
	}
});

const PORT = 3000;
const HOST = 'localhost';//'127.0.0.1'

server.listen(PORT, HOST, () => {
	console.log("Server start");
});