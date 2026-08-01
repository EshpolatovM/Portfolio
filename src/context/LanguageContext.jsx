import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations.js';

const LanguageContext = createContext({ lang: 'uz', setLang: () => {}, t: (k) => k });

const getInitialLang = () => {
    const saved = localStorage.getItem('dualis-lang');
    if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    return 'uz';
};

const getNested = (obj, key) => key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), obj);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('dualis-lang', lang);
    }, [lang]);

    const t = (key, params) => {
        const dict = translations[lang] || translations.uz;
        let value = getNested(dict, key);
        if (value === undefined || value === null) {
            const fallback = getNested(translations.uz, key);
            value = fallback !== undefined && fallback !== null ? fallback : key;
        }
        if (typeof value === 'string' && params) {
            value = value.replace(/\{(\w+)\}/g, (_, name) => (params[name] !== undefined ? params[name] : `{${name}}`));
        }
        return value;
    };

    return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
