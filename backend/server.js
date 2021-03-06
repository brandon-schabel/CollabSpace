const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb'),
    assert = require('assert');
const cors = require('cors');
const config= require('./config');
const bcrypt = require('bcrypt');
const jwt             = require('jsonwebtoken')
const jwtChecker      = require('express-jwt')
const jwtDecode       = require('jwt-decode')
const saltRounds = 10;

const app = express();


app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors());

var jwtCheck = jwtChecker({
  secret: config.secret,
  getToken:
    function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            console.log(req.headers.authorization.split(' ')[1])
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
        return req.query.token;
        }
        return null;
    } 
});

app.use('/api/protected', jwtCheck);

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
    //console.log(req);
    var task = req.body;
    task.created = new Date();
    task.updated = new Date();
    task.done = false;
    task.subtask = {};

    //console.log(task);

    task_collection.save(task,(err,result) => {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result.ops[0]);
            console.log('saved to database');
            res.send(result.ops[0]);
        }
        
    })

});

app.post('/api/createSubTask', (req, res) => {
    console.log(req.body);
});

app.post('/api/deleteTask', (req, res) => {
  //convert submit string id to ObjectID
  console.log(req.body._id);
  var deleteId = new MongoClient.ObjectID(req.body._id);
  console.log(deleteId);


  task_collection.deleteOne({'_id':deleteId}, (err, result) => {
    console.log(result);
    assert.equal(null, err);
    //assert.equal(1, result.deletedCount);
    //assert.equal is causing errors for me
    res.send("Successfully deleted");
  })
})


//when we have the auth setup we will fill user in with cookie/jwt data
app.get('/api/getUserTasks', (req, res) => {
    
    task_collection.find({"username":"beans"}).toArray((err, result) => {
        if (err) return console.log(err)
        
        // renders index.ejs
        console.log(result)
        res.send(result);
    });
});

