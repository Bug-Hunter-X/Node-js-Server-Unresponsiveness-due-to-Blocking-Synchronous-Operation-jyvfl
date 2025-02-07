const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using asynchronous operations
  let count = 0;
  function processChunk() {
    let startTime = Date.now();
    for (let i = 0; i < 10000000; i++) {
      count++;
    }
    let endTime = Date.now();
    console.log(`Chunk processed in ${endTime - startTime}ms`);
    if (count < 1000000000) {
      setTimeout(processChunk, 0); // Use setTimeout for asynchronous processing
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }
  processChunk();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});