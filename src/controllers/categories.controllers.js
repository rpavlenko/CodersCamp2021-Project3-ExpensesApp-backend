const Categories = require('../models/Categories');
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

const getCategories = async (req, res) => {
  const userId = req.user.id;

  const categories = await Categories.find({ userID: userId });
  if (!categories) {
    res.status(404).send('Not found');
  }
  res.send(categories);
};

const getCategory = async (req, res) => {
  const category = await Categories.findById(req.params.id);
  if (!category) {
    res.status(404).send('Not found');
  }
  res.send(category);
};

const addCategory = async (req, res) => {
  try {
    const newCategory = new Categories({ ...req.body, user: req.user.id });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    sendErrorResponse(res, error);
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
    sendErrorResponse(res, error);
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
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  removeCategory,
  updateCategory,
};
