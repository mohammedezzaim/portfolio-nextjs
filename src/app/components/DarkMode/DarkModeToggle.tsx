'use client';
import { useEffect, useState } from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier le mode sauvegardé dans localStorage
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode ? savedMode === 'true' : prefersDark;
    setIsDarkMode(shouldBeDark);
    
    // Appliquer le mode immédiatement
    if (shouldBeDark) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('darkMode', newMode.toString());
    
    // Appliquer/retirer la classe dark-mode
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <button
      className={`${styles.darkModeToggle} ${isDarkMode ? styles.dark : styles.light}`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          <i className={`bi ${isDarkMode ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;