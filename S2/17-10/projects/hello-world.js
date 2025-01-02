const http = require('node:http');
const hostname = '127.0.0.1';
const port = 7000;
console.log("123 probando");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* ALT + SHIFT + F  */  // Formatea el código

// WIN + SHIFT + S  // Captura de pantalla