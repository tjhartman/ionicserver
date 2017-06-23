const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./dbcontroller.js');
const config = require('./config.js')

var port = 3000;


massive(config.database).then ((db) => {
 app.set('db', db);
});

//Middleware----------------------------------

app.use(bodyParser.json());

//Endpoints----------------------------------

app.get('/api/getQuestionData', controller.getQuestionData)


app.listen(port, () => {
    console.log('Working' + port)
});