
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRoute = require('./routes/')

app.listen(PORT, () => console.log('Server started on port ' + PORT));