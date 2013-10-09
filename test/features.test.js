var zombie = require('./helpers/zombieHelper');

describe("Features", function(){
  it("should create a user", function(done){
    zombie.visit('/', function(err, browser, status){
      if(err) done(err);
      var nbFirst = parseInt(browser.document.getElementById('count-students').innerHTML);
      zombie.visit('/new', function(err, browser, status){
        if(err) done(err);
        browser
          .fill('txtprenom' , 'nouveau-prenom')
          .fill('txtnom'    , 'nouveau-nom')
          .fill('txtemail'  , 'nouveau-email')
          .pressButton('Enregistrer' , function(){
            var nbLast = parseInt(browser.document.getElementById('count-students').innerHTML);
            nbLast.should.equal(nbFirst + 1);
              done();
          });
      });
    });
  });
  it("should not create a user if email exists", function(done){
    zombie.visit('/', function(err, browser, status){
      if(err) done(err);
      var nbFirst = parseInt(browser.document.getElementById('count-students').innerHTML);
      zombie.visit('/new', function(err, browser, status){
        if(err) done(err);
        browser
          .fill('txtprenom' , 'nouveau-prenom')
          .fill('txtnom'    , 'nouveau-nom')
          .fill('txtemail'  , 'nouveau-email')
          .pressButton('Enregistrer' , function(){
            browser.body.innerHTML.indexOf('Email exists').should.not.equal(-1);
            done();
          });
      });
    });
  });

  it("should edit a user", function(done){
    zombie.visit('/1/edit', function(err, browser, status){
      if(err) done(err);
      browser
        .fill('txtprenom' , 'edit-prenom')
        .fill('txtnom'    , 'edit-nom')
        .fill('txtemail'  , 'edit-email')
        .pressButton('Enregistrer' , function(){
          browser.document.getElementById('etudiant-1').innerHTML
            .indexOf('edit-prenom')
            .should.not.equal(-1);
            done();
          });
    });
  });


});
