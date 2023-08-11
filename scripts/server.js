var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer
(
    function (req, res) 
    {
        var q = url.parse(req.url, true);

        // get access to URLSearchParams object
        const search_params = q.searchParams;

        // get url parameters
        const datatosave = search_params.get('mydata');

        fs.appendFile('family.csv', datatosave, (err) => 
        {
            if (err) 
            {
                throw err;
            }
            else
            {
                console.log('Data appended to file')
            } 
        });        
    }
).listen(5500);