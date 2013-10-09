var sequelize = require('../app/models/').sequelize;

sequelize.query("DELETE FROM Etudiants").success(function() {
});
