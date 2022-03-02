const express = require('express');
const router = express.Router();

// GET
router.get('/categories', (req, res) => {
  res.send('get categories');
});

// POST
router.post('/categories', (req, res) => {
  res.send('post categories');
});

// GET
router.get('/categories/:id', (req, res) => {
  res.send('get cat id');
});

// DELETE
router.delete('/categories/:id', (req, res) => {
  res.send('delete cat id');
});

// PATCH
router.patch('/categories/:id', (req, res) => {
  res.send('update cat id');
});

module.exports = router;
