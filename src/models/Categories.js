const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
  },
});

module.exports = mongoose.model('Categories', CategoriesSchema);
