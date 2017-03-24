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

app.post('/api/newTask', (req, res)=> {
    console.log(req.body);
    task = req.body; // should contain taskContent, can have due date, editedDatatime, 
    //createdByUser, can have a project attached, can contain subTaskIDs

    task.taskDone = false;

    post_collection.save(task, (err,result)=> {
        if (err) return console.log(err);
        console.log('saved to database')
        res.send("Success");
  });
});

app.post('/api/newSubTask', (req, res) => {
    console.log(req.body);
});

app.post('/api/deleteTask', (req, res) => {

});


app.get('/api/getUserTasks', (req, res) => {

});

