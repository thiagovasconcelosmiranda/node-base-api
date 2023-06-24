import app from '../app';
import request from 'supertest';

describe("Testing api routes", () => {

    let email = 'teste@gmail.com';
    let password = '1234';
   
    it('should ping pong', (done) => {
          request(app)
          .get('/ping')
          .then(response => {
            expect(response.body.pong).toBeTruthy(); //true
            return done();
          });
    });

    it('should register a new user', (done) => {
      request(app)
      .post('/register')
      .send(`email=${email} &password=${password}`)
      .then(response => {
           expect(response.body.error).not.toBeUndefined();
           expect(response.body).toHaveProperty('id');
           return done();
      });

   });

   it('should not allow to register without password', (done) => {
    request(app)
    .post('/register')
    .send(`password=${password}`)
    .then(response => {
         expect(response.body.error).not.toBeUndefined();
         expect(response.body).toHaveProperty('id');
         return done();
    });
  });

  it('should not allow to register without any data', (done) => {
    request(app)
    .post('/register')
    .send(``)
    .then(response => {
         expect(response.body.error).not.toBeUndefined();
         expect(response.body).toHaveProperty('id');
         return done();
    });
  });

  it('should not login correctly', (done) => {
    request(app)
    .post('/login')
    .send(`email=${email} &password=${password}`)
    .then(response => {
         expect(response.body.error).not.toBeUndefined();
         expect(response.body.status).toBeTruthy();
         return done();
    });
  });

  it('should not login with incorrect data', (done) => {
    request(app)
    .post('/login')
    .send(`email=${email} &password=invalid`)
    .then(response => {
         expect(response.body.error).toBeUndefined();
         expect(response.body.status).toBeFalsy();
         return done();
    });
  });

  it('should list users ', (done) => {
    request(app)
    .post('/list')
    .send(``)
    .then(response => {
         expect(response.body.error).not.toBeUndefined();
         expect(response.body.list.length).toBeGreaterThanOrEqual(1); //pelo menos ter 1 na lista
         expect(response.body.list).toContain(email);
         return done();
    });
  });



});

