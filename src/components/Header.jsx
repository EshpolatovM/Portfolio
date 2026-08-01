import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/project', label: 'Project' },
    { to: '/contact', label: 'Contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-4 md:top-5 inset-x-0 z-50 flex justify-center px-4">
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');
          .df-logo { font-family: 'Sora', sans-serif; }
          .df-nav { font-family: 'Manrope', sans-serif; }
          .df-cta { font-family: 'Space Grotesk', sans-serif; }
        `}</style>

                <header className="w-full   max-w-5xl">
                    {/* Rotating gradient border ring — the only animation on this component */}
                    <div className="relative rounded-full p-[1.5px] overflow-hidden">
                        <motion.div
                            aria-hidden="true"
                            className="absolute -inset-[60%]"
                            style={{
                                background:
                                    'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        />

                        <div className="relative flex items-center justify-between gap-4 rounded-full bg-gradient-to-b from-[#050912] to-[#02040A] backdrop-blur-xl shadow-[0_8px_36px_-14px_rgba(0,0,0,0.75)] px-5 md:px-6 py-3 md:py-3.5">
                            {/* Logo */}
                            <a
                                href="#top"
                                className="df-logo font-semibold text-lg tracking-tight text-slate-50 flex items-center gap-3 shrink-0"
                            >
                                <span className="relative flex h-20 w-20 rounded-full overflow-hidden group/logo">
                                    <span
                                        aria-hidden="true"
                                        className="absolute -inset-[150%] opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100"
                                        style={{
                                            background:
                                                'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                                            animation: 'spin-slow 3s linear infinite',
                                        }}
                                    />
                                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-900/95 border border-white/10 p-1.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
                                        <img src={logo} alt="Dualis Team logo" className="h-full w-full rounded-full object-cover" />
                                    </span>
                                </span>
                                <span className="hidden sm:inline">Dualis Team</span>
                            </a>

                            {/* Desktop nav — plain hover/active states, no motion */}
                            <nav className="df-nav hidden md:flex items-center gap-1 text-base font-medium">
                                {NAV_LINKS.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.to === '/'}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `px-5 py-2 rounded-full transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-slate-50 bg-blue-500/15 border border-blue-400/25'
                                                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>

                            {/* CTA — static shape, plain hover color change */}
                            <a
                                href="#contact"
                                className="df-cta hidden md:inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full border border-blue-400/25 text-white shrink-0 transition-colors duration-200 hover:bg-blue-500/10"
                            >
                                <span className="text-sm font-medium">Start a project</span>
                                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                </span>
                            </a>

                            {/* Mobile hamburger — plain, no motion */}
                            <button
                                onClick={() => setMenuOpen((open) => !open)}
                                className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 shrink-0"
                                aria-label="Toggle menu"
                                aria-expanded={menuOpen}
                            >
                <span
                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-transform duration-200 ${
                        menuOpen ? 'translate-y-[7px] rotate-45' : ''
                    }`}
                />
                                <span
                                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-opacity duration-200 ${
                                        menuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-[2px] bg-slate-50 rounded-full transition-transform duration-200 ${
                                        menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu — plain conditional render, no motion */}
                    {menuOpen && (
                        <nav className="df-nav md:hidden mt-3 rounded-3xl border border-blue-400/10 bg-gradient-to-b from-[#0B142B] to-[#080F22] backdrop-blur-xl shadow-[0_12px_45px_-10px_rgba(0,0,0,0.8)] px-3 py-3 flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-xl text-base transition-colors ${
                                            isActive ? 'text-slate-50 bg-blue-500/15 font-medium' : 'text-slate-400'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="df-cta mt-1 flex items-center justify-between rounded-xl border border-blue-400/25 pl-4 pr-1.5 py-1.5"
                            >
                                <span className="text-white font-medium">Start a project</span>
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                </span>
                            </a>
                        </nav>
                    )}
                </header>
            </div>

            {/* Spacer so page content (hero, etc.) never sits behind the fixed header */}
            <div className="w-full h-[100px]" aria-hidden="true" />
        </>
    );
};

export default Header;