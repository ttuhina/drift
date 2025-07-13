import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThoughtForm from './components/ThoughtForm';
import ThoughtList from './components/ThoughtList';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = async () => {
    const res = await axios.get('http://localhost:5000/api/thoughts');
    setThoughts(res.data);
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="App">
      <h1>🌊 Drift Your Thoughts</h1>
      <ThoughtForm onAdd={fetchThoughts} />
      <ThoughtList thoughts={thoughts} onUpdate={fetchThoughts} />
    </div>
  );
}

export default App;
