import React, { useEffect, useState } from 'react';
import './VerticalScrollProgressBar.css';

const VerticalScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

 
  let scrollPercent
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollPercent= (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      console.log("hello");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPercent]);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default VerticalScrollProgressBar;
