import server from './app.js';  
import request from 'supertest';  
import assert from 'assert';  


describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(server).get('/');
    console.log(response.text);  
    assert.strictEqual(response.text, 'Hello World Pass');
  });
});