'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../server/server');
const DB = require('./fixtures/DB-fixture');

test('Successfully signups user', (t) => {
  request(app)
    .post('/user/signup')
    .send({
      name: 'Michael',
      email: 'test@xyz.com',
      password: 'fluffyponies96'
    })
    .expect(200)
    .end( (err, res) => {
      t.same(res.status, 200, 'correct status code was sent');
      t.end();
    });
});

test('Succesfully creates an event', (t) => {
  request(app)
    .post('/mlaythe/event')
    .send({
      title: 'Christmas Party!',
      location: 'Mom\'s house',
      time: '8:00pst',
      comments: 'bring love to everything you do',
      priceMin: 10,
      priceMax: 25,
      creator: 'test@xyz.com'
    })
    .expect(200)
    .end( (err, res) => {
      t.ok(res.body.eventID, 'eventID should exist');
      t.end();
    });
});

//TODO test if user receives events when he/she logins
test('Successfully logins user and returns all events associated with that user', (t) => {
  request(app)
    .post('/user/auth')
    .send({
      email: 'test@xyz.com',
      password: 'fluffyponies96'
    })
    .expect(200)
    .end( (err, res) => {
      t.same(res.status, 200, 'correct status code was sent');
      t.end();
    });
});