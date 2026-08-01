import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Languages, Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTheme, useLanguage } from '../context/index.js';

const NAV_LINKS = [
    { to: '/', key: 'nav.home' },
    { to: '/about', key: 'nav.about' },
    { to: '/project', key: 'nav.project' },
    { to: '/contact', key: 'nav.contact' },
];

const LANGS = ['uz', 'ru', 'en'];

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, setLang, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const cycleLang = () => setLang((prev) => LANGS[(LANGS.indexOf(prev) + 1) % LANGS.length]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const rawX = (e.clientX - cx) * 0.02;
            const rawY = (e.clientY - cy) * 0.02;
            const x = Math.max(-8, Math.min(8, rawX));
            const y = Math.max(-8, Math.min(8, rawY));
            setOffset({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="fixed top-4 md:top-5 inset-x-0 z-50 flex justify-center px-4">
                <header className="w-full max-w-5xl">
                    {/* Symmetric gradient border — 1px ring, no rotating arcs */}
                    <div className="relative rounded-full p-px bg-gradient-to-br from-blue-500/45 via-cyan-400/20 to-white/10 shadow-[0_0_28px_-8px_rgba(56,189,248,0.35)]">
                        <div className="relative flex items-center justify-between gap-3 rounded-full bg-gradient-to-b from-(--surface-a)/85 to-(--surface-b)/85 backdrop-blur-2xl px-4 md:px-5 py-2 md:py-2.5">
                            {/* Logo */}
                            <a
                                href="#top"
                                className="df-logo font-semibold text-lg tracking-tight text-(--text-strong) flex items-center gap-3 shrink-0"
                                aria-label="Dualis Team"
                            >
                                <span className="relative flex h-10 w-10 rounded-full overflow-hidden group/logo">
                                    <span
                                        aria-hidden="true"
                                        className="absolute -inset-[150%] opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100"
                                        style={{
                                            background:
                                                'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                                            animation: 'spin-slow 3s linear infinite',
                                        }}
                                    />
                                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-(--logo-bg) border border-(--border) p-1 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
                                        <motion.img
                                            src={logo}
                                            alt="Dualis Team logo"
                                            className="h-full w-full rounded-full object-cover"
                                            animate={{ x: offset.x, y: offset.y }}
                                            transition={{ type: 'spring', stiffness: 90, damping: 16, mass: 0.6 }}
                                        />
                                    </span>
                                </span>
                            </a>

                            {/* Desktop nav — bottom underline on hover & active */}
                            <nav className="df-nav hidden md:flex items-center gap-1 text-base font-medium">
                                {NAV_LINKS.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.to === '/'}
                                        onClick={() => setMenuOpen(false)}
                                        className="group relative px-4 py-2"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span
                                                    className={`relative z-10 transition-colors duration-200 ${
                                                        isActive ? 'text-(--text-strong)' : 'text-(--text-muted) group-hover:text-(--text-strong)'
                                                    }`}
                                                >
                                                    {t(link.key)}
                                                </span>
                                                {/* Bottom underline — draws from left on hover, stays on active */}
                                                <span
                                                    aria-hidden="true"
                                                    className={`absolute left-1/2 -translate-x-1/2 w-1/2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                    }`}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </nav>

                            {/* Language + theme toggles */}
                            <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                    onClick={cycleLang}
                                    title={t('common.language')}
                                    aria-label={`${t('common.language')}: ${lang.toUpperCase()}`}
                                    className="df-nav inline-flex items-center gap-1.5 rounded-full border border-(--border) px-3 py-2 text-xs font-semibold text-(--text-soft) transition-colors duration-200 hover:text-(--text-strong) hover:border-blue-400/40 hover:bg-blue-500/10"
                                >
                                    <Languages className="w-4 h-4" strokeWidth={1.75} />
                                    <span className="w-6 text-center uppercase">{lang}</span>
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    title={t('common.theme')}
                                    aria-label={`${t('common.theme')}: ${theme}`}
                                    className="w-9 h-9 rounded-full border border-(--border) flex items-center justify-center text-(--text-soft) transition-colors duration-200 hover:text-(--text-strong) hover:border-blue-400/40 hover:bg-blue-500/10"
                                >
                                    {theme === 'dark' ? (
                                        <Sun className="w-4 h-4" strokeWidth={1.75} />
                                    ) : (
                                        <Moon className="w-4 h-4" strokeWidth={1.75} />
                                    )}
                                </button>
                            </div>

                            {/* CTA — ghost/secondary style */}
                            <a
                                href="#contact"
                                className="df-cta hidden md:inline-flex items-center gap-2 pl-4 pr-4 py-2 rounded-full border border-(--border) text-(--text-soft) shrink-0 transition-all duration-200 hover:text-(--text-strong) hover:border-cyan-300/40 hover:bg-cyan-400/10"
                            >
                                <span className="text-sm font-medium">{t('common.startProject')}</span>
                                <ArrowUpRight className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
                            </a>

                            {/* Mobile hamburger — plain, no motion */}
                            <button
                                onClick={() => setMenuOpen((open) => !open)}
                                className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 shrink-0"
                                aria-label={t('nav.home')}
                                aria-expanded={menuOpen}
                            >
                                <span
                                    className={`block w-5 h-[2px] bg-(--text-strong) rounded-full transition-transform duration-200 ${
                                        menuOpen ? 'translate-y-[7px] rotate-45' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-[2px] bg-(--text-strong) rounded-full transition-opacity duration-200 ${
                                        menuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-[2px] bg-(--text-strong) rounded-full transition-transform duration-200 ${
                                        menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu — plain conditional render, no motion */}
                    {menuOpen && (
                        <nav className="df-nav md:hidden mt-3 rounded-3xl border border-blue-400/10 bg-gradient-to-b from-(--surface-a) to-(--surface-b) backdrop-blur-xl shadow-[0_12px_45px_-10px_rgba(0,0,0,0.8)] px-3 py-3 flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `relative px-4 py-3 text-base transition-colors ${
                                            isActive ? 'text-(--text-strong)' : 'text-(--text-soft)'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {t(link.key)}
                                            <motion.span
                                                aria-hidden="true"
                                                className={`absolute left-1/2 -translate-x-1/2 w-[40%] bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                    isActive ? 'scale-x-100' : 'scale-x-0'
                                                }`}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="df-cta mt-1 flex items-center justify-between rounded-xl border border-(--border) px-4 py-3 text-(--text-soft)"
                            >
                                <span className="font-medium">{t('common.startProject')}</span>
                                <ArrowUpRight className="w-4 h-4 opacity-60" strokeWidth={2.25} />
                            </a>
                            <div className="mt-2 flex items-center gap-2">
                                <button
                                    onClick={cycleLang}
                                    title={t('common.language')}
                                    aria-label={`${t('common.language')}: ${lang.toUpperCase()}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-(--border) px-4 py-3 text-sm font-semibold text-(--text-soft) transition-colors duration-200 hover:text-(--text-strong) hover:border-blue-400/40 hover:bg-blue-500/10"
                                >
                                    <Languages className="w-4 h-4" strokeWidth={1.75} />
                                    <span className="uppercase">{lang}</span>
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    title={t('common.theme')}
                                    aria-label={`${t('common.theme')}: ${theme}`}
                                    className="flex-1 inline-flex items-center justify-center rounded-xl border border-(--border) px-4 py-3 text-sm text-(--text-soft) transition-colors duration-200 hover:text-(--text-strong) hover:border-blue-400/40 hover:bg-blue-500/10"
                                >
                                    {theme === 'dark' ? (
                                        <Sun className="w-4 h-4" strokeWidth={1.75} />
                                    ) : (
                                        <Moon className="w-4 h-4" strokeWidth={1.75} />
                                    )}
                                </button>
                            </div>
                        </nav>
                    )}
                </header>
            </div>

            {/* Spacer so page content (hero, etc.) never sits behind the fixed header */}
            <div className="w-full h-[72px]" aria-hidden="true" />
        </>
    );
};

export default Header;
