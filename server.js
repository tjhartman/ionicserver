const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./dbcontroller.js');
const config = require('./config.js')

var port = 3000;


massive(process.env.connectionString).then ((db) => {
 app.set('db', db);
});

//Middleware----------------------------------

app.use(bodyParser.json());

//Endpoints----------------------------------

app.get('/api/getQuestionData', controller.getQuestionData)


app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port, app.settings.env);
  });

