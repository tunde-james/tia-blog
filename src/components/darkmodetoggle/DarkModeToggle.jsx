'use client';

import React from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './darkmodetoggle.module.css';

function DarkModeToggle() {
  const { mode, toggleMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
}

export default DarkModeToggle;
