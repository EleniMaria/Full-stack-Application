//starts express (top)
const express = require('express');
const app = express();
//starts methodOverride(keep above controller)
const methodOverride = require('method-override');
//starts parser (keep above controller)
const parser = require('body-parser');
//find and update (creates new not update)
const mongoose = require('mongoose');
mongoose.set('useFindAndUpdate');
//setup handlebars(keep above controller)
// const hbs = require('hbs');
app.set('view engine', 'hbs');
//setup parser(keep above controller)
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//method Override setup(keep above controller)
app.use(methodOverride('_method'));
//setup cors(keep above controller)
const cors = require('cors');
app.use(cors());
//CSS
app.use('/assets', express.static( __dirname + '/assets'));
//controllers setup(keep last)
const myItemsController = require('./controllers/myItems');
app.use("/",myItemsController);
//landing page
app.get("/", (req, res) => {
    res.redirect('/');
});

//Local host(bottom)
// app.listen(8080, () => console.log('We are on Port 8080'));

//heroku
app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});