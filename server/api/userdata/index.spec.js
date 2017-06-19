'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var userdataCtrlStub = {
  index: 'userdataCtrl.index',
  show: 'userdataCtrl.show',
  create: 'userdataCtrl.create',
  upsert: 'userdataCtrl.upsert',
  patch: 'userdataCtrl.patch',
  destroy: 'userdataCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var userdataIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './userdata.controller': userdataCtrlStub
});

describe('Userdata API Router:', function() {
  it('should return an express router instance', function() {
    userdataIndex.should.equal(routerStub);
  });

  describe('GET /api/userdatas', function() {
    it('should route to userdata.controller.index', function() {
      routerStub.get
        .withArgs('/', 'userdataCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/userdatas/:id', function() {
    it('should route to userdata.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'userdataCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/userdatas', function() {
    it('should route to userdata.controller.create', function() {
      routerStub.post
        .withArgs('/', 'userdataCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/userdatas/:id', function() {
    it('should route to userdata.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'userdataCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/userdatas/:id', function() {
    it('should route to userdata.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'userdataCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/userdatas/:id', function() {
    it('should route to userdata.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'userdataCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
