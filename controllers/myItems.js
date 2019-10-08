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
//Find by ID show item
router.get('/:id', (req, res) => {
  GardenTip.findById(req.params.id).then(GardenTips => {
    res.render('show', { GardenTips });
  });
});
//create new
router.get('/new', (req, res) => {
  GardenTip.insert(req.body).then(GardenTips => {
    GardenTip.find({}).then(GardenTips => {
      res.render('new', { GardenTips });
    });
  });
});
//post handler to create a new item
// router.post('/', (req, res) => {
//   GardenTip.create(req.body).then(GardenTips => {
//     res.redirect('/');
//   });
// });
//edit
router.get('/edit/:id', (req, res) => {
  GardenTip.findOne({ _id: req.params.id }).then(GardenTips => {
    res.render('edit', { GardenTips });
  });
});
// //update
router.put('/:id', (req, res) => {
  GardenTip.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(GardenTips => {
    res.redirect('/', { GardenTips });
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
