const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Thought', thoughtSchema);
