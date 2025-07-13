import React, { useState } from 'react';
import axios from 'axios';

function ThoughtItem({ thought, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(thought.content);

  // 🗑️ Delete handler
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/api/thoughts/${thought._id}`);
      onUpdate(); // Refresh thought list after delete
    } catch (err) {
      console.error('❌ Delete failed:', err.message);
    }
  };

  // ✏️ Edit/save handler
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5050/api/thoughts/${thought._id}`, {
        content: newContent,
      });
      setIsEditing(false);
      onUpdate(); // Refresh list after edit
    } catch (err) {
      console.error('❌ Update failed:', err.message);
    }
  };

  return (
    <div className="thought">
      {isEditing ? (
        <>
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
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
