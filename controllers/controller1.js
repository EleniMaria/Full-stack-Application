//organize by plants?
const express = require('express');
const router = express.Router();
const GardenTip = require('../db/schema');
//new routes including delete
//get data index route
router.get('/', (req, res) => {
  GardenTip.find({}).then(gardenTips => {
    res.render('index', { gardenTips });
  });
});
//Find by ID show item
router.get('/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(gardenTips => {
    res.render('show', { gardenTips });
  });
});
//create new
router.get('/new', (req, res) => {
  GardenTip.insert(req.body).then(gardenTips => {
    GardenTip.find({}).then(gardenTips => {
      res.render('new', { gardenTips });
    });
  });
});
//post handler to create a new item
router.post('/', (req, res) => {
  GardenTip.create(req.body).then(gardenTips => {
    res.redirect('/');
  });
});
//edit
router.get('/edit/:id', (req, res) => {
  GardenTip.findOne({ _id: req.params.id }).then(gardenTips => {
    res.render('edit', { gardenTips });
  });
});
// //update
router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(gardenTips => {
    res.redirect('/', { gardenTips });
  });
});
//delete one item

router.delete('/:id', (req, res) => {
  GardenTip.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/')
    })
})

//Keep Last
module.exports = router;
