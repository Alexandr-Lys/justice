const express = require('express');
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const historyRoutes = require('./routes/history')
const walletRoutes = require('./routes/wallet')
const keys = require('./config/keys')

const app = express();

const mongoose = require('mongoose')

mongoose.connect(keys.mongoURI)
  .then(() => console.log('Success'))
  .catch((err) => console.log(err));

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api/history', historyRoutes)
app.use('/api/wallet', walletRoutes)
app.use(require('cors')())

module.exports = app;
