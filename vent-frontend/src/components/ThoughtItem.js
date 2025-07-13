import React, { useState } from 'react';
import axios from 'axios';
import './ThoughtItem.css';

function ThoughtItem({ thought, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(thought.content);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5050/api/thoughts/${thought._id}`);
    onUpdate();
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5050/api/thoughts/${thought._id}`, { content });
    setIsEditing(false);
    onUpdate();
  };

  return (
    <div className="thought-card">
      {isEditing ? (
        <>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          <button onClick={handleUpdate}>💾 Save</button>
        </>
      ) : (
        <>
          <p>{thought.content}</p>
          <div className="btns">
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={handleDelete}>🗑️ Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ThoughtItem;
