const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./dbcontroller.js');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
// const config = require('./config.js')

var port = 3000;


massive(process.env.database).then ((db) => {
 app.set('db', db);
});

//Middleware----------------------------------

app.use(bodyParser.json());
app.use(cors());


/////////////
// DATABASE //
/////////////

passport.use(new Auth0Strategy({
   domain:       config.auth0.domain,
   clientID:     config.auth0.clientID,
   clientSecret: config.auth0.clientSecret,
   callbackURL:  '/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    var db = app.get('db') //Find user in database
    db.getUserByAuthId([profile.id], function(err, user) {
      user = user[0];
      if (!user) { //if there isn't one, we'll create one!
        console.log('CREATING USER');
        db.createUserByAuth([profile.displayName, profile.id], function(err, user) {
          console.log('USER CREATED', userA);
          return done(err, user[0]); // GOES TO SERIALIZE USER
        })
      } else { //when we find the user, return it
        console.log('FOUND USER', user);
        return done(err, user);
      }
    })
  }
));


//Endpoints----------------------------------

app.get('/api/getQuestionData', controller.getQuestionData)

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
    res.status(200).send(req.user);
})

app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port);
  });

