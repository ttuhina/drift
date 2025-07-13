import React from 'react';
import './Ocean.css';

function Ocean() {
  return (
    <div className="ocean-scene">
      {/* Night Sky */}
      <div className="night-sky">
        <div className="stars"></div>
        <div className="moon"></div>
      </div>
      
      {/* Ocean Container */}
      <div className="ocean-container">
        {/* Enhanced SVG wave paths with more realistic curves */}
        <svg className="wave-svg wave-back-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0a4d7a" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg className="wave-svg wave-back-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0f5a8a" fillOpacity="0.6" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg className="wave-svg wave-back-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1467a0" fillOpacity="0.8" d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,240C672,245,768,203,864,192C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg className="wave-svg wave-front" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1e7bb8" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,181.3C672,192,768,224,864,234.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Simple foam dots */}
        <div className="foam-dots"></div>
        
        {/* Wave crashes */}
        <div className="wave-crash crash-1"></div>
        <div className="wave-crash crash-2"></div>
        <div className="wave-crash crash-3"></div>
      </div>
    </div>
  );
}

export default Ocean;