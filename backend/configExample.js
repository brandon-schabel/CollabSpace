//rename file to config.js and setup accordingly, the URL  will be available on mlab
var config = {};

config.dburl = "mongodb://<exampleuser>:<examplepassword>@ds100000.mlab.com:10000/dbexample";
config.sessionStore = {
  host:'mlab.com',
  port: '10000',
  db: 'dbexample',
  url: 'mongodb://<exampleuser>:<examplepassword>@ds100000.mlab.com:10000/dbexample',
}

module.exports = config;