const mongoose = require('./connection');
const GardenTipsSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  tags: [Array],
  author: String,
  picture: String
});

const GardenTips = mongoose.model('gardentips', GardenTipsSchema);

module.exports = GardenTips;
