// Express Server for Lab 1 (Supports Local & Render Deployment)

// 1. Import Express framework using CommonJS syntax
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define the port number dynamically
// Uses environment variable PORT provided by hosting platforms like Render, or defaults to 3000 locally
const PORT = process.env.PORT || 3000;

// 4. Request Logging Middleware
// Simple custom middleware to log incoming requests and response status codes in the terminal
// Example output: GET / - 200, GET /unknown - 404
app.use((req, res, next) => {
  // 'finish' event is triggered once the response has been sent to the client
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} - ${res.statusCode}`);
  });
  // Call next() to pass control to the matching route handler
  next();
});

// ==========================================
// ROUTES
// ==========================================

// Route 1: GET / (Home route)
// Responds with a welcome message and HTTP status code 200
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1 Node.js and Express Server');
});

// Route 2: GET /about
// Responds with student name and section as JSON with HTTP status code 200
app.get('/about', (req, res) => {
  res.status(200).json({
    name: "Yenamala Sreedhar",
    section: "CSE-2E (211)"
  });
});

// Route 3: GET /time
// Responds with current date and 24-hour time using new Date() as JSON with HTTP status code 200
app.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).json({
    currentTime: now.toLocaleTimeString([], { hour12: false }), // 24-hour format: "18:13:45"
    currentDate: now.toLocaleDateString(),                      // e.g., "1/11/2026"
    fullDateTime: now.toLocaleString([], { hour12: false }),    // e.g., "1/11/2026, 18:13:45"
    iso: now.toISOString()                                     // e.g., "2026-11-01T12:43:45.000Z"
  });
});

// Route 4: Unknown Routes (404 Not Found Handler)
// Catches any undefined route (e.g., /hello, /test, /abc, /random)
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// ==========================================
// START SERVER
// ==========================================

// Start listening for incoming requests on the specified PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
