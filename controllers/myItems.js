//router setup
const express = require('express');
const router = express.Router();
//model schema
const GardenTip = require('../db/schema');
//new routes including delete

//get data index route
router.get('/garden', (req, res) => {
  GardenTip.find({}).then(GardenTips => {
    res.render('index', { GardenTips });
  });
});
//create new
router.get('/new', (req, res) => {
  console.log(req.params);
  res.render('new', {});
});

//post handler to create a new item
router.post('/update', (req, res) => {
  console.log(req.params);
  GardenTip.create(req.body).then(GardenTips => {
    res.redirect('index', { GardenTips });
  });
});
//update
router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(GardenTips => {
    console.log(req.params);
    res.redirect('/', { GardenTips });
  });
});
//Find by ID show item opens edit
router.get('/:id', (req, res) => {
  console.log(req.params);
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('show', { GardenTips });
  });
});


// //delete one item
// router.delete('/:id', (req, res) => {
//   GardenTip.findOneAndRemove({ _id: req.params.id }).then(() => {
//     res.redirect('/');
//   });
// });

//Keep Last
module.exports = router;
