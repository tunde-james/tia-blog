'use client';

import React from "react";

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState('dark');

  function toggleMode() {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
