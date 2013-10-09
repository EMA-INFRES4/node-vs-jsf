module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Etudiant', {
      id       : DataTypes.INTEGER
    , nom    : DataTypes.STRING
    , prenom    : DataTypes.STRING
    , email    : DataTypes.STRING
  }, {
    instanceMethods: {
    }
  });
};
