//router setup
const express = require('express');
const router = express.Router();
//model schema
const GardenTip = require('../db/schema');
//new routes including delete

//get data index route
router.get('/', (req, res) => {
  GardenTip.find({}).then(GardenTips => {
    res.render('index', { GardenTips });
  });
});
//create new
router.get('/new', (req, res) => {
  res.render('new');
});
//Find by ID show item opens edit
router.get('/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('show', { GardenTips });
  });
});
//post handler to create a new item
router.post('/', (req, res) => {
  GardenTip.create(req.body).then(GardenTips => {
    res.redirect('/');
  });
});
//post handler update edit
router.post('/', (req, res) => {
  GardenTip.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
  );
});
//edit
router.get('/edit/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('edit', { GardenTips });
  });
});
//update
router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(GardenTips => {
    res.redirect('/');
  });
});
// //delete one item
router.delete('/:id', (req, res) => {
  GardenTip.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/');
  });
});

//Keep Last
module.exports = router;
