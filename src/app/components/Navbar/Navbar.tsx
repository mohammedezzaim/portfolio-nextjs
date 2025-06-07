'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 1200) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header  className={`${styles.header} ${isMenuOpen ? styles.headerShow : ''}`}>
        <div 
          className={styles.headerToggle} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <i className="bi bi-list"></i>
        </div>

      
        <nav className={styles.navmenu}>
          <ul>
            {[
              { id: 'hero', icon: 'bi-house', label: 'Home' },
              { id: 'about', icon: 'bi-person', label: 'About' },
              { id: 'resume', icon: 'bi-file-earmark-text', label: 'Resume' },
              { id: 'portfolio', icon: 'bi-images', label: 'Portfolio' },
              { id: 'services', icon: 'bi-hdd-stack', label: 'Services' },
              { id: 'contact', icon: 'bi-envelope', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <Link 
                  href={`#${item.id}`} 
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;