const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define movie schema
var movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array,
});


const model = mongoose.model('movie', movieSchema);

// Export Mongoose model
module.exports = model
