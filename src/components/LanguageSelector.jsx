import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const LANGUAGES = [
    { code: 'uz', label: 'UZ', flag: '\u{1F1FA}\u{1F1FF}' },
    { code: 'ru', label: 'RU', flag: '\u{1F1F7}\u{1F1FA}' },
    { code: 'en', label: 'EN', flag: '\u{1F1EC}\u{1F1E7}' },
];

const LanguageSelector = () => {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState(LANGUAGES[0]);
    const containerRef = useRef(null);

    useEffect(() => {
        const onPointerDown = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, []);

    const selectLang = (item) => {
        setLang(item);
        setOpen(false);
    };

    return (
        <div className="relative shrink-0" ref={containerRef}>
            <motion.button
                type="button"
                onClick={() => setOpen((o) => !o)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Select language"
                className="df-nav group flex items-center gap-1.5 pl-2.5 pr-2 py-1.5 rounded-full border border-blue-400/25 text-sm text-slate-200 transition-colors duration-200 hover:border-blue-300/50 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="text-sm">{lang.label}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex"
                >
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-100" strokeWidth={2.25} />
                </motion.span>
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        role="listbox"
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: 'top right' }}
                        className="absolute right-0 top-[calc(100%+14px)] w-36 overflow-hidden rounded-2xl border border-blue-400/20 bg-[#070D1C]/95 backdrop-blur-xl shadow-[0_18px_50px_-12px_rgba(0,0,0,0.9)] p-1.5 z-50"
                    >
                        {LANGUAGES.map((item, i) => (
                            <motion.li
                                key={item.code}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.04 * i, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={lang.code === item.code}
                                    onClick={() => selectLang(item)}
                                    className={`relative flex w-full items-center justify-center gap-2 px-2.5 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
                                        lang.code === item.code
                                            ? 'bg-blue-500/15 text-slate-50 border border-blue-400/25'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                                    }`}
                                >
                                    <span className="text-base leading-none">{item.flag}</span>
                                    <span className="text-left">{item.label}</span>
                                    <AnimatePresence>
                                        {lang.code === item.code && (
                                            <motion.span
                                                initial={{ scale: 0, rotate: -90 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                exit={{ scale: 0, rotate: 90 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                                                className="absolute right-2.5"
                                            >
                                                <Check className="w-3.5 h-3.5 text-blue-300" strokeWidth={3} />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
