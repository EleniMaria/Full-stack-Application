//starts express 
const express = require('express');
const app = express();
//starts methodOverride(keep above controller)
const methodOverride = require("method-override");
//starts parser (keep above controller)
const parser = require('body-parser');
//setup handlebars
app.set('view engine','hbs');
//setup parser(keep above controller)
app.use(parser.urlencoded({ extended : true }));
app.use(parser.json());
//method Override setup(keep above controller)
app.use(methodOverride("_method"));
//setup cors
const cors = require('cors');
app.use(cors());
//controllers setup
const controller1Controller = require('./controllers/controller1');
app.use(controller1Controller);
//Local host
app.listen(8080, () => console.log('We are on Port 8080'));
