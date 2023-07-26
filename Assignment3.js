let fs = require('fs');
let http = require('http');

let htmlData = `<h1> Hello World </h1>
<p> This is {sathish}... </p>
`;
fs.writeFile('index.html',htmlData, ()=>
 console.log('index.html created successfully')
);


let server = http.createServer((request,response)=>{
    fs.readFile('index.html', (err, data) => {
        if (err) {
          response.writeHead(500);
          response.end('Error loading index.html');
        } else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
        //   response.write()
          response.end(data);
        }
      });
    })

server.listen(3000);
