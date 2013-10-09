var db = require('../app/models/').sequelize;

describe("DATABASE", function(){
	it("should insert seeds", function(done){
		db.query("INSERT INTO `Etudiants` (`id`, `nom`, `prenom`, `email`, `createdAt`, `updatedAt`) VALUES (1, 'Steack', 'john', 'john.Steack@example.com', NULL, NULL),(2, 'Steack', 'steven', 'steven.Steack@example.com', NULL, NULL),(3, 'Vador', 'chang', 'chang.Vador@example.com', NULL, NULL),(4, 'Sulivan', 'chang', 'chang.Sulivan@example.com', NULL, NULL),(5, 'Sulivan', 'Henry', 'chang.Sulivan@example.com', NULL, NULL),(6, 'Vador', 'henry', 'henry.Vador@example.com', NULL, NULL),(7, 'Sulivan', 'Paul', 'jack.Sulivan@example.com', NULL, NULL),(8, 'Sulivan', 'jack', 'jack.Sulivan@example.com', NULL, NULL),(9, 'chang', 'steven', 'steven.chang@example.com', NULL, NULL),(10, 'Steack', 'chang', 'chang.Steack@example.com', NULL, NULL);").success(function(data){
			true.should.be.ok;
			done();
		}).error(function(ex){
			false.should.be.ok;
			done();
		});
	});
});