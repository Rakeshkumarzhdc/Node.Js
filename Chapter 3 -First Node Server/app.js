const http = require('http');

function requestListener(req, res) {
    console.log(req);
    process.exit();
}

const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
