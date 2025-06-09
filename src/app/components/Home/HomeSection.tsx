'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './HomeSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';

const HomeSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (typedRef.current) {
      const roles = [
        t('home.roles.java'),
        t('home.roles.spring'),
        t('home.roles.angular'),
        t('home.roles.ai'),
        t('home.roles.laravel')
      ];

      const typed = new Typed(typedRef.current, {
        strings: roles,
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        backDelay: 2000,
        showCursor: false
      });

      return () => {
        typed.destroy();
      };
    }
  }, [t, language]);

  const handleDownloadCV = () => {
    const cvUrl = language === 'fr'
      ? '/files/cv/CV_Mohammed_Ezzaim_FR.pdf'
      : language === 'en'
        ? '/files/cv/CV_Mohammed_Ezzaim_EN.pdf'
        : '/files/cv/CV_Mohammed_Ezzaim_EN.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `CV_Mohammed_Ezzaim_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>

      <section id="home" className={styles.home}>
        <img
          src="/images/home-bg.jpg"
          alt="Background"
          className={styles.homeImage}
        />

        <div className={`container ${styles.homeContainer}`}>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className={styles.homeTitle}>{t('home.name')}</h2>
              <p className={styles.homeSubtitle}>
                {t('home.subtitle')} <span ref={typedRef} className={styles.typed}></span>
              </p>
              <div className={styles.buttonGroup}>
                <a href="#contact" className={styles.homeButton}>
                  {t('nav.contact')}
                </a>
                <button
                  onClick={handleDownloadCV}
                  className={`${styles.homeButton} ${styles.homeButtonOutline}`}
                >
                  {t('home.downloadCV')}
                </button>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomeSection;