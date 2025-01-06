import server from './app.js';  // Import the running app and server
import request from 'supertest';  // For HTTP requests
import assert from 'assert';  // For assertion checks

// No need to create a new server, as the one from app.js is already running

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(server).get('/');
    console.log(response.text);  // Optional, to view the response in the console
    assert.strictEqual(response.text, 'Hello World');
  });
});