const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const url = `mongodb://localhost:27017/instaclone`;
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (!err) console.log('connected to database');
  else throw new Error(err);
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('home for instaclone');
});

app.use('/photo', require('./routes/photo.js'));

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
