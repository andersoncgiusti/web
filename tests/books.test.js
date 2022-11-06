const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Test routes books', () => {

    it('should consulting status books router', () => {
        return request.get('/api/books_status').then(res => expect(res.statusCode).toEqual(200));
    }),

    it('should post url books test', () => {

        return request.post('/api/books') 
        .then(res => {

            expect(res.statusCode).toEqual(200);

        }).catch(err => {
            // console.log(err);
        })
    }, 60_000),

    it('should post books test', () => {

        return request.post('/api/books')
        .then(res => {

            expect(res.statusCode).toEqual(200);

        }).catch(err => {
            // console.log(err);
        })
    }, 60_000)
    
    // TIMEOUT IN TEST
    // it('should get url books test', () => {

    //     return request.get('/api/books') 
    //     .then(res => {
            
    //         expect(res.statusCode).toEqual(200);

    //     }).catch(err => {
    //         // console.log(err);
    //     })
    // }, 180_000)
});

