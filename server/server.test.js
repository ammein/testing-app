const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response' , (done) => {
    // request application first
    request(app)
    .get('/') // get Url
    .expect(404) // to expect status code
    .expect('Hello World') // expect hello world printing
    .end(done); // Async to wait until server fires
});

it('Should run user test' , (done)=>{
    request(app)
    .get('/user')
    // begin normal expect with res params to expect express app
    .expect((res) => {
        expect(res.body).toInclude({
            name : 'Amin',
            age : 24
        });
    })
    .end(done);
});