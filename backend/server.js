const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb'),
    assert = require('assert');
const cors = require('cors');
const config= require('./config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true})); 



//connect to mongodb if errors raise errors, if not start the app 
MongoClient.connect(config.dburl, (err, database) => {
  if (err) return console.log(err);

  db = database;
  
  task_collection = db.collection('task_collection');
  subtask_collection = db.collection('subtask_collection');
  user_collection = db.collection('user_collection');

  app.listen(3000, () => {
      console.log('listening on 3000');
  });
});


app.get('/', (req, res) => {
  res.send('good job');
});