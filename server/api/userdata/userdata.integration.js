'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newUserdata;

describe('Userdata API:', function() {
  describe('GET /api/userdatas', function() {
    var userdatas;

    beforeEach(function(done) {
      request(app)
        .get('/api/userdatas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          userdatas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      userdatas.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/userdatas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/userdatas')
        .send({
          name: 'John',
          age: 15,
          country: 'China',
          sex: 'Male'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newUserdata = res.body;
          done();
        });
    });

    it('should respond with the newly created userdata', function() {
      newUserdata.name.should.equal('John');
      newUserdata.age.should.equal(15);
      newUserdata.country.should.equal('China');
      newUserdata.sex.should.equal('Male');
    });
  });

  describe('GET /api/userdatas/:id', function() {
    var userdata;

    beforeEach(function(done) {
      request(app)
        .get(`/api/userdatas/${newUserdata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          userdata = res.body;
          done();
        });
    });

    afterEach(function() {
      userdata = {};
    });

    it('should respond with the requested userdata', function() {
      userdata.name.should.equal('John');
      userdata.age.should.equal(15);
      userdata.country.should.equal('China');
      userdata.sex.should.equal('Male');
    });
  });

  describe('PUT /api/userdatas/:id', function() {
    var updatedUserdata;

    beforeEach(function(done) {
      request(app)
        .put(`/api/userdatas/${newUserdata._id}`)
        .send({
          name: 'JohnUpdated',
          age: 33,
          sex: 'Female',
          country: 'Russia'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedUserdata = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUserdata = {};
    });

    it('should respond with the updated userdata', function() {
      updatedUserdata.name.should.equal('JohnUpdated');
      updatedUserdata.age.should.equal(33);
      updatedUserdata.country.should.equal('Russia');
      updatedUserdata.sex.should.equal('Female');
    });

    it('should respond with the updated userdata on a subsequent GET', function(done) {
      request(app)
        .get(`/api/userdatas/${newUserdata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let userdata = res.body;

          userdata.name.should.equal('JohnUpdated');
          userdata.age.should.equal(33);
          userdata.country.should.equal('Russia');
          userdata.sex.should.equal('Female');

          done();
        });
    });
  });

  describe('PATCH /api/userdatas/:id', function() {
    var patchedUserdata;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/userdatas/${newUserdata._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'John3' },
          { op: 'replace', path: '/age', value: 67 }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedUserdata = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedUserdata = {};
    });

    it('should respond with the patched userdata', function() {
      patchedUserdata.name.should.equal('John3');
      patchedUserdata.age.should.equal(67);
    });
  });

  describe('DELETE /api/userdatas/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/userdatas/${newUserdata._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when userdata does not exist', function(done) {
      request(app)
        .delete(`/api/userdatas/${newUserdata._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
