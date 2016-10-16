var request = require('request');

module.exports = function(req, res) {
    request('http://news-at.zhihu.com/api/4/news/latest', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<html><head><meta charset="utf-8" /></head><body>')
            res.end(body);
        }
    })
}
