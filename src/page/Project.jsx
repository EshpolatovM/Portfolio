import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import useGsapReveal from '../hooks/useGsapReveal.js';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const PROJECTS = [
    {
        title: 'Nova Finance',
        category: 'Fintech',
        tags: ['React', 'UI/UX', 'SaaS'],
        desc: 'Moliyaviy ma\'lumotlarni real vaqtda ko\'rsatadigan panel — 50+ sahifa, bitta dizayn tizimi.',
        featured: true,
    },
    {
        title: 'Atlas Logistics',
        category: 'Logistika',
        tags: ['Dashboard', 'Mobile'],
        desc: 'Yetkazib berishni kuzatish tizimi.',
    },
    {
        title: 'Vela Health',
        category: "Sog'liqni saqlash",
        tags: ['Telemed', 'Design System'],
        desc: 'Telemeditsina platformasi.',
    },
    {
        title: 'Zamon Edu',
        category: 'Ta\'lim',
        tags: ['LMS', 'Mobile'],
        desc: 'Masofaviy ta\'lim platformasi.',
    },
    {
        title: 'Orzu Travel',
        category: 'Turizm',
        tags: ['Booking', 'Web'],
        desc: 'Sayyohlik agentligi uchun bron tizimi.',
    },
    {
        title: 'PaySwift',
        category: 'To\'lovlar',
        tags: ['Fintech', 'Security'],
        desc: 'Xavfsiz to\'lovlar uchun mobil ilova.',
    },
];

const Project = () => {
    const pageRef = useRef(null);
    useGsapReveal(pageRef);

    return (
        <div className="project-shell" ref={pageRef}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&family=Sora:wght@500;600;700&family=Manrope:wght@500;600;700&display=swap');
        .project-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .project-shell .df-nav,
        .project-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .project-shell section:not(:first-of-type) .df-logo { font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-style: normal; font-weight: 600; letter-spacing: -0.02em; }
        .project-shell section:not(:first-of-type) .df-nav,
        .project-shell section:not(:first-of-type) .df-cta { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .project-shell .df-glass {
          background: linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pb-16 pt-16">
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full bg-blue-600/15 blur-[120px]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl text-center"
                >
                    <motion.p variants={item} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-5">
                        Selected works
                    </motion.p>
                    <motion.h1 variants={item} className="df-logo mt-0 text-5xl md:text-7xl leading-[1.05] text-slate-50 max-w-4xl mx-auto">
                        Bizning{' '}
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>
                            ishlarimiz.
                        </span>
                    </motion.h1>
                    <motion.p variants={item} className="df-nav mt-6 max-w-lg mx-auto text-lg text-slate-400 leading-relaxed">
                        Kichik tanlov — har biri juftlik mehnati bilan yaratilgan.
                    </motion.p>
                </motion.div>
            </section>

            {/* ================= BENTO GRID ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(220px,auto)] grid-flow-dense gap-5">
                    {PROJECTS.map(({ title, category, tags, desc, featured }, i) => (
                        <motion.article
                            key={title}
                            data-reveal
                            data-reveal-delay={String(i * 0.05)}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                            className={`df-glass group relative rounded-[28px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.4)] ${
                                featured ? 'md:col-span-2 md:row-span-2' : ''
                            }`}
                        >
                            {/* Visual */}
                            <div
                                className={`relative overflow-hidden ${
                                    featured ? 'h-64 md:h-80' : 'h-40'
                                } bg-gradient-to-br from-blue-500/20 to-blue-300/5`}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"
                                    initial={false}
                                    whileHover={{ opacity: [0, 0.6, 0] }}
                                    transition={{ duration: 1 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        whileHover={{ rotate: 90, scale: 1.12 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/15"
                                    >
                                        <Sparkles className="w-8 h-8" strokeWidth={1.75} />
                                    </motion.span>
                                </div>
                                <span className="absolute top-4 right-4 df-cta text-xs text-slate-200 bg-black/30 backdrop-blur rounded-full px-3 py-1">
                                    0{i + 1}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80">
                                        {category}
                                        {featured && <span className="ml-2 text-slate-400">· Featured</span>}
                                    </p>
                                    <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-300 group-hover:border-blue-400/40">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                                    </span>
                                </div>
                                <h3 className="df-logo mt-2 text-2xl md:text-3xl text-slate-50">{title}</h3>
                                {featured && <p className="df-nav mt-3 text-slate-400 leading-relaxed">{desc}</p>}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span key={tag} className="df-nav text-xs text-slate-400 rounded-full border border-white/10 px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-28">
                <div data-reveal className="df-glass relative overflow-hidden rounded-[40px] px-6 md:px-14 py-14 text-center">
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className="relative">
                        <h2 className="df-logo text-3xl md:text-5xl leading-[1.1] text-slate-50 max-w-2xl mx-auto">
                            Keyingi loyiha —{' '}
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>
                                sizniki bo'lishi mumkin.
                            </span>
                        </h2>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                </div>
            </section>
        </div>
    );
};

export default Project;
