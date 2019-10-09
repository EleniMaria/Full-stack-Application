//router setup
const express = require('express');
const router = express.Router();
//model schema
const GardenTip = require('../db/schema');
//new routes including delete

//get data index.hbs route
router.get('/', (req, res) => {
  GardenTip.find({}).then(GardenTips => {
    res.render('index', { GardenTips });
  });
});
//create new.hbs 
router.get('/new', (req, res) => {
  res.render('new');
});
//post handler to create a new item and return to index.hs
router.post('/', (req, res) => {
  GardenTip.create(req.body).then(GardenTips => {
    res.redirect('/');
  });
});
//Find GardenTip by ID show.hbs
router.get('/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('show', { GardenTips });
  });
});

//edit.hbs
router.get('/edit/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('edit', { GardenTips });
  });
});
//post handler update edit
router.post('/', (req, res) => {
  GardenTip.findOneAndUpdate(req.body).then(GardenTips => {
    res.redirect('/');
  });
});

//update
router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    GardenTips => {
      res.redirect('/');
    }
  );
});

// //delete one item
router.delete('/:id', (req, res) => {
  GardenTip.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/');
  });
});

//Keep Last
module.exports = router;
