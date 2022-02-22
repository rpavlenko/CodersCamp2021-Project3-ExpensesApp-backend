const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log('Connected to database'),
);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('App is running');
});

const transactionsRouter = require('./routes/transactions');
app.use('/api/v1/transactions', transactionsRouter);

app.listen(3000, () => console.log('Server started on port 3000'));
