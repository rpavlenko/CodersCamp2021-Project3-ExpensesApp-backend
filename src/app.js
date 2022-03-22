const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const CategoriesRouter = require('./routes/categories.router');

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log('Connected to database'),
);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('App is running');
});

const router = require('./routes/router');
app.use('/', router);


app.listen(PORT);

module.exports = router;

