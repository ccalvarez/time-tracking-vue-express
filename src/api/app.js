const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();

const connString = 'mongodb://localhost:27017/timetracking';

mongoose.connect(connString);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + connString);
  app.listen(3001, 'localhost', () => {
    console.log('Express listening on port 3001!');
  });
});

