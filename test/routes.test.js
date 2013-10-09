var zombie = require('./helpers/zombieHelper');

describe("Routes", function(){
  it("should be served at /", function(done){
    zombie.visit('/', function(err, browser, status){
      if(err) done(err);
      status.should.equal(200);
      done();
    });
  });

  it("should be served at /1/edit", function(done){
    zombie.visit('/1/edit', function(err, browser, status){
      if(err) done(err);
      status.should.equal(200);
      done();
    });
  });

  it("should be served at /new", function(done){
    zombie.visit('/1/edit', function(err, browser, status){
      if(err) done(err);
      status.should.equal(200);
      done();
    });
  });
  it("should be served at /8/delete", function(done){
    zombie.visit('/8/delete', function(err, browser, status){
      if(err) done(err);
      status.should.equal(200);
      done();
    });
  });
});
