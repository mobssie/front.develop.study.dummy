const http = require('http');
const fs = require('fs');

/*
http.createServer((request, response) => {
    response.end('ddddd');
}).listen('7777', ()=>{
    console.log('server on!!');
});
*/

http.createServer((request, response) => {
    if(request.url === '/'){response.writeHead(200,{
        'content-Type': 'text/html'
    });
    fs.readFile('index.html','utf-8', (err, file) => {
        response.end(file);
    });
} else if(request.url === './111'){
    fs.readFile('404.html', 'utf-8', (err, file) => {
        response.end(file);
    });
} else {
        fs.readFile('404.html', 'utf-8', (err, file) => {
            response.end(file);
        });
    }
}).listen('8081', () =>{
    console.log('server on!!');
});