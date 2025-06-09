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

    // home Section
    'home.name': 'Mohammed Ezzaim',
    'home.subtitle': 'Je suis',
    'home.roles.java': 'Développeur Java',
    'home.roles.spring': 'Développeur Spring',
    'home.roles.angular': 'Développeur Angular',
    'home.roles.ai': 'Ingénieur IA',
    'home.roles.laravel': 'Programmeur Laravel',
    'home.downloadCV': 'Télécharger mon CV',

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
    'about.languages.fr.level.b2': 'Niveau B2',
    'about.languages.en.level.b2': 'Niveau B1',
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
    'about.stats.years': 'Années d\'expérience',
    'about.stats.projects': 'Projets réalisés',
    'about.stats.coffee': 'Tasses de café',
    'about.technologies.title': 'Technologies Clés',
    'about.professional.title': 'Profil Professionnel',
    'about.professional.summary1': 'Développeur Full Stack spécialisé dans la création de solutions logicielles robustes et évolutives. Expérience dans le développement d\'applications web complexes avec Java/Spring et Angular.',
    'about.professional.summary2': 'Passionné par l\'intégration des technologies IA dans les applications métiers. Actuellement en Master IA à la FSTG de Marrakech, je combine expertise technique et recherche avancée.',
    'about.contact.button': 'Contactez-moi',
    'about.social.hint': 'Retrouvez-moi aussi sur',
    'about.passions.title': 'Passions & Intérêts',
    'about.passions.innovation': 'Innovation Technologique',
    'about.passions.innovation.desc': 'Passionné par les nouvelles technologies et l\'innovation',
    'about.passions.collaboration': 'Travail d\'équipe',
    'about.passions.collaboration.desc': 'J\'aime collaborer et partager mes connaissances',
    'about.passions.learning': 'Apprentissage Continu',
    'about.passions.learning.desc': 'Toujours en quête de nouveaux défis et apprentissages',
    'about.passions.opensource': 'Open Source',
    'about.passions.opensource.desc': 'Contributeur actif à la communauté open source',


    // Chatbot Section
    'chatbot.welcome': 'Bonjour ! Comment puis-je vous aider ?',
    'chatbot.header': 'Assistant de Mohammed',
    'chatbot.placeholder': 'Tapez votre message...',
    'chatbot.typing': 'En train de taper...',
    'chatbot.responses.salutations1': 'Bonjour ! Ravi de vous parler. Comment puis-je vous aider ?',
    'chatbot.responses.salutations2': 'Salut ! Que souhaitez-vous savoir sur Mohammed ?',
    'chatbot.responses.salutations3': 'Hello ! Je suis là pour répondre à vos questions.',
    'chatbot.responses.default1': 'C’est une excellente question !',
    'chatbot.responses.default2': 'Je ne suis pas sûr de bien comprendre.',
    'chatbot.responses.default3': 'Mohammed serait ravi de discuter de cela avec vous.',


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

    // home Section
    'home.name': 'Mohammed Ezzaim',
    'home.subtitle': 'I\'m a',
    'home.roles.java': 'Java Developer',
    'home.roles.spring': 'Spring Developer',
    'home.roles.angular': 'Angular Developer',
    'home.roles.ai': 'AI Engineer',
    'home.roles.laravel': 'Laravel Developer',
    'home.downloadCV': 'Download my CV',

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
    'about.languages.fr.level.b2': 'B2 Level',
    'about.languages.en.level.b2': 'B1 Level',
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
    'about.professional.title': 'Professional Profile',
    'about.professional.summary1': 'Full Stack Developer specializing in creating robust and scalable software solutions. Experience developing complex web applications with Java/Spring and Angular.',
    'about.professional.summary2': 'Passionate about integrating AI technologies into business applications. Currently pursuing a Master\'s degree in AI at the FSTG in Marrakech, I combine technical expertise and advanced research.',
    'about.technologies.title': 'Key Technologies',

    'about.stats.years': 'Years of Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.coffee': 'Cups of Coffee',
    'about.stats.title': 'Statistics',
    'about.stats.description': 'A brief overview of my professional journey and achievements.',
    'about.contact.button': 'Contact Me',
    'about.social.hint': 'Also find me on',
    'about.passions.title': 'Passions & Interests',
    'about.passions.innovation': 'Technological Innovation',
    'about.passions.innovation.desc': 'Passionate about new technologies and innovation',
    'about.passions.collaboration': 'Teamwork',
    'about.passions.collaboration.desc': 'I enjoy collaborating and sharing knowledge',
    'about.passions.learning': 'Continuous Learning',
    'about.passions.learning.desc': 'Always seeking new challenges and learning opportunities',
    'about.passions.opensource': 'Open Source',
    'about.passions.opensource.desc': 'Active contributor to the open source community',

    // Chatbot Section
    'chatbot.welcome': 'Hello! How can I assist you?',
    'chatbot.header': 'Mohammed’s Assistant',
    'chatbot.placeholder': 'Type your message...',
    'chatbot.typing': 'Typing...',
    'chatbot.responses.salutations1': 'Hello! Nice to talk to you. How can I help you?',
    'chatbot.responses.salutations2': 'Hi! What would you like to know about Mohammed?',
    'chatbot.responses.salutations3': 'Hey! I’m here to answer your questions.',
    'chatbot.responses.default1': 'That’s a great question!',
    'chatbot.responses.default2': 'I’m not sure I understand.',
    'chatbot.responses.default3': 'Mohammed would be happy to discuss this with you.',


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

    // home Section
    'home.name': 'محمد الزعيم',
    'home.subtitle': 'أنا',
    'home.roles.java': 'مطور جافا',
    'home.roles.spring': 'مطور سبرينغ',
    'home.roles.angular': 'مطور أنجولار',
    'home.roles.ai': 'مهندس ذكاء اصطناعي',
    'home.roles.laravel': 'مطور لارافيل',
    'home.downloadCV': 'تنزيل سيرتي الذاتية',

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
    'about.languages.fr.level.b2': 'المستوى B2',
    'about.languages.en.level.b2': 'المستوى B1',
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
    // في كل لغة (فرنسية، إنجليزية، عربية)، أضف:

    'about.professional.title': "الملف الشخصي للمهنة",

    'about.professional.summary1': "مطور برامج متكامل، متخصص في إنشاء حلول برمجية قوية وقابلة للتطوير. لدي خبرة في تطوير تطبيقات ويب معقدة باستخدام Java/Spring و Angular",
    'about.professional.summary2': "شغوف بدمج تقنيات الذكاء الاصطناعي في تطبيقات الأعمال. أدرس حاليًا للحصول على درجة الماجستير في الذكاء الاصطناعي من معهد FSTG في مراكش، حيث أجمع بين الخبرة التقنية والبحث المتقدم",
    'about.technologies.title': "التقنيات الرئيسية",
    'about.stats.years': 'سنوات من الخبرة',
    'about.stats.projects': 'المشاريع المنجزة',
    'about.stats.coffee': 'أكواب القهوة',
    'about.stats.title': 'الإحصائيات',
    'about.stats.description': 'نظرة عامة موجزة عن مسيرتي المهنية وإنجازاتي',
    'about.passions.title': 'الاهتمامات والهوايات',
    'about.passions.innovation': 'الابتكار التكنولوجي',
    'about.passions.innovation.desc': 'شغوف بالتكنولوجيات الجديدة والابتكار',
    'about.passions.collaboration': 'العمل الجماعي',
    'about.passions.collaboration.desc': 'أستمتع بالتعاون وتبادل المعرفة',
    'about.passions.learning': 'التعلم المستمر',
    'about.passions.learning.desc': 'دائمًا أبحث عن تحديات جديدة وفرص للتعلم',
    'about.passions.opensource': 'المصادر المفتوحة',
    'about.passions.opensource.desc': 'مساهم نشط في مجتمع المصادر المفتوحة',


    // Chatbot Section
    'chatbot.welcome': 'مرحباً! كيف يمكنني مساعدتك؟',
    'chatbot.header': 'مساعد محمد',
    'chatbot.placeholder': 'اكتب رسالتك...',
    'chatbot.typing': 'جارٍ الكتابة...',
    'chatbot.responses.salutations1': 'مرحباً! يسعدني التحدث معك. كيف يمكنني مساعدتك؟',
    'chatbot.responses.salutations2': 'مرحباً! ماذا تريد معرفته عن محمد؟',
    'chatbot.responses.salutations3': 'مرحباً! أنا هنا للإجابة على أسئلتك.',
    'chatbot.responses.default1': 'هذا سؤال رائع!',
    'chatbot.responses.default2': 'لست متأكداً من فهمي للسؤال.',
    'chatbot.responses.default3': 'سيكون محمد سعيداً لمناقشة هذا معك.',

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