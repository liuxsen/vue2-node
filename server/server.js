var http = require('http');
var router = require('./router');

var server = http.createServer().listen(3000);

server.on('request', function(req, res) {
    router(req, res);
})
