// Step 2: Plain Node.js HTTP Server using built-in 'http' module
// This file demonstrates creating a basic web server without any external framework.

// 1. Import the built-in 'http' module provided by Node.js
const http = require('http');

// 2. Define the port number where the server will listen
const PORT = 3000;

// 3. Create the server using http.createServer()
// The callback function receives 'req' (request) and 'res' (response) objects for each incoming request
const server = http.createServer((req, res) => {
  // Set HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to specify the content type as plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body 'Hello' and end the response
  res.end('Hello');
});

// 4. Start the server and listen for incoming requests on port 3000
server.listen(PORT, () => {
  // Print message in terminal confirming server is running
  console.log(`Server running at http://localhost:${PORT}`);
});
