let http = require('http');
let fs = require('fs');
let url = require('url');

// let addr = 'http://localhost:5000/default.html?name=scott';
// let result = url.parse(addr,true);
// console.log(result.query.name);

http.createServer(function(req,res){
    var inurl = url.parse(req.url,true);
    var filename = "." + inurl.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end('404 not found');
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            return res.end();
        }

    }).listen(5000);
})