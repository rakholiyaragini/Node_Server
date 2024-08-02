const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    let random = `${Math.floor(Math.random() * 1000)} - ${req.url} : New Request`;
    console.log(random);

    fs.appendFile('index.html ', random, () => {
            console.log('File appended!');
    });

    fs.readFile('index.html',  'UTF-8', (err, data) => {
        console.log(data);
    })
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to my server!</h1>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About page</h1>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Contact page</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(5000, () => {

    console.log(`Server running at http://localhost:5000/`);
})