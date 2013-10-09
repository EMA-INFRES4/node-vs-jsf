module.exports = {
    up: function (migration, DataTypes , done) {
        migration.createTable(
            'Etudiants', {
            id  : {
              type : DataTypes.INTEGER   ,
              autoIncrement : true ,
              primaryKey    : true
            } ,
            nom       : DataTypes.STRING ,
            prenom    : DataTypes.STRING ,
            email     : DataTypes.STRING ,
            createdAt : DataTypes.DATE   ,
            updatedAt : DataTypes.DATE
        }, {
            engine: 'InnoDB',
            charset: 'latin1'
        });
        done();
    },
    down: function (migration, DataTypes, done) {
      migration.dropTable('Etudiants');
      done();
    }
}