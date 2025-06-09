'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.pushState(null, '', `${pathname}#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView();
        setActiveSection(sectionId);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [pathname]);

  const toggleNavbarVisibility = () => {
    setIsNavbarHidden(!isNavbarHidden);
  };

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (window.innerWidth < 1200) {
        setIsMenuOpen(false);
      }
      router.push(`${pathname}#${sectionId}`);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { id: 'home', icon: 'bi-house', labelKey: 'nav.home' },
    { id: 'about', icon: 'bi-person', labelKey: 'nav.about' },
    { id: 'resume', icon: 'bi-file-earmark-text', labelKey: 'nav.resume' },
    { id: 'portfolio', icon: 'bi-images', labelKey: 'nav.portfolio' },
    { id: 'services', icon: 'bi-hdd-stack', labelKey: 'nav.services' },
    { id: 'contact', icon: 'bi-envelope', labelKey: 'nav.contact' },
  ];

  return (
    <>
      {/* Bouton toggle repositionné au-dessus de la navbar */}
      <div
        className={styles.headerToggle}
        aria-label={t('common.toggleNav')}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleNavbarVisibility();
          }}
        >
          <i className="bi bi-list"></i>
        </a>
      </div>

      <header
        className={`${styles.header} ${isMenuOpen ? styles.headerShow : ''} ${isNavbarHidden ? styles.headerHidden : ''
          } ${language === 'ar' ? styles.rtl : ''}`}
      >
        <nav className={styles.navmenu}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{t(item.labelKey)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;