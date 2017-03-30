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

app.post('/api/createTask', (req, res)=> {
    console.log(req.body);
    var task = req.body; // should contain taskContent, can have due date, editedDatatime, 
    //createdByUser, can have a project attached, can contain subTaskIDs

    task.taskDone = false;

    post_collection.save(task, (err,result)=> {
        if (err) return console.log(err);
        console.log('saved to database')
        res.send("Success");
  });
});

app.post('/api/createSubTask', (req, res) => {
    console.log(req.body);
});

app.post('/api/deleteTask', (req, res) => {
    deleteId = req.body.deleteId;
});

app.post('/deletePost/:id', (req, res) => {
  //convert submit string id to ObjectID
  deleteId = new MongoClient.ObjectID(req.params.id);
  console.log(deleteId);


  post_collection.deleteOne({'_id':deleteId}, (err, result) => {
    console.log(result);
    assert.equal(null, err);
    //assert.equal(1, result.deletedCount);
    //assert.equal is causing errors for me
  })
})


app.get('/api/getUserTasks', (req, res) => {

});

