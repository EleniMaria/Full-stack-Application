//require mongoose tool
const mongoose = require('../../db/connection');
//call out Schema Author/user
const Model2Schema = new mongoose.Schema({
  author: String,
  email: String,
  password: String,
});
//naming the model
const Model2 = mongoose.model('Model2', Model2Schema);
//export new model
module.exports = Model2;
