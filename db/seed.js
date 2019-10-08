// seeding data
const seedData = require('./seeds.json');
// clear database and return seed data
const GardenTips = require('./schema.js');

GardenTips.deleteMany({})
  .then(() => {
    console.log('cleared and seeded data');
    return GardenTips.collection.insertMany(seedData);
  })
  .then(() => {
    process.exit();
  });
