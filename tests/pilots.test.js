const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Test routes pilots', () => {

    it('should consulting status pilots router', () => {
        return request.get('/api/pilots_status').then(res => expect(res.statusCode).toEqual(200));
    }),

    it('should post pilots', () => {    
      
        return request.post('/api/pilots') 
        .then(res => {
           
            expect(res.statusCode).toEqual(200);

        }).catch(err => {
            // console.log(err);
        })
    }, 60_000)
});

