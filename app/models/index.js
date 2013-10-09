var Sequelize = require('sequelize');
var dbconfig  = require('../../config/config.json');

console.log('ICICICICICIC');
var node_env = process.env.NODE_ENV || 'development';

// initialize database connection
var sequelize = new Sequelize(
    dbconfig[node_env].database
  , dbconfig[node_env].username
  , dbconfig[node_env].password
  , {
    logging: node_env === 'development'
  });
// load models
var models = [
  'Etudiant'
] ;
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  //m.Repository.belongsTo(m.User, {as: 'Repositories' ,foreignKey: 'UserId'});
  //m.User.hasMany(m.Repository);
  //m.Branche.belongsTo(m.Repository, {as: 'Branches' , foreignKey: 'RepositoryId'});
  //m.Repository.hasMany(m.Branche);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
