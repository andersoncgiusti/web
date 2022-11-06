const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Test server', () => {

    it('should app port 3000', () => {
        return request.get('/').then(res => expect(res.statusCode).toEqual(200));
    })
});

