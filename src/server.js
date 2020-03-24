const express = require('express');
const mongoose = require('mongoose');
const route = require('./application/routes/index');
const port = 3000;
const app = express();

app.use('/', route);
app.use(express.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/users')
  .then(() => {
    app.listen(port, () => {
      console.log('Runnin in port: ' + port + ' Connection with mongo is true');
    })
  })
  .catch(err => console.log('Error ', err))