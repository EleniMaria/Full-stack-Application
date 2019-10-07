//require mongoose tool
const mongoose = require('../connection');
//call out Schema Plants
const Model1Schema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  tags: Array,
  author: String
});
//naming the model
const Model1 = mongoose.model('Model1', Model1Schema);
//export new model
module.export = Model1;
