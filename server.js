const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const thoughtsRoute = require('./routes/thoughts');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/thoughts', thoughtsRoute);

mongoose.connect('mongodb://127.0.0.1:27017/ventapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
