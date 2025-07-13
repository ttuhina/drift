import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ocean from './components/Ocean';
import ThoughtItem from './components/ThoughtItem';
import './App.css';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [isReleasing, setIsReleasing] = useState(false);
  const [releasedAnimation, setReleasedAnimation] = useState(false);

  const fetchThoughts = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/thoughts');
      setThoughts(res.data);
    } catch (err) {
      console.error('Failed to fetch thoughts:', err.message);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleSubmit = async () => {
    if (!newThought.trim()) return;
    setIsReleasing(true);
    setReleasedAnimation(true);

    setTimeout(async () => {
      try {
        await axios.post('http://localhost:5050/api/thoughts', { content: newThought });
        setNewThought('');
        fetchThoughts();
      } catch (err) {
        console.error('Error releasing thought:', err.message);
      } finally {
        setIsReleasing(false);
        // Hide floating animation after it's gone
        setTimeout(() => setReleasedAnimation(false), 2000);
      }
    }, 1500);
  };

  return (
    <div className="App">
      <Ocean />

      <div className={`thought-dialog-container ${releasedAnimation ? 'float-away' : ''}`}>
        <div className={`thought-dialog ${isReleasing ? 'release' : ''}`}>
          <textarea
            placeholder="Write your thought and let it float away..."
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            disabled={isReleasing}
          />
          <button onClick={handleSubmit} disabled={isReleasing}>
            {isReleasing ? 'Sending...' : 'Release'}
          </button>
        </div>
      </div>

      {thoughts.length > 0 && (
        <div className="thought-history">
          <h2>Released Thoughts</h2>
          <div className="thought-list">
            {thoughts.map((thought) => (
              <ThoughtItem key={thought._id} thought={thought} onUpdate={fetchThoughts} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
