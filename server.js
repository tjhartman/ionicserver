const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./dbcontroller.js');
const cors = require('cors');
// const config = require('./config.js')

var port = 3000;


massive(process.env.database).then ((db) => {
 app.set('db', db);
});

//Middleware----------------------------------

app.use(bodyParser.json());
app.use(cors());

//Endpoints----------------------------------

app.get('/api/getQuestionData', controller.getQuestionData)


app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port);
  });

