const mongoose = require('mongoose');
const server = require('../server/app.js');
const request = require('supertest');

afterAll( () => {
    mongoose.connection.close();
});

describe('API endpoints response', function() {
    
    test('recieves and responds to get request to /product/15', (done) => {
    return request(server)
      .get('/api/productView/products/15')
      .then(  (res) => {
          return res.body[0];
      })
      .then( (product) => {
          expect(product).toBeDefined();
          expect(product.id).toEqual(15);
          done();
      })
    });
});

