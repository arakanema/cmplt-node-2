const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.',
      });
    })
    .end(done);
});

it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toInclude({name: 'Masahiro1', age: 7});
    })
    .end(done);
});
