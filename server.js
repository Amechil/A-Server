const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.url === '/info' && req.method === 'GET') {
    // Simulate some asynchronous operation
    setTimeout(() => {
      const userInfo = {
        cpu: os.cpus(),
        os: {
          platform: os.platform(),
          release: os.release(),
          type: os.type(),
          totalMemory: os.totalmem(),
          freeMemory: os.freemem()
        }
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userInfo));
    }, Math.random() * 2000); // Random delay between 0 to 2000 ms
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});