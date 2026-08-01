import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    ExternalLink,
    Layers,
    Zap,
    Code2,
    Smartphone,
    Wallet,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects.js';
import { useLanguage } from '../context/index.js';

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const TECH = ['React', 'Node.js', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'Linux', 'WebSocket', 'IoT'];

const CAP_ICONS = [Layers, Zap];

const ProjectCard = ({ project, index }) => {
    const { lang } = useLanguage();
    const { Icon, title, category, tags, desc, from, to } = project;
    const titleText = title[lang];
    const categoryText = category[lang];
    const tagsText = tags[lang];
    const descText = desc[lang];

    const handleMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    return (
        <motion.article
            variants={item}
            onMouseMove={handleMove}
            className="df-card group relative overflow-hidden rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-6 transition-all duration-300 hover:-translate-y-1.5"
        >
            {/* Cursor-follow glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${from}2b, transparent 65%)` }}
            />

            {/* Index watermark */}
            <span
                className="df-cta pointer-events-none absolute top-4 right-5 text-6xl font-bold bg-clip-text text-transparent select-none"
                style={{ backgroundImage: `linear-gradient(135deg, ${from}22, ${to}33)` }}
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Preview panel */}
            <div
                className="relative h-40 rounded-2xl overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${from}26, ${to}38)` }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(255,255,255,0.10),transparent_55%)]" />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 -right-6 w-44 h-44 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                />
                <motion.span
                    className="absolute bottom-3 right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/20"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    style={{ boxShadow: `0 0 40px -8px ${from}` }}
                >
                    <Icon className="w-8 h-8" strokeWidth={1.6} />
                </motion.span>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
                    {tagsText.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="df-nav text-[10px] text-white/80 rounded-full bg-black/25 backdrop-blur px-2.5 py-1 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Body */}
            <div className="relative mt-5">
                <div className="flex items-center justify-between gap-3">
                    <p className="df-cta text-xs uppercase tracking-[0.2em] flex items-center gap-2" style={{ color: to }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: `linear-gradient(135deg, ${from}, ${to})`, boxShadow: `0 0 10px ${from}` }} />
                        {categoryText}
                    </p>
                    <ArrowUpRight className="w-5 h-5 text-(--text-faint) transition-all duration-300 group-hover:text-(--text-strong) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="df-logo mt-2 text-2xl font-semibold text-(--text-strong) tracking-tight">{titleText}</h3>
                <p className="df-nav mt-2 text-sm text-(--text-soft) leading-relaxed">{descText}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tagsText.map((tag) => (
                        <span key={tag} className="df-chip df-nav text-xs text-(--text-soft) rounded-full bg-(--chip-bg) px-3 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Accent bar */}
            <span
                className="absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
            />
        </motion.article>
    );
};

const Project = () => {
    const { lang, t } = useLanguage();
    const [active, setActive] = useState('all');

    const categories = [
        { key: 'all', label: t('project.allBtn') },
        ...Array.from(new Set(PROJECTS.slice(1).map((p) => p.category.uz))).map((key) => ({
            key,
            label: PROJECTS.slice(1).find((p) => p.category.uz === key).category[lang],
        })),
    ];

    const featured = PROJECTS[0];
    const filtered =
        active === 'all'
            ? PROJECTS.slice(1)
            : PROJECTS.slice(1).filter((p) => p.category.uz === active);

    const capabilities = t('project.capabilities');

    const { Icon: FIcon, title: FTitle, category: FCategory, tags: FTags, desc: FDesc, from: FFrom, to: FTo } = featured;

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pt-20 md:pt-28 pb-20">
                <div className="df-grid-bg pointer-events-none absolute inset-x-0 top-0 bottom-0" aria-hidden="true" />

                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-blue-600/25 blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 25, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -25, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-8"
                >
                    <div className="flex flex-col items-start text-left">
                        <motion.h1 variants={item} className="df-logo mt-0 text-3xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-(--text-strong) max-w-3xl">
                            {t('project.heroTitle1')}{' '}
                            <motion.span
                                className="df-grad-text drop-shadow-[0_0_35px_rgba(79,216,232,0.3)]"
                                style={{
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {t('project.heroGrad')}
                            </motion.span>{' '}
                            {t('project.heroTitle2')}
                        </motion.h1>

                        <motion.p variants={item} className="df-nav mt-6 max-w-xl text-lg text-(--text-soft) leading-relaxed">
                            {t('project.heroSubtitle')}
                        </motion.p>

                        <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
                            {TECH.map((tech) => (
                                <span key={tech} className="df-chip df-nav text-sm text-(--text-soft) rounded-full bg-(--chip-bg) px-4 py-1.5">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ===== Project "stack" composition ===== */}
                    <motion.div variants={item} className="relative flex items-center justify-center py-12 lg:py-4">
                        <div className="relative">
                            {/* Glow behind the stack */}
                            <motion.div
                                aria-hidden="true"
                                className="absolute -inset-10 rounded-full blur-3xl opacity-50"
                                style={{ background: 'linear-gradient(135deg, #2563EB, #22D3EE)' }}
                                animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.06, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            {/* Back card — light transparent border + glow */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[2.5rem] border border-blue-400/10 bg-(--soft-bg) backdrop-blur-sm shadow-[0_0_45px_-14px_rgba(56,189,248,0.35)]"
                                style={{ transform: 'rotate(8deg) translate(18px, -14px)' }}
                            />
                            {/* Mid card — light transparent border + glow */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/10 bg-(--soft-bg) backdrop-blur-sm shadow-[0_0_45px_-14px_rgba(56,189,248,0.35)]"
                                style={{ transform: 'rotate(-6deg) translate(-18px, 10px)' }}
                            />

                            {/* Front card — project mockup preview */}
                            <motion.div
                                className="relative w-64 md:w-72 rounded-[2rem] overflow-hidden bg-gradient-to-b from-(--surface-a) to-(--surface-b) border border-(--border)"
                                style={{ boxShadow: '0 0 70px -15px rgba(79,216,232,0.4)' }}
                                whileHover={{ rotate: 2, scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                            >
                                <motion.div
                                    aria-hidden="true"
                                    className="absolute inset-0 opacity-60"
                                    style={{ background: 'radial-gradient(circle at 30% 20%, rgba(37,99,235,0.45), transparent 60%), radial-gradient(circle at 80% 90%, rgba(34,211,238,0.35), transparent 55%)' }}
                                    animate={{ opacity: [0.4, 0.75, 0.4] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                />

                                {/* Mini browser bar */}
                                <div className="relative flex items-center gap-1.5 px-4 py-2.5 border-b border-(--border)">
                                    <span className="w-2 h-2 rounded-full bg-rose-400/70" />
                                    <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                                    <span className="ml-2 h-3.5 flex-1 rounded-md bg-(--chip-bg)" />
                                </div>

                                {/* Mockup content */}
                                <div className="relative p-4 space-y-3">
                                    <div className="h-20 rounded-xl bg-gradient-to-br from-blue-600/40 to-cyan-500/30 border border-(--border) flex items-center justify-center">
                                        <Wallet className="w-7 h-7 text-white/90" strokeWidth={1.6} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="h-2.5 w-3/4 rounded-full bg-(--chip-bg)" />
                                        <div className="h-2.5 w-1/2 rounded-full bg-(--chip-bg)" />
                                    </div>
                                    <div className="flex gap-1.5">
                                        <span className="px-2 py-0.5 text-[9px] rounded-full bg-blue-500/20 text-cyan-200 border border-blue-400/25">React</span>
                                        <span className="px-2 py-0.5 text-[9px] rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/25">UI/UX</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating mini tiles */}
                            {[
                                { Icon: Layers, className: '-top-6 -left-8', delay: 0 },
                                { Icon: Code2, className: 'top-1/4 -right-10', delay: 1.2 },
                                { Icon: Smartphone, className: '-bottom-6 -left-10', delay: 0.6 },
                                { Icon: Zap, className: '-bottom-4 right-2', delay: 1.8 },
                            ].map(({ Icon, className, delay }, i) => (
                                <motion.span
                                    key={i}
                                    className={`absolute w-12 h-12 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-(--bg-a)/90 backdrop-blur border border-(--border) shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] ${className}`}
                                    animate={{ y: [0, -8, 0], rotate: [0, i % 2 === 0 ? 4 : -4, 0] }}
                                    transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= FEATURED PROJECT ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="df-card group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-(--surface-a) to-(--surface-b)"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Preview */}
                        <div className="relative min-h-[280px] overflow-hidden p-8 md:p-10 flex items-center justify-center">
                            <motion.div
                                aria-hidden="true"
                                className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                                style={{ background: `linear-gradient(135deg, ${FFrom}2e, ${FTo}40)` }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl"
                                style={{ background: `linear-gradient(135deg, ${FFrom}, ${FTo})` }}
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="relative w-36 h-36 rounded-[2rem] flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/25"
                                style={{ boxShadow: `0 0 80px -10px ${FFrom}` }}
                                whileHover={{ rotate: 6, scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                            >
                                <FIcon className="w-16 h-16" strokeWidth={1.4} />
                            </motion.div>
                        </div>

                        {/* Details */}
                        <div className="relative p-8 md:p-10 lg:pl-4 flex flex-col justify-center">
                            <div className="flex items-center gap-3">
                                <p className="df-cta text-xs uppercase tracking-[0.25em]" style={{ color: FTo }}>
                                    {t('project.featuredLabel')}
                                </p>
                                <span className="h-px flex-1 bg-gradient-to-r from-(--border) to-transparent" />
                            </div>
                            <h2 className="df-logo mt-4 text-3xl md:text-5xl font-bold text-(--text-strong) tracking-tight">{FTitle[lang]}</h2>
                            <p className="df-cta mt-2 text-sm uppercase tracking-[0.2em] text-(--text-muted)">{FCategory[lang]}</p>
                            <p className="df-nav mt-5 text-lg text-(--text-soft) leading-relaxed max-w-md">{FDesc[lang]}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {FTags[lang].map((tag) => (
                                    <span key={tag} className="df-chip df-nav text-sm text-(--text-soft) rounded-full bg-(--chip-bg) px-4 py-1.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to="/contact"
                                className="df-cta group/btn mt-8 inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 w-fit overflow-hidden transition-all duration-300 hover:border-cyan-300/60 hover:-translate-y-0.5 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)]"
                            >
                                <span className="relative z-10 text-sm font-medium text-white">{t('project.moreBtn')}</span>
                                <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 group-hover/btn:rotate-45">
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ================= FILTER + GRID ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-between gap-4 mb-10"
                >
                    <h2 className="df-logo text-3xl md:text-4xl font-bold text-(--text-strong) tracking-tight">
                        {t('project.gridTitle')}{' '}
                        <span className="df-grad-text">{t('project.gridGrad')}</span>
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActive(cat.key)}
                                className={`df-nav text-sm rounded-full px-4 py-2 transition-all duration-300 ${
                                    active === cat.key
                                        ? 'text-(--text-strong) bg-blue-500/15 border border-blue-400/40 shadow-[0_0_20px_-5px_rgba(56,189,248,0.6)]'
                                        : 'text-(--text-soft) border border-(--border) hover:text-(--text-strong) hover:border-(--border) hover:bg-(--chip-bg)'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    key={active}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.title.uz} project={project} index={i + 2} />
                    ))}
                </motion.div>

                {filtered.length === 0 && (
                    <p className="df-nav text-center text-(--text-muted) py-16">{t('project.emptyFilter')}</p>
                )}
            </section>

            {/* ================= CAPABILITIES ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {capabilities.map((cap, i) => {
                        const Icon = CAP_ICONS[i];
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="df-card group relative overflow-hidden rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-8"
                            >
                                <motion.div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'linear-gradient(135deg, #2563EB, #22D3EE)' }}
                                />
                                <span className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </span>
                                <h3 className="df-logo relative mt-5 text-xl font-semibold text-(--text-strong)">{cap.title}</h3>
                                <p className="df-nav relative mt-2 text-(--text-soft) leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-[2rem] p-[1.5px] overflow-hidden"
                >
                    <motion.div
                        aria-hidden="true"
                        className="absolute -inset-[60%]"
                        style={{
                            background: 'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="relative rounded-[calc(2rem-1.5px)] bg-gradient-to-b from-(--deep-a) to-(--deep-b) px-6 md:px-14 py-16 text-center overflow-hidden">
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-3xl"
                            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-3xl"
                            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
                            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <div className="relative">
                            <h2 className="df-logo text-3xl md:text-5xl font-bold leading-[1.1] text-(--text-strong) max-w-2xl mx-auto">
                                {t('project.ctaTitle')}{' '}
                                <motion.span
                                    className="df-grad-text"
                                    style={{
                                        backgroundSize: '200% 100%',
                                    }}
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    {t('project.ctaGrad')}
                                </motion.span>
                            </h2>
                            <p className="df-nav mt-4 text-lg text-(--text-soft) max-w-xl mx-auto">
                                {t('project.ctaSubtitle')}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                                >
                                    <span className="relative z-10 text-sm font-medium text-white">{t('common.getInTouch')}</span>
                                    <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                    </span>
                                </Link>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="df-cta group inline-flex items-center gap-2 rounded-full border border-(--border) px-6 py-3 text-sm font-medium text-(--text-soft) transition-all duration-300 hover:text-(--text-strong) hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:-translate-y-0.5"
                                >
                                    GitHub
                                    <ExternalLink className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" strokeWidth={2.25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Project;
