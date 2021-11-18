import app from '../../src/app';
import supertest from 'supertest';

test('GET /api/v1/password', (done) => {
  supertest(app).get('/api/v1/password/AbTp9!fok')
    .expect(200)
    .then((response) => {
      expect(response.text).toBe('true');
      done();
    })
    .catch(err => done(err));
});

test('POST /api/v1/password', (done) => {
  supertest(app).post('/api/v1/password')
    .send({ password: 'AbTp9!fok' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toBe(true);
      done();
    })
    .catch(err => done(err));
});
