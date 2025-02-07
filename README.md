# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation within a request handler blocks the event loop, causing the server to become unresponsive. The `bug.js` file shows the problem, while `bugSolution.js` presents the solution.

## Problem

In `bug.js`, a simple HTTP server is created.  The request handler includes a computationally expensive loop that runs synchronously.  This blocks the event loop, preventing the server from processing any further requests until the loop completes.  This results in the server appearing to hang or become unresponsive.

## Solution

The solution in `bugSolution.js` demonstrates how to use asynchronous operations (specifically, `setTimeout`) to prevent the event loop from being blocked.  The long-running task is broken down into smaller chunks, allowing other requests to be processed concurrently.