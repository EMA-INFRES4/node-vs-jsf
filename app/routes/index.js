var router = module.exports = function(app){
  var routes = [
    'Etudiant'
  ];
  routes.forEach(function(route) {
    module.exports[route] = require('./' + route)(app);
  });
}
