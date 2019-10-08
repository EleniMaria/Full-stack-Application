//starts express (top)
const express = require('express');
const app = express();
//starts methodOverride(keep above controller)
const methodOverride = require('method-override');
//starts parser (keep above controller)
const parser = require('body-parser');
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
//controllers setup(keep last)
const myItemsController = require('./controllers/myItems');
app.use(myItemsController);
//Local host(bottom)
app.listen(8080, () => console.log('We are on Port 8080'));
