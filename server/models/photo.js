const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  src: String,
  name: String,
  tag: String,
  userId: String,
  userName: String,
  likes: Array,
}, {
  timestamps: true
})

let Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;