import React, { useState } from 'react';
import axios from 'axios';

function ThoughtItem({ thought, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(thought.content);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/thoughts/${thought._id}`);
    onUpdate();
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/thoughts/${thought._id}`, {
      content: newContent,
    });
    setIsEditing(false);
    onUpdate();
  };

  return (
    <div className="thought">
      {isEditing ? (
        <>
          <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>{thought.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default ThoughtItem;
