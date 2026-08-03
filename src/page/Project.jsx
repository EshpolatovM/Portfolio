import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import useGsapReveal from '../hooks/useGsapReveal.js';
import { PROJECTS } from '../data/projects.js';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ROLES = {
    designer: 'Dizayn yetakchi',
    engineer: 'Muhandislik yetakchi',
};

const Project = () => {
    const pageRef = useRef(null);
    const [active, setActive] = useState(0);
    useGsapReveal(pageRef);

    const current = PROJECTS[active];

    return (
        <div className="project-shell" ref={pageRef}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');
        .project-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .project-shell .df-nav,
        .project-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .project-shell .df-glass {
          background: linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        @keyframes df-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .project-shell .df-marquee-track { animation: df-marquee 30s linear infinite; }
        .project-shell .df-marquee-wrap:hover .df-marquee-track { animation-play-state: paused; }
        .project-shell .df-marquee-wrap {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }

        @keyframes df-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .project-shell .df-float-slow { animation: df-float 6s ease-in-out infinite; }

        .project-shell .df-row-line { transition: background-color 0.4s ease, border-color 0.4s ease; }
        .project-shell .df-row-line:hover { background: linear-gradient(90deg, rgba(255,255,255,0.04), transparent 80%); }

        @media (prefers-reduced-motion: reduce) {
          .project-shell * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pt-20 pb-14">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-blue-600/15 blur-[130px]"
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl"
                >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <motion.p variants={item} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80">
                            Portfolio · 2020 — 2026
                        </motion.p>
                        <motion.div variants={item} className="flex items-center gap-3">
                            <span className="df-cta text-xs text-slate-500">{String(PROJECTS.length).padStart(2, '0')} loyiha</span>
                            <span className="w-1 h-1 rounded-full bg-blue-400/60" />
                            <span className="df-cta text-xs text-slate-500">2 rol</span>
                            <span className="w-1 h-1 rounded-full bg-blue-400/60" />
                            <span className="df-cta text-xs text-slate-500">1 jamoa</span>
                        </motion.div>
                    </div>

                    <motion.h1 variants={item} className="df-logo mt-6 text-5xl md:text-8xl leading-[1.02] text-slate-50 max-w-4xl">
                        Tanlangan{' '}
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>
                            ishlar.
                        </span>
                    </motion.h1>

                    <motion.div variants={item} className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <p className="df-nav max-w-md text-lg text-slate-400 leading-relaxed">
                            Har biri bitta dizayner va bitta muhandisning yelkama-yelka mehnati. Quyidagi ro'yxatdan birini tanlang — tafsilot yon panelda ochiladi.
                        </p>
                        <div className="flex items-center gap-2 text-slate-600">
                            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                            <span className="df-cta text-sm uppercase tracking-[0.15em]">Hover · Tanlang</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= MARQUEE ================= */}
            <div className="df-marquee-wrap relative overflow-hidden py-6 border-y border-white/[0.06]">
                <div className="flex w-max items-center df-marquee-track">
                    {Array.from({ length: 2 }).map((_, loop) => (
                        <div key={loop} className="flex items-center">
                            {PROJECTS.map((p) => (
                                <span
                                    key={`${p.title}-${loop}`}
                                    className="df-logo text-2xl md:text-3xl text-white/[0.14] whitespace-nowrap mx-6"
                                >
                                    {p.title}
                                    <span className="mx-6 text-blue-400/30">✦</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= SHOWCASE ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
                    {/* List */}
                    <div>
                        {PROJECTS.map(({ title, category, tags, desc, accent, featured }, i) => {
                            const isActive = i === active;
                            return (
                                <motion.button
                                    key={title}
                                    data-reveal
                                    data-reveal-delay={String(i * 0.06)}
                                    type="button"
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    onClick={() => setActive(i)}
                                    className="df-row-line group relative block w-full text-left rounded-2xl px-2 md:px-4 -mx-2 md:-mx-4 py-7 border-b border-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                                >
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex items-center gap-5 md:gap-8 min-w-0">
                                            <span
                                                className="df-cta text-sm md:text-base tabular-nums transition-colors duration-300 shrink-0"
                                                style={{ color: isActive ? accent : 'rgba(255,255,255,0.25)' }}
                                            >
                                                {i + 1}
                                            </span>
                                            <div className="min-w-0">
                                                <h3
                                                    className="df-logo text-3xl md:text-5xl text-slate-100 transition-all duration-300 truncate"
                                                    style={isActive ? { color: accent } : undefined}
                                                >
                                                    {title}
                                                </h3>
                                                <p className="df-cta mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                                                    {category}
                                                    {featured && (
                                                        <span className="ml-3 inline-flex items-center gap-1 text-blue-300/90">
                                                            <Star className="w-3 h-3 fill-current" /> Featured
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 shrink-0">
                                            <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-[220px]">
                                                {tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="df-nav text-xs text-slate-500 rounded-full border border-white/10 px-3 py-1">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span
                                                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                                                style={{
                                                    backgroundColor: isActive ? accent : 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                }}
                                            >
                                                <ArrowUpRight
                                                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
                                                    style={{ color: isActive ? '#040711' : 'rgba(255,255,255,0.4)' }}
                                                    strokeWidth={2.25}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <p className="df-nav md:hidden mt-4 text-sm text-slate-400 leading-relaxed">{desc}</p>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Sticky preview */}
                    <div className="lg:self-start lg:sticky lg:top-28">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="df-glass rounded-[36px] overflow-hidden"
                                style={{ borderTop: `2px solid ${current.accent}55` }}
                            >
                                <div
                                    className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center"
                                    style={{ background: `linear-gradient(135deg, ${current.accent}2E, ${current.accent}0A 55%, transparent)` }}
                                >
                                    <div
                                        aria-hidden="true"
                                        className="df-float-slow absolute w-40 h-40 rounded-full blur-[60px] opacity-60"
                                        style={{ background: `${current.accent}40` }}
                                    />
                                    <motion.span
                                        initial={{ scale: 0.7, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-[28px] flex items-center justify-center bg-white/10 backdrop-blur border border-white/15"
                                        style={{ color: current.accent }}
                                    >
                                        <current.Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                                    </motion.span>
                                    <span className="absolute top-5 right-6 df-cta text-sm tabular-nums text-white/30">
                                        {active + 1}/{PROJECTS.length}
                                    </span>
                                </div>

                                <div className="p-7 md:p-8">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="df-cta text-xs uppercase tracking-[0.2em]" style={{ color: current.accent }}>
                                            {current.category}
                                        </p>
                                        <p className="df-nav text-xs text-slate-500">{ROLES[current.lead]}</p>
                                    </div>
                                    <h2 className="df-logo mt-3 text-3xl md:text-4xl text-slate-50">{current.title}</h2>
                                    <p className="df-nav mt-3 text-slate-400 leading-relaxed">{current.desc}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {current.tags.map((tag) => (
                                            <span key={tag} className="df-nav text-xs text-slate-300 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 text-blue-300/90">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                                        <span className="df-cta text-sm font-medium">Case study tez kunda</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-28">
                <div data-reveal className="df-glass relative overflow-hidden rounded-[40px] px-6 md:px-14 py-14 md:py-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]"
                    />
                    <div className="relative flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
                        <div className="flex-1">
                            <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-4">Keyingi qadam</p>
                            <h2 className="df-logo text-4xl md:text-6xl leading-[1.05] text-slate-50 max-w-xl">
                                Keyingi loyiha{' '}
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>
                                    sizniki
                                </span>{' '}
                                bo'lishi mumkin.
                            </h2>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/contact"
                                    className="df-cta group relative inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                                >
                                    <span className="relative z-10 text-sm font-medium text-white">Bog'lanish</span>
                                    <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                    </span>
                                </Link>
                                <Link
                                    to="/about"
                                    className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-300/50 hover:bg-blue-400/10 hover:-translate-y-0.5"
                                >
                                    Biz haqimizda
                                </Link>
                            </div>
                        </div>

                        {/* Rotating circular CTA */}
                        <Link
                            to="/contact"
                            className="df-cta group relative w-36 h-36 md:w-40 md:h-40 shrink-0 mx-auto md:mx-0 rounded-full flex items-center justify-center"
                            aria-label="Loyihani boshlash"
                        >
                            <motion.span
                                aria-hidden="true"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0"
                            >
                                <svg viewBox="0 0 120 120" className="w-full h-full">
                                    <defs>
                                        <path id="df-circle-path" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                                    </defs>
                                    <text fontSize="10.5" letterSpacing="2.5" fill="rgba(255,255,255,0.45)" className="df-cta">
                                        <textPath href="#df-circle-path">KEYINGI LOYIHA SIZNIKI • BOG'LANISH •</textPath>
                                    </text>
                                </svg>
                            </motion.span>
                            <span className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45 group-hover:shadow-[0_0_24px_rgba(96,165,250,0.55)]">
                                <ArrowUpRight className="w-6 h-6" strokeWidth={2.25} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
