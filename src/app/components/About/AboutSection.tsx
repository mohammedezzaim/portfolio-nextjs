'use client';
import { useEffect } from 'react';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './AboutSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Animation initialization can be added here if needed
  }, []);

  return (
    <section id="about" className={`${styles.about} section`}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 text-center">
            <img
              src="/images/profile-img.jpg"
              className="img-fluid rounded-circle"
              alt="Mohammed Ezzaim Profile"
            />
          </div>
          <div className="col-lg-9 content">
            <h2>{t('about.subtitle')}</h2>
            <p className="fst-italic py-3">{t('about.profile.role')}</p>

            {/* Personal Information */}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{t('about.personal.phone')}:</strong> <span>+212-658913374</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{t('about.personal.email')}:</strong>{' '}
                    <span>mohammedezzaim00@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{t('about.personal.city')}:</strong> <span>Marrakech, Morocco</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{t('about.personal.website')}:</strong>{' '}
                    <a href="https://mohammedezzaim.dev" target="_blank" rel="noopener noreferrer">
                      mohammedezzaim.dev
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{t('about.personal.freelance')}:</strong>{' '}
                    <span className="text-success">{t('common.available')}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/mohammedezzaim" target="_blank" rel="noopener noreferrer">
                      github.com/mohammedezzaim
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                      href="https://linkedin.com/in/mohammed-ezzaim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/mohammed-ezzaim
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Languages Section */}
            <div className="row mt-4">
              <div className="col-12">
                <h4>{t('about.languages.title')}</h4>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-translate me-2"></i>
                      <span>
                        <strong>{t('about.languages.french')}:</strong>{' '}
                        {t('about.languages.level.b1')}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-translate me-2"></i>
                      <span>
                        <strong>{t('about.languages.english')}:</strong>{' '}
                        {t('about.languages.level.b1')}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-translate me-2"></i>
                      <span>
                        <strong>{t('about.languages.arabic')}:</strong>{' '}
                        {t('about.languages.level.native')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;