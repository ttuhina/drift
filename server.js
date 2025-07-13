const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Thought = require('./models/Thought'); // adjust path if needed

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// ✅ MAIN THOUGHT ROUTES
app.get('/api/thoughts', async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

app.post('/api/thoughts', async (req, res) => {
  const newThought = new Thought({ content: req.body.content });
  await newThought.save();
  res.status(201).json(newThought);
});

// DELETE a thought by ID
app.delete('/api/thoughts/:id', async (req, res) => {
  try {
    await Thought.findByIdAndDelete(req.params.id);
    res.status(204).send(); // 204 = No Content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE (edit) a thought by ID
app.put('/api/thoughts/:id', async (req, res) => {
  try {
    const updated = await Thought.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ CONNECT MONGODB AND START SERVER
mongoose.connect('mongodb://127.0.0.1:27017/ventapp')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
