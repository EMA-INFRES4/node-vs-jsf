var zombie = require('./helpers/zombieHelper');

describe("Routes", function(){
  it("should be served at /", function(done){
    zombie.visit('/', function(err, browser, status){
      if(err) done(err);
      status.should.equal(200);
      done();
    });
  });

});
