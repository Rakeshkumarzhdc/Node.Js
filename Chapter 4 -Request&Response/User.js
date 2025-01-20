const http = require('http'); 

const server = http.createServer((req, resp) => {
    // Log the request details
    console.log(req.url, req.method, req.headers);

    // Routing Request
    if (req.url === '/') {
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<html>');
        resp.write('<head><title>Complete Coding</title></head>');
        resp.write('<body><h1>Enter Your Details</h1>');
        resp.write('<form>');
        resp.write('<input type="text" name="username" placeholder="Enter your name"><br>');

        // Gender input (Radio buttons)
        resp.write('<label for="male">Male</label>');
        resp.write('<input type="radio" id="male" name="gender" value="Male"><br>');
        resp.write('<label for="female">Female</label>');
        resp.write('<input type="radio" id="female" name="gender" value="Female"><br>');

        // Submit button
        resp.write('<input type="submit" value="Submit">');
        resp.write('</form>');
        resp.write('</body>');
        resp.write('</html>');
        return resp.end(); // End response and prevent further code execution
    } else if (req.url === '/product') {
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<html>');
        resp.write('<head><title>Complete Coding</title></head>');
        resp.write('<body><h1>Learning this program</h1></body>');
        resp.write('</html>');
        return resp.end(); // End response and prevent further code execution
    }

    // If no routes match, send a 404 Not Found response
    resp.statusCode = 404;
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title>Complete Coding</title></head>');
    resp.write('<body><h1>404 Not Found</h1></body>');
    resp.write('</html>');
    resp.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
