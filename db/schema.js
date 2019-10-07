const mongoose = require('./connection')
const GardenTipsSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  tags: [String],
  author: String
})

const GardenTips = mongoose.model('GardenTip', GardenTipsSchema)

module.exports = GardenTips