import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LanguageSelector from './LanguageSelector.jsx';
import logo from '../assets/logo.png';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/project', label: 'Project' },
    { to: '/contact', label: 'Contact' },
];

const mobileListVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const mobileItemVariants = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <div className="header-shell fixed top-3 md:top-4 inset-x-0 z-50 flex justify-center px-4">
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@500;600;700&display=swap');
          .header-shell .df-logo { font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
          .header-shell .df-nav,
          .header-shell .df-cta { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

          @keyframes df-shimmer {
            0%   { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
          .header-shell .df-shimmer-track { animation: df-shimmer 3.2s linear infinite; }

          @keyframes df-glow-pulse {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.7; }
          }
          .header-shell .df-glow-pulse { animation: df-glow-pulse 4s ease-in-out infinite; }

          @keyframes df-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          .header-shell .df-float { animation: df-float 5s ease-in-out infinite; }

          .header-shell .df-link-underline {
            position: absolute;
            left: 16px;
            right: 16px;
            bottom: 4px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(147,197,253,0.9), transparent);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          }
          .header-shell a:hover .df-link-underline { transform: scaleX(1); }

          .header-shell .df-mobile-item {
            position: relative;
            overflow: hidden;
          }
          .header-shell .df-mobile-item::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(59,130,246,0.12), transparent);
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          .header-shell .df-mobile-item:active::before,
          .header-shell .df-mobile-item:hover::before { transform: translateX(0); }
        `}</style>

                <motion.header
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-6xl"
                >
                    {/* Static duotone hairline + animated shimmer sweep (deep blue) */}
                    <div className="relative rounded-full p-px">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full df-glow-pulse"
                            style={{
                                background: 'linear-gradient(90deg, rgba(29,78,216,0.45), rgba(96,165,250,0.55), rgba(29,78,216,0.45))',
                            }}
                        />
                        {!shouldReduceMotion && (
                            <div className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                                <div
                                    className="df-shimmer-track absolute top-0 bottom-0 w-1/3"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.9), transparent)',
                                    }}
                                />
                            </div>
                        )}

                        <div
                            className={`relative flex items-center justify-between gap-4 rounded-full backdrop-blur-xl transition-all duration-300 ${
                                scrolled
                                    ? 'bg-[#040711]/95 shadow-[0_10px_45px_-14px_rgba(29,78,216,0.55)] px-4 md:px-5 py-2 md:py-2.5'
                                    : 'bg-gradient-to-b from-[#0A1226] to-[#040711] shadow-[0_8px_36px_-14px_rgba(0,0,0,0.8)] px-5 md:px-6 py-2.5 md:py-3'
                            }`}
                        >
                            {/* Logo */}
                            <a
                                href="#top"
                                className="df-logo text-base md:text-lg tracking-tight text-slate-50 flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-full"
                            >
                                <span className="relative flex h-10 w-10 md:h-11 md:w-11 items-center justify-center shrink-0">
                                    <motion.span
                                        whileHover={{ rotate: 6, scale: 1.08 }}
                                        whileTap={{ scale: 0.94 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                        className="relative flex h-full w-full items-center justify-center overflow-hidden"
                                    >
                                        <img src={logo} alt="Dualis Team logo" className="h-full w-full rounded-full object-cover" />
                                    </motion.span>
                                </span>
                                <span className="hidden sm:inline df-float">Dualis Team</span>
                            </a>

                            {/* Desktop nav — sliding shared-layout indicator + underline hover */}
                            <nav className="df-nav hidden md:flex items-center gap-1 text-sm font-medium">
                                {NAV_LINKS.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.to === '/'}
                                        onClick={() => setMenuOpen(false)}
                                        onMouseEnter={() => setHoveredLink(link.to)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className="relative px-4 py-2 rounded-full"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="df-nav-active-pill"
                                                        className="absolute inset-0 rounded-full bg-blue-500/15 border border-blue-400/30"
                                                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                                    />
                                                )}
                                                {!isActive && hoveredLink === link.to && (
                                                    <motion.span
                                                        layoutId="df-nav-hover-pill"
                                                        className="absolute inset-0 rounded-full bg-white/5"
                                                        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                                                    />
                                                )}
                                                <span
                                                    className={`relative z-10 transition-all duration-200 ${
                                                        isActive
                                                            ? 'text-slate-50'
                                                            : 'text-slate-400 hover:text-slate-100 hover:-translate-y-[1px] inline-block'
                                                    }`}
                                                >
                                                    {link.label}
                                                </span>
                                                <span className="df-link-underline" />
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </nav>

                            {/* Right group: language selector + CTA, 5px gap */}
                            <div className="flex items-center gap-[10px] shrink-0">
                                <LanguageSelector />

                                {/* CTA */}
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="df-cta group relative hidden md:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full border border-blue-400/25 text-white shrink-0 overflow-hidden transition-colors duration-200 hover:border-blue-300/50 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: 'radial-gradient(120px 40px at 20% 50%, rgba(96,165,250,0.25), transparent 70%)' }}
                                    />
                                    <span className="relative text-sm font-medium">Start a project</span>
                                    <span className="relative w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-400 shadow-[0_0_0_0_rgba(96,165,250,0.5)] transition-all duration-300 group-hover:shadow-[0_0_16px_2px_rgba(96,165,250,0.55)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-45">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                    </span>
                                </motion.a>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setMenuOpen((open) => !open)}
                                className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 shrink-0 rounded-full transition-colors duration-200 active:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                                aria-label="Toggle menu"
                                aria-expanded={menuOpen}
                            >
                                <span
                                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-transform duration-300 ease-out ${
                                        menuOpen ? 'translate-y-[7px] rotate-45' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-all duration-200 ${
                                        menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-transform duration-300 ease-out ${
                                        menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu — staggered entrance */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                variants={mobileListVariants}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="df-nav md:hidden mt-3 rounded-3xl border border-blue-400/15 bg-gradient-to-b from-[#0A1226] to-[#040711] backdrop-blur-xl shadow-[0_12px_45px_-10px_rgba(0,0,0,0.85)] px-3 py-3 flex flex-col gap-1 overflow-hidden"
                            >
                                {NAV_LINKS.map((link) => (
                                    <motion.div key={link.to} variants={mobileItemVariants}>
                                        <NavLink
                                            to={link.to}
                                            end={link.to === '/'}
                                            onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `df-mobile-item flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-colors duration-200 ${
                                                    isActive
                                                        ? 'text-slate-50 bg-blue-500/15 font-medium border border-blue-400/20'
                                                        : 'text-slate-400 active:text-slate-100'
                                                }`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <span className="relative z-10">{link.label}</span>
                                                    {isActive && (
                                                        <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-blue-400 df-float" />
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    </motion.div>
                                ))}
                                <motion.a
                                    variants={mobileItemVariants}
                                    whileTap={{ scale: 0.97 }}
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="df-cta mt-1 flex items-center justify-between rounded-xl border border-blue-400/25 pl-4 pr-1.5 py-1.5 transition-colors duration-200 active:bg-blue-500/10"
                                >
                                    <span className="text-white font-medium">Start a project</span>
                                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                    </span>
                                </motion.a>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </motion.header>
            </div>

            {/* Spacer so page content never sits behind the fixed header */}
            <div className="w-full h-[84px]" aria-hidden="true" />
        </>
    );
};

export default Header;