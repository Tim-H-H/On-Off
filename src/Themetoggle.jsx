import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
