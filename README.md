# hao-backprop-test

Test project for backprop integration. A minimal Node.js HTTP server built with [Express](https://expressjs.com/) that hosts two plain-text endpoints.

## Endpoints

| Method | Path            | Response         |
|--------|-----------------|------------------|
| GET    | `/`             | `Hello, World!`  |
| GET    | `/good-evening` | `Good evening`   |

## Requirements

- Node.js >= 18 (required by Express 5)

## Getting Started

Install dependencies (uses **npm**):

```bash
npm install
```

Start the server:

```bash
npm start
```

The server listens at http://127.0.0.1:3000/.
