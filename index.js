const http = require('http');
const os = require('os');
const PORT = 3000;
const hostname = 'localhost';

const server = http.createServer(serverHandler);

function serverHandler(req, res) {
    if (req.method === 'GET' && req.url === '/') {
        // Simulate some asynchronous operation with a random delay
        const randomDelay = Math.random() * 1000; // Random delay between 0 and 1000 milliseconds
        setTimeout(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, world!');
        }, randomDelay);
    } else if (req.method === 'GET' && req.url === "/info") {
        // Return information about CPU and OS
        const info = {
            cpu: os.cpus(),
            os: {
                platform: os.platform(),
                release: os.release()
            }
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(info));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h3>Page not found</h3>');
    }
}

server.listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);
});
