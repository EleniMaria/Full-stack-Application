//organize by plants?
const express = require('express');
const router = express.Router();
const GardenTip = require('../db/schema');
//creating routes
router.get('/', (req, res) => {
  res.send('<h1>Hello Fellow Gardener</h1>');
  // res.json({ hello: 'fellow gardener' });
});
//import Model1
const Model1 = require('../db/models/Model1');
router.get('/', (req, res) => {
  // use this to find all Model1 data
  Model1.find({}).then(model1 => res.json(model1));
});
//Model1 Schema route for title
router.get('/:title', (req, res) => {
  console.log('it works');
  res.send('here is the title: ' + req.params.title);
  console.log(req.params);
  //find by title
  Model1.find({ title: req.params.title }).then(model1 => res.json(model1));
  console.log(req.params.title);
});
//route listens for create requests
router.post('/', (req, res) => {
  let newModel1 = req.body;
  console.log(newModel1);
  res.json(newModel1);
});
//route listens for update
router.put('/', (req, res) => {
  let newModel1 = req.body;
  console.log(newModel1);
  res.json(newModel1);
});
//new routes including delete

router.get('/', (req, res) => {
  GardenTip.find({}).then(GardenTips => {
    res.json(GardenTips);
  });
});

router.get('/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTip => {
    res.json(GardenTip);
  });
});

router.post('/', (req, res) => {
  GardenTip.create(req.body).then(GardenTip => {
    GardenTip.find({}).then(GardenTips => {
      res.json(GardenTips);
    });
  });
});

router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body).then(GardenTip =>
    GardenTip.find({}).then(GardenTips => {
      res.json(GardenTips);
    })
  );
});

router.delete('/:id', (req, res) => {
  GardenTip.findOneAndRemove({ _id: req.params.id }, req.body).then(GardenTip =>
    GardenTip.find({}).then(GardenTips => {
      res.json(GardenTips);
    })
  );
});

//Keep Last
module.exports = router;
