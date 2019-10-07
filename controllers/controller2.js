//organize by author/user?
const express = require('express');
const router = express.Router();
//creating routes
router.get('/', (req, res) => {
  res.send('<h1>Hello fellow gardener!</h1>');
  res.json({ hello: 'fellow gardener' });
});
//import Model2
const Model2 = require('../db/models/Model2');
router.get('/', (req, res) => {
  // use this to find all Model2 data
  Model2.find({}).then(model2 => res.json(model2));
});
//Model2 Schema route for title
router.get('/:title', (req, res) => {
  console.log('it works');
  res.send('here is the title: ' + req.params.title);
  console.log(req.params);
  //find by title
  Model2.find({ title: req.params.title }).then(model2 => res.json(model2));
  console.log(req.params.title);
});
//route listens for create requests
router.post('/', (req, res) => {
  let newModel2 = req.body;
  console.log(newModel2);
  res.json(newModel2);
});
//route listens for update
router.put('/', (req, res) => {
  let newModel2 = req.body;
  console.log(newModel2);
  res.json(newModel2);
});
//keep last
module.exports = router;
