// seeding data
const seedData = require('./seeds.json')
//model require
const Model1 = require('./models/Model1')
const Model2 = require('./models/Model2')
// clear database and return seed data
Model1.remove({})
  .then(() => {
    console.log('cleared and seeded Model1 data');
    return Model1.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
Model2.deleteMany({})
  .then(() => {
    console.log('cleared and seeded Model2 data');
    return Model1.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
//call schema
const GardenTip = require('./schema.js')

Garden.remove({}).then(() => {
  return GardenTip.collection.insert(seedData)
}).then(() => {
  process.exit()
})