var Etudiant = require('../models').Etudiant;


var Public = module.exports = function(app){
  app.get('/' , function(req , res){
  	Etudiant.findAll().success(function(etudiants){
		  res.render('index', { title: 'Liste des étudiants' , etudiants : etudiants, count: etudiants.length});
  	});
  });

  app.get('/:id/edit' , function(req , res){
  	Etudiant.find({where:{id:req.params.id}}).success(function(etudiant){
		  res.render('etudiant', { title: 'Éditer un étudiant' , etudiant : etudiant});
  	});
  });
  app.post('/:id/edit' , function(req , res){
  	Etudiant.find({where:{id:req.params.id}}).success(function(etudiant){
  		etudiant.nom    = req.body.txtnom;
  		etudiant.prenom = req.body.txtprenom;
  		etudiant.email  = req.body.txtemail;
  		etudiant.save().success(function(){
  			res.redirect('/');
  		});
  	});
  });

  app.get('/new' , function(req , res){
      res.render('etudiant', { title: 'Nouvel étudiant' , etudiant : null});
  });
  app.post('/new' , function(req , res){
    Etudiant.find({where:{email:req.body.txtemail}}).success(function(etudiant){
      if(etudiant === null){
        Etudiant.create({
            nom    : req.body.txtnom
          , prenom : req.body.txtprenom
          , email  : req.body.txtemail
        }).success(function(){
          res.redirect('/');
        });
      }else{
        etudiant.email = '';
        res.render('etudiant', { title: 'Nouvel étudiant' , etudiant : etudiant, error: 'Email exists'});
      }
    });
  });
  app.get('/:id/delete' , function(req , res){
    Etudiant.find({where:{id:req.params.id}}).success(function(etudiant){
      etudiant.destroy().success(function(){
        res.redirect('/');
      });
    });
  });
};
