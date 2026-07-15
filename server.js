const express = require('express');
const app = express();

// Security hardening (per QA security gate): Express advertises itself with an
// `X-Powered-By: Express` header on every response by default. Disable it so the
// web framework identity is not disclosed on any success or error response.
app.disable('x-powered-by');

const hostname = '127.0.0.1';
const port = 3000;

// Security hardening (per QA security gate): set `X-Content-Type-Options: nosniff`
// on every response so browsers do not MIME-sniff the plain-text bodies. Express's
// default error handler already emits this header on 404 responses; this app-level
// middleware makes the protection consistent across the 200 success responses too.
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.get('/', (req, res) => res.type('text/plain').send('Hello, World!\n'));
app.get('/good-evening', (req, res) => res.type('text/plain').send('Good evening'));

// Express 5 forwards listen/bind failures (for example EADDRINUSE) to this
// callback's first argument. Handle it so startup errors stay visible and the
// process exits non-zero, matching the original http server's behavior instead
// of falsely reporting a successful start.
app.listen(port, hostname, (err) => {
  if (err) {
    console.error(`Failed to start server at http://${hostname}:${port}/:`, err);
    process.exitCode = 1;
    return;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});
