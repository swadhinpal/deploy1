import app from './app.js'; // Import the app directly
import request from 'supertest'; // For HTTP requests
import assert from 'assert'; // For assertion checks

describe('GET /', () => {
    it('should return Hello World', async () => {
        const response = await request(app).get('/'); // Use the app directly
        console.log(response.text); // Optional, to view the response in the console
        assert.strictEqual(response.text, 'Hello World');
    });
});
