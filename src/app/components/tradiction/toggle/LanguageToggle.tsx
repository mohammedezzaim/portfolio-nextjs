'use client';
import { useEffect, useState } from 'react';
import { Language, useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './LanguageToggle.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦', short: 'AR' },
  ] as const;

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);

    if (langCode === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl-mode');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl-mode');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest(`.${styles.languageToggle}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={styles.languageToggle}>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('common.changeLanguage')}
        title={t('common.changeLanguage')}
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.langCode}>{currentLanguage.short}</span>
        <i className={`bi bi-chevron-down ${styles.chevron} ${isOpen ? styles.rotate : ''}`}></i>
      </button>

      {isOpen && (
        <div className={`${styles.dropdown} ${language === 'ar' ? styles.rtl : ''}`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.languageOption} ${language === lang.code ? styles.selected : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.langName}>{lang.name}</span>
              {language === lang.code && <i className="bi bi-check-lg"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;