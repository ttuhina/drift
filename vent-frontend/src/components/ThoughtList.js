import React from 'react';
import ThoughtItem from './ThoughtItem';

function ThoughtList({ thoughts, onUpdate }) {
  return (
    <div>
      {thoughts.map((t) => (
        <ThoughtItem key={t._id} thought={t} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default ThoughtList;
