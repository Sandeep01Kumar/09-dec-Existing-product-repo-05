const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

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
