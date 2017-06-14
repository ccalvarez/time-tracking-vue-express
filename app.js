require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();

mongoose.connect(process.env.DATABASE);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + process.env.DATABASE);
  app.listen(3001, 'localhost', () => {
    console.log('Express listening on port 3001!');
  });
});

