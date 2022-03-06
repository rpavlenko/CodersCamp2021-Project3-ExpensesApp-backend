const Categories = require('../models/Categories');

const getCategories = async (req, res) => {
  console.log('get categories');
  const categories = await Categories.find();
  if (!categories) {
    res.status(404).send('Not found');
  }
  res.send(categories);
};

const getCategory = async (req, res) => {
  console.log('get category');
  const category = await Categories.findById(req.params.id);
  if (!category) {
    res.status(404).send('Not found');
  }
  res.send(category);
};

const addCategory = async (req, res) => {
  try {
    const newCategory = new Categories(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const removeCategory = async (req, res) => {
  try {
    const removedCategory = await Categories.findByIdAndRemove(req.params.id);
    if (!removedCategory) {
      return res.status(400).end();
    }
    return res.status(200).json({ message: 'category deleted' });
  } catch (error) {
    res.status(400).end();
    res.json({ message: error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).end();
    res.json({ message: error });
  }
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  removeCategory,
  updateCategory,
};
