const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  describe('GET /', () => {
    it('should return a 200 status and a success message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ express: 'Backend Connected!!' });
    });
  });

  describe('CORS Headers', () => {
    it('should set CORS headers', async () => {
      const response = await request(app).get('/');
      expect(response.headers['access-control-allow-origin']).toBe('http://localhost:3000');
      expect(response.headers['access-control-allow-methods']).toBe('GET, POST, OPTIONS, PUT, PATCH, DELETE');
      expect(response.headers['access-control-allow-credentials']).toBe('true');
    });
  });

  describe('Error Handling', () => {
    it('should call global error handler for non-existing routes', async () => {
      const response = await request(app).get('/non-existing-route');
      expect(response.status).not.toBe(404);
      expect(response.body).toHaveProperty('message');
    });
  });

});
