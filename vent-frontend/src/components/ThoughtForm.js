import React, { useState } from 'react';
import axios from 'axios';

function ThoughtForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/thoughts', { content });
    setContent('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        required
      />
      <button type="submit">Release ✨</button>
    </form>
  );
}

export default ThoughtForm;
