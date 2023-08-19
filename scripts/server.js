var http = require('http');
var url = require('url');
var fs = require('fs');

console.log('started...')

http.createServer
(
    function (req, res) 
    {
        var q = url.parse(req.url, true);
        console.log('got url')
        var qdata = q.query;
        const datatosave = qdata.mydata
        console.log('got data')
        fs.appendFile('family.csv', datatosave, function(err) 
        {
            if (err) 
            {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("Data saved successfully")
            return res.end();
        });
    }
).listen(5500);