const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`); // Log the request method and URL
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!'); // Send a response to the client
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
