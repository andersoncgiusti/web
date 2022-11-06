const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

const request_status = require('../src/controllers/status.controller');

describe('Test routes status', () => {

    it('should consulting status router', () => {
        return request.get('/api/status').then(res => expect(res.statusCode).toEqual(200));
    }),

    it('should consulting status author', () => {
        const result = request_status.status_test();

        const test = {
            "author": "Anderson Giusti"
        }

        expect(result).toEqual(test);
    })
});

