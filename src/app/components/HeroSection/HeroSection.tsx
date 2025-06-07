'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './HeroSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Java Developer',
          'Spring Developer',
          'Angular Developer',
          'IA Engineer',
          'Laravel Programming'
        ],
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
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <img
        src="/images/hero-bg.jpg"
        alt="Background"
        className={styles.heroImage}
      />

      <div className={`container ${styles.heroContainer}`}>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className={styles.heroTitle}>Mohammed Ezzaim</h2>
            <p className={styles.heroSubtitle}>
              I'm <span ref={typedRef} className={styles.typed}></span>
            </p>
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
  );
};

export default HeroSection;