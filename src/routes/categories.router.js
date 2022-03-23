const router = require('express').Router();
const {
  getCategories,
  getCategory,
  addCategory,
  removeCategory,
  updateCategory,
} = require('../controllers/categories.controllers');

// GET
router.get('/', getCategories);
router.get('/:id', getCategory);

// // POST
router.post('/', addCategory);

// // DELETE
router.delete('/:id', removeCategory);

// // PATCH
router.patch('/:id', updateCategory);

module.exports = router;
