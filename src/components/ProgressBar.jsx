import React, { useState, useEffect } from 'react';
import '../styles/progressBar.scss';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = `${totalScroll / windowHeight}`;
    setScroll(scrollValue * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ height: `${scroll}%`, backgroundColor: scroll > 50 ? '#64ffda' : '#64ffda' }}></div>
    </div>

  );
};

export default ProgressBar;
