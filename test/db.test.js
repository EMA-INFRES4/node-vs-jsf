var db = require('../app/models/').sequelize;

describe("DATABASE", function(){
	it("should be connected", function(done){
		db.should.be.ok;
		done();
	});
});