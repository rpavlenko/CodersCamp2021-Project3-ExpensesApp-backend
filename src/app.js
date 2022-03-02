const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log('Connected to database'),
);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('App is running');
});

const transactionsRouter = require('./routes/transactions.router');
app.use('/api/v1/transactions', transactionsRouter);

app.listen(PORT, () => console.log('Server started on port ' + PORT));
