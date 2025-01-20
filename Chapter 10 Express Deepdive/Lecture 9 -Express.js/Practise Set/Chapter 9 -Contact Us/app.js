const express = require('express');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.url, req.method);
    next();
});

// Middleware for a specific response
app.use((req, res, next) => {
    console.log("Third Middleware", req.url, req.method);
    if (!res.headersSent) {
        res.send("<h1>Welcome to coding</h1>");
    } else {
        next();
    }
});

// Route definition
app.get('/', (req, res) => {
    res.send('Hello from Express with Middleware!');
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
