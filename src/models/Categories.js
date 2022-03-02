const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  limit: {
    type: Number
  }
});

module.exports = mongoose.model('Categories', CategoriesSchema);
