"use client"

import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk mengubah tema
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button 
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-gray-200 rounded"
    >
      {isDarkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

export default DarkModeToggle;