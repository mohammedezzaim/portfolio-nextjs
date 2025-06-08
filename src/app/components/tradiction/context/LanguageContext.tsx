'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Enhanced translations object with About section content
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.resume': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Mohammed Ezzaim',
    'hero.subtitle': 'Je suis',
    'hero.roles.java': 'Développeur Java',
    'hero.roles.spring': 'Développeur Spring',
    'hero.roles.angular': 'Développeur Angular',
    'hero.roles.ai': 'Ingénieur IA',
    'hero.roles.laravel': 'Programmeur Laravel',
    'hero.downloadCV': 'Télécharger mon CV',
    
    // About Section
    'about.title': 'À propos',
    'about.subtitle': 'Développeur Full Stack & Ingénieur IA',
    'about.description': 'Étudiant en Master d\'Intelligence Artificielle et Ingénierie Informatique (IA2I) à la FSTG de Marrakech, passionné par le développement logiciel et l\'intelligence artificielle. En tant que développeur full-stack, mon objectif est de concevoir des solutions innovantes alliant technologies traditionnelles et IA.',
    'about.profile.title': 'Profil',
    'about.profile.role': 'Développeur Full Stack & Ingénieur IA',
    'about.personal.birthday': 'Anniversaire',
    'about.personal.website': 'Site Web',
    'about.personal.phone': 'Téléphone',
    'about.personal.city': 'Ville',
    'about.personal.age': 'Âge',
    'about.personal.degree': 'Diplôme',
    'about.personal.email': 'Email',
    'about.personal.freelance': 'Freelance',
    'about.skills.title': 'Compétences',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.database': 'Base de données',
    'about.skills.tools': 'Outils',
    'about.skills.methods': 'Méthodes',
    'about.skills.leadership': 'Leadership',
    'about.skills.project': 'Gestion de projet',
    'about.skills.teamwork': 'Travail d\'équipe',
    'about.skills.communication': 'Communication efficace',
    'about.languages.title': 'Langues',
    'about.languages.english': 'Anglais',
    'about.languages.french': 'Français',
    'about.languages.arabic': 'Arabe',
    'about.languages.level.b1': 'Niveau B1',
    'about.languages.level.native': 'Langue maternelle',
    'about.education.title': 'Formation',
    'about.education.master': 'Master en Intelligence Artificielle et Ingénierie Informatique (IA2I)',
    'about.education.bachelor': 'Licence en Systèmes Informatiques Répartis (SIR)',
    'about.education.deust': 'DEUST en Sciences et Techniques',
    'about.education.bac': 'Baccalauréat Scientifique en Sciences Physiques',
    'about.projects.title': 'Projets Récents',
    'about.projects.emolearn': 'EmoLearn - Application éducative avec analyse émotionnelle',
    'about.projects.booking': 'Plateforme de réservation d\'appartements et voitures',
    'about.projects.advertising': 'Application de calcul des coûts publicitaires urbains',
    'about.projects.website': 'Générateur Laravel de sites web personnalisés',
    
    // General
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.available': 'Disponible',
    'common.inprogress': 'En cours'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Mohammed Ezzaim',
    'hero.subtitle': 'I\'m a',
    'hero.roles.java': 'Java Developer',
    'hero.roles.spring': 'Spring Developer',
    'hero.roles.angular': 'Angular Developer',
    'hero.roles.ai': 'AI Engineer',
    'hero.roles.laravel': 'Laravel Developer',
    'hero.downloadCV': 'Download my CV',
    
    // About Section
    'about.title': 'About',
    'about.subtitle': 'Full Stack Developer & AI Engineer',
    'about.description': 'Master\'s student in Artificial Intelligence and Computer Engineering (IA2I) at FSTG in Marrakech, passionate about software development and artificial intelligence. As a full-stack developer, my goal is to design innovative solutions combining traditional technologies and AI.',
    'about.profile.title': 'Profile',
    'about.profile.role': 'Full Stack Developer & AI Engineer',
    'about.personal.birthday': 'Birthday',
    'about.personal.website': 'Website',
    'about.personal.phone': 'Phone',
    'about.personal.city': 'City',
    'about.personal.age': 'Age',
    'about.personal.degree': 'Degree',
    'about.personal.email': 'Email',
    'about.personal.freelance': 'Freelance',
    'about.skills.title': 'Skills',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.database': 'Database',
    'about.skills.tools': 'Tools',
    'about.skills.methods': 'Methods',
    'about.skills.leadership': 'Leadership',
    'about.skills.project': 'Project Management',
    'about.skills.teamwork': 'Teamwork',
    'about.skills.communication': 'Effective Communication',
    'about.languages.title': 'Languages',
    'about.languages.english': 'English',
    'about.languages.french': 'French',
    'about.languages.arabic': 'Arabic',
    'about.languages.level.b1': 'B1 Level',
    'about.languages.level.native': 'Native',
    'about.education.title': 'Education',
    'about.education.master': 'Master\'s in Artificial Intelligence and Computer Engineering (IA2I)',
    'about.education.bachelor': 'Bachelor\'s in Distributed Computer Systems (SIR)',
    'about.education.deust': 'DEUST in Science and Technology',
    'about.education.bac': 'Scientific Baccalaureate in Physical Sciences',
    'about.projects.title': 'Recent Projects',
    'about.projects.emolearn': 'EmoLearn - Emotion-aware educational mobile app',
    'about.projects.booking': 'Apartment and car booking platform',
    'about.projects.advertising': 'Urban advertising cost calculation application',
    'about.projects.website': 'Laravel custom website builder',
    
    // General
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.available': 'Available',
    'common.inprogress': 'In Progress'
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.resume': 'السيرة الذاتية',
    'nav.portfolio': 'أعمالي',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بي',
    
    // Hero Section
    'hero.name': 'محمد عزايم',
    'hero.subtitle': 'أنا',
    'hero.roles.java': 'مطور جافا',
    'hero.roles.spring': 'مطور سبرينغ',
    'hero.roles.angular': 'مطور أنجولار',
    'hero.roles.ai': 'مهندس ذكاء اصطناعي',
    'hero.roles.laravel': 'مطور لارافيل',
    'hero.downloadCV': 'تنزيل سيرتي الذاتية',
    
    // About Section
    'about.title': 'نبذة عني',
    'about.subtitle': 'مطور فول ستاك ومهندس ذكاء اصطناعي',
    'about.description': 'طالب ماجستير في الذكاء الاصطناعي وهندسة الحاسوب (IA2I) في كلية العلوم والتقنيات بمراكش، شغوف بتطوير البرمجيات والذكاء الاصطناعي. كمطور فول ستاك، هدفي هو تصميم حلول مبتكرة تجمع بين التقنيات التقليدية والذكاء الاصطناعي.',
    'about.profile.title': 'الملف الشخصي',
    'about.profile.role': 'مطور فول ستاك ومهندس ذكاء اصطناعي',
    'about.personal.birthday': 'تاريخ الميلاد',
    'about.personal.website': 'الموقع الإلكتروني',
    'about.personal.phone': 'الهاتف',
    'about.personal.city': 'المدينة',
    'about.personal.age': 'العمر',
    'about.personal.degree': 'الشهادة',
    'about.personal.email': 'البريد الإلكتروني',
    'about.personal.freelance': 'العمل الحر',
    'about.skills.title': 'المهارات',
    'about.skills.frontend': 'الواجهة الأمامية',
    'about.skills.backend': 'الواجهة الخلفية',
    'about.skills.database': 'قواعد البيانات',
    'about.skills.tools': 'الأدوات',
    'about.skills.methods': 'المنهجيات',
    'about.skills.leadership': 'القيادة',
    'about.skills.project': 'إدارة المشاريع',
    'about.skills.teamwork': 'العمل الجماعي',
    'about.skills.communication': 'التواصل الفعال',
    'about.languages.title': 'اللغات',
    'about.languages.english': 'الإنجليزية',
    'about.languages.french': 'الفرنسية',
    'about.languages.arabic': 'العربية',
    'about.languages.level.b1': 'مستوى B1',
    'about.languages.level.native': 'اللغة الأم',
    'about.education.title': 'التعليم',
    'about.education.master': 'ماجستير في الذكاء الاصطناعي وهندسة الحاسوب (IA2I)',
    'about.education.bachelor': 'إجازة في أنظمة الحاسوب الموزعة (SIR)',
    'about.education.deust': 'دبلوم جامعي في العلوم والتقنيات',
    'about.education.bac': 'بكالوريا علمية في العلوم الفيزيائية',
    'about.projects.title': 'المشاريع الحديثة',
    'about.projects.emolearn': 'EmoLearn - تطبيق تعليمي بتحليل المشاعر',
    'about.projects.booking': 'منصة حجز الشقق والسيارات',
    'about.projects.advertising': 'تطبيق حساب تكاليف الإعلانات الحضرية',
    'about.projects.website': 'منشئ مواقع ويب مخصصة بـ Laravel',
    
    // General
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.available': 'متاح',
    'common.inprogress': 'قيد التقدم'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Load saved language from localStorage
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['fr', 'en', 'ar'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
        
        // Apply RTL for Arabic
        if (savedLanguage === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
          document.body.classList.add('rtl-mode');
        }
      } else {
        // Default to French
        setLanguageState('fr');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Only use localStorage if we're in the browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      
      // Handle RTL for Arabic
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl-mode');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl-mode');
      }
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};