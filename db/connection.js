//import mongoose from node_modules
let mongoose = require('mongoose');
mongoose.Promise = Promise;
// set the uri for connecting to our local mongodb
let mongoURI = 'mongodb://localhost/gardentips';

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/gardentips';
}
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log('Connection failed!', error));
//keep last
module.exports = mongoose;
