const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// CREATE
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create({ content: req.body.content });
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const thoughts = await Thought.find().sort({ createdAt: -1 });
  res.json(thoughts);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Thought.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Thought.findByIdAndDelete(req.params.id);
  res.json({ message: 'Thought deleted' });
});

module.exports = router;
