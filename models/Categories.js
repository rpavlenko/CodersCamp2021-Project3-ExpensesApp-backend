const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 40,
  },
  limit: {
    type: Number,
    required: true,
    lowercase: true,
    min: 0,
  },
});

const Categories = mongoose('Categories', CategoriesSchema);
module.export = Categories;
