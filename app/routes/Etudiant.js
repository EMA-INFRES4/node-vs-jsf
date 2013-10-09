var Etudiant = require('../models').Etudiant;


var Public = module.exports = function(app){
  app.get('/' , function(req , res){
  	Etudiant.findAll().success(function(etudiants){
		res.render('index.hjs', { title: 'Etudiants' , etudiants : etudiants});
  	});
  });
};