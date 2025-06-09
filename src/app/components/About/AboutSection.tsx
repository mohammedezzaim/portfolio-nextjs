'use client';
import { useEffect } from 'react';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './AboutSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  const { t } = useLanguage();

  const coreTechnologies = [
    { name: 'Java/Spring', icon: 'bi-file-code' },
    { name: 'Angular', icon: 'bi-file-earmark-code' },
    { name: 'Next.js', icon: 'bi-file-earmark-richtext' },
    { name: 'Python/AI', icon: 'bi-robot' },
    { name: 'Laravel', icon: 'bi-box' },
    { name: 'Machine Learning', icon: 'bi-cpu' }
  ];

  // Statistiques personnelles créatives
  const personalStats = [
    {
      icon: 'bi-code-slash',
      number: '5+',
      label: t('about.stats.years') || 'Années d\'expérience'
    },
    {
      icon: 'bi-trophy',
      number: '50+',
      label: t('about.stats.projects') || 'Projets réalisés'
    },
    {
      icon: 'bi-cup-hot',
      number: '∞',
      label: t('about.stats.coffee') || 'Tasses de café'
    }
  ];

  // Nouvelle section - Domaines d'expertise
  const passionsAndInterests = [
    {
      icon: 'bi-lightbulb',
      title: t('about.passions.innovation') || 'Innovation Technologique',
      description: t('about.passions.innovation.desc') || 'Passionné par les nouvelles technologies et l\'innovation'
    },
    {
      icon: 'bi-people',
      title: t('about.passions.collaboration') || 'Travail d\'équipe',
      description: t('about.passions.collaboration.desc') || 'J\'aime collaborer et partager mes connaissances'
    },
    {
      icon: 'bi-book',
      title: t('about.passions.learning') || 'Apprentissage Continu',
      description: t('about.passions.learning.desc') || 'Toujours en quête de nouveaux défis et apprentissages'
    }
  ];

  useEffect(() => {
    // Animation initialization can be added here if needed
  }, []);

  return (
    <section id="about" className={`${styles.about} section`}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('about.title')}</h2>
        <p className="lead">{t('about.description')}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-4 text-center mb-2 mb-lg-0">
            <img
              src="/images/profile-img.jpg"
              className={`${styles.profileImage}`}
              alt="Mohammed Ezzaim Profile"
            />

            <div className={styles.profileStats} data-aos="fade-up" data-aos-delay="200">
              <div className="row text-center">
                {personalStats.map((stat, index) => (
                  <div key={index} className="col-4">
                    <div className={styles.statItem}>
                      <i className={`bi ${stat.icon} ${styles.statIcon}`}></i>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Passions Section - Moved here to align with Languages */}
            <div className={`${styles.passionsSection} mt-3`} data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-center mb-4">{t('about.passions.title') || 'Passions & Intérêts'}</h4>
              <div className="row">
                {passionsAndInterests.map((passion, index) => (
                  <div key={index} className="col-12 mb-3">
                    <div className={styles.passionItem}>
                      <div className={styles.passionIcon}>
                        <i className={`bi ${passion.icon}`}></i>
                      </div>
                      <div className={styles.passionContent}>
                        <h6 className={styles.passionTitle}>{passion.title}</h6>
                        <p className={styles.passionDescription}>{passion.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            {/* Professional Summary */}
            <div className={styles.professionalSummary}>
              <h3 className="mb-3">{t('about.professional.title')}</h3>
              <p>{t('about.professional.summary1')}</p>
              <p className="mt-3">{t('about.professional.summary2')}</p>
            </div>

            {/* Core Technologies */}
            <div className={`${styles.technologies} mt-3`}>
              <h4 className="mb-4">{t('about.technologies.title')}</h4>
              <div className="row">
                {coreTechnologies.map((tech, index) => (
                  <div key={index} className="col-6 col-md-4 mb-3">
                    <div className={styles.techItem}>
                      <i className={`bi ${tech.icon}`}></i>
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className={`${styles.languages} mt-3`}>
              <h4 className="mb-3">{t('about.languages.title')}</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className={styles.languageItem}>
                    <span className={styles.languageName}>
                      {t('about.languages.french')}
                    </span>
                    <span className={styles.languageLevel}>
                      {t('about.languages.fr.level.b2')}
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.languageItem}>
                    <span className={styles.languageName}>
                      {t('about.languages.english')}
                    </span>
                    <span className={styles.languageLevel}>
                      {t('about.languages.en.level.b2')}
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.languageItem}>
                    <span className={styles.languageName}>
                      {t('about.languages.arabic')}
                    </span>
                    <span className={styles.languageLevel}>
                      {t('about.languages.level.native')}
                    </span>
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