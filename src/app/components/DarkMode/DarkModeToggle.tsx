'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './DarkModeToggle.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DarkModeToggle = () => {
  const { t, language } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check saved mode in localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = savedMode ? savedMode === 'true' : prefersDark;
    setIsDarkMode(shouldBeDark);

    // Apply mode immediately
    if (shouldBeDark) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Save to localStorage
    localStorage.setItem('darkMode', newMode.toString());

    // Apply/remove dark-mode class
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <button
      className={`${styles.darkModeToggle} ${isDarkMode ? styles.dark : styles.light} ${
        language === 'ar' ? styles.rtl : ''
      }`}
      onClick={toggleDarkMode}
      aria-label={t(isDarkMode ? 'common.lightMode' : 'common.darkMode')}
      title={t(isDarkMode ? 'common.lightMode' : 'common.darkMode')}
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