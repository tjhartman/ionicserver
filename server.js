const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const dbcontroller = require('./dbcontroller.js');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
const session = require ('express-session')
const config = require('./config.js')

var port = 3000;


massive(config.database).then ((db) => {
 app.set('db', db);
});
// massive(process.env.database).then ((db) => {
//  app.set('db', db);
// });

//Middleware----------------------------------

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: config.password
}))
app.use(passport.initialize());
app.use(passport.session());


passport.use(new Auth0Strategy({
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL: '/auth/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile)
    var db = app.get('db')
    //Find user in database
    db.getUserByAuthId(profile.id).then(function (user) {
      user = user[0];
      if (!user) { //if there isn't one, we'll create one!
        console.log('CREATING USER');
        db.createUserByAuth([profile.displayName, profile.id]).then(function (user) {
          console.log('USER CREATED', user);
          return done(null, user[0]); // GOES TO SERIALIZE USER
        })
      } else { //when we find the user, return it
        console.log('FOUND USER', user);
        return done(null, user);
      }
    })
  }
));
//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function (userA, done) {
  console.log('serializing', userA);
  var userB = userA;
  //Things you might do here :
  //Serialize just the id, get other information to add to session, 
  done(null, userB); //PUTS 'USER' ON THE SESSION
});
//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function (userB, done) {
var userC = userB;
console.log(userC)
  //Things you might do here :
  // Query the database with the user id, get other information to put on req.user
  done(null, userC); //PUTS 'USER' ON REQ.USER
});
app.get('/auth', passport.authenticate('auth0'));
//**************************//
//To force specific provider://
//**************************//
// app.get('/login/google',
//   passport.authenticate('auth0', {connection: 'google-oauth2'}), function (req, res) {
//   res.redirect("/");
// });
app.get('/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:8100/'
  }),
  function (req, res) {
    res.status(200).send(req.user);
  })
app.get('/auth/me', function (req, res) {
  console.log(req.user)
  if (!req.user) return res.sendStatus(404);
  //THIS IS WHATEVER VALUE WE GOT FROM userC variable above.
  res.status(200).send(req.user);
})
app.get('/auth/logout', function (req, res) {
  req.logout();
  res.redirect('/');
})


//Endpoints----------------------------------

app.get('/api/getQuestionData', dbcontroller.getQuestionData)

app.post('/postResults', dbcontroller.postResults)

app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port);
  });

