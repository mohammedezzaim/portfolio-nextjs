'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Bot, Minimize2, Languages } from 'lucide-react';
import { useLanguage } from '@/app/components/tradiction/context/LanguageContext';
import styles from './Chatbot.module.css';

type MessageType = 'user' | 'bot';
interface Message {
  id: number;
  type: MessageType;
  content: string;
  timestamp: Date;
  language: 'fr' | 'en' | 'ar';
}

const Chatbot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content:
        language === 'fr'
          ? t('chatbot.welcome') || 'Bonjour ! Comment puis-je vous aider ?'
          : language === 'en'
          ? t('chatbot.welcome') || 'Hello! How can I assist you?'
          : t('chatbot.welcome') || 'مرحباً! كيف يمكنني مساعدتك؟',
      timestamp: new Date(),
      language: language as 'fr' | 'en' | 'ar',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const predefinedResponses = {
    salutations: {
      keywords: ['bonjour', 'salut', 'hello', 'hi', 'hey', 'مرحبا'],
      responses: {
        fr: [
          t('chatbot.responses.salutations1') || 'Bonjour ! Ravi de vous parler. Comment puis-je vous aider ?',
          t('chatbot.responses.salutations2') || 'Salut ! Que souhaitez-vous savoir sur Mohammed ?',
          t('chatbot.responses.salutations3') || 'Hello ! Je suis là pour répondre à vos questions.',
        ],
        en: [
          t('chatbot.responses.salutations1') || 'Hello! Nice to talk to you. How can I help you?',
          t('chatbot.responses.salutations2') || 'Hi! What would you like to know about Mohammed?',
          t('chatbot.responses.salutations3') || 'Hey! I’m here to answer your questions.',
        ],
        ar: [
          t('chatbot.responses.salutations1') || 'مرحباً! يسعدني التحدث معك. كيف يمكنني مساعدتك؟',
          t('chatbot.responses.salutations2') || 'مرحباً! ماذا تريد معرفته عن محمد؟',
          t('chatbot.responses.salutations3') || 'مرحباً! أنا هنا للإجابة على أسئلتك.',
        ],
      },
    },
  };

  const getRandomResponse = (responses: string[]): string => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    for (const data of Object.values(predefinedResponses)) {
      if (data.keywords.some((keyword) => message.includes(keyword))) {
        return getRandomResponse(data.responses[language as 'fr' | 'en' | 'ar']);
      }
    }
    const defaultResponses = {
      fr: [
        t('chatbot.responses.default1') || 'C’est une excellente question !',
        t('chatbot.responses.default2') || 'Je ne suis pas sûr de bien comprendre.',
        t('chatbot.responses.default3') || 'Mohammed serait ravi de discuter de cela avec vous.',
      ],
      en: [
        t('chatbot.responses.default1') || 'That’s a great question!',
        t('chatbot.responses.default2') || 'I’m not sure I understand.',
        t('chatbot.responses.default3') || 'Mohammed would be happy to discuss this with you.',
      ],
      ar: [
        t('chatbot.responses.default1') || 'هذا سؤال رائع!',
        t('chatbot.responses.default2') || 'لست متأكداً من فهمي للسؤال.',
        t('chatbot.responses.default3') || 'سيكون محمد سعيداً لمناقشة هذا معك.',
      ],
    };
    return getRandomResponse(defaultResponses[language as 'fr' | 'en' | 'ar']);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      language: language as 'fr' | 'en' | 'ar',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date(),
        language: language as 'fr' | 'en' | 'ar',
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'fr' ? 'en' : prev === 'en' ? 'ar' : 'fr'));
  };

  return (
    <div className={`${styles.chatbotWrapper} ${language === 'ar' ? styles.rtl : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.floatingButton}>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className={`${styles.chatContainer} ${isMinimized ? styles.minimized : ''}`}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <Bot size={20} />
              <span>{t('chatbot.header') || 'Mohammed’s Assistant'}</span>
            </div>
            <div className={styles.headerActions}>
              <button onClick={toggleLanguage} className={styles.langToggle}>
                <Languages size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              
              <button onClick={() => setIsMinimized(!isMinimized)} className={styles.minimizeButton}>
                {isMinimized ? <MessageCircle size={16} /> : <Minimize2 size={16} />}
              </button>

            </div>
          </div>

          {!isMinimized && (
            <>
              <div className={styles.messages}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${styles.message} ${msg.type === 'user' ? styles.userMessage : styles.botMessage}`}
                  >
                    <p>{msg.content}</p>
                    <span className={styles.timestamp}>{msg.timestamp.toLocaleTimeString()}</span>
                  </div>
                ))}
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <span>{t('chatbot.typing') || 'Typing...'}</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.inputArea}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    language === 'fr'
                      ? t('chatbot.placeholder') || 'Tapez votre message...'
                      : language === 'en'
                      ? t('chatbot.placeholder') || 'Type your message...'
                      : t('chatbot.placeholder') || 'اكتب رسالتك...'
                  }
                />
                <button onClick={handleSendMessage}>
                  <Send size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;