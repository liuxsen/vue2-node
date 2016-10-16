var request = require('request');
var url = require('url');
var qs = require('querystring');

var router = function(req, res) {
    console.log(req.url);
    console.log(url.parse(req.url))
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/getInfo') {
        // 请求首页获取知乎日报首页接口
        // http://news-at.zhihu.com/api/4/news/3892357
        request('http://news-at.zhihu.com/api/4/news/latest', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage. 
                    // res.writeHead(200, { 'content-type': 'text/html' })
                    // res.write('<html><head><meta charset="utf-8" /></head><body>')
                res.end(body);
            }
        })
    }
    if (pathname == '/detail') {
        // 请求首页获取知乎日报首页接口
        // http://news-at.zhihu.com/api/4/news/3892357
        var id = qs.parse(url.parse(req.url).query).id;
        console.log('我拿到了id:' + id)
        request('http://news-at.zhihu.com/api/4/news/' + id, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage. 
                    // res.writeHead(200, { 'content-type': 'text/html' })
                    // res.write('<html><head><meta charset="utf-8" /></head><body>')
                res.end(body);
            }
        })
    }
}

module.exports = router;
