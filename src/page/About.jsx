import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Shield,
    Award,
    Users,
    Terminal,
    MapPin,
    Calendar,
    Briefcase,
    Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/index.js';

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const VALUES_ICONS = [Shield, Award, Users, Terminal];

const TEAM = [
    { name: "Eshpo'latov Miraziz", birth: '2012', from: '#2563EB', to: '#22D3EE' },
    { name: 'Toirov Asadbek', birth: '2011', from: '#7C3AED', to: '#EC4899' },
];

const SKILL_ITEMS = [
    ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'],
    ['Node.js', 'Express.js', 'Python', 'Django'],
    ['MongoDB', 'PostgreSQL', 'SQL'],
    ['Redux', 'Reducer — global state'],
    ['Linux OS'],
];

const STAT_VALUES = ['2', '1.5+', '10+', 'Linux'];

const SectionHead = ({ eyebrow, title, gradient }) => (
    <motion.div variants={item}>
        <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
        <h2 className="df-logo text-3xl md:text-5xl font-semibold text-(--text-strong) leading-[1.1]">
            {title}{' '}
            <span className="df-grad-text">{gradient}</span>
        </h2>
        <span className="mt-5 block h-px w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
    </motion.div>
);

const About = () => {
    const { t } = useLanguage();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const MAX = 60;

    const timeline = t('about.timeline');
    const values = t('about.values');
    const skillsGroups = t('about.skillsGroups');
    const stats = t('about.stats');

    const handleMouseMove = (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const rawX = (e.clientX - cx) * 0.12;
        const rawY = (e.clientY - cy) * 0.12;
        const x = Math.max(-MAX, Math.min(MAX, rawX));
        const y = Math.max(-MAX, Math.min(MAX, rawY));
        setOffset({ x, y });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <style>{`
        .df-dropcap::first-letter {
          float: left;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 4.5rem;
          line-height: 0.85;
          padding-right: 0.9rem;
          padding-top: 0.4rem;
          background: linear-gradient(90deg, var(--grad-a), var(--grad-b));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pt-16 md:pt-24 pb-24">
                {/* Grid backdrop */}
                <div className="df-grid-bg pointer-events-none absolute inset-x-0 top-0 bottom-0" aria-hidden="true" />

                {/* Ambient glows */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-blue-600/25 blur-3xl"
                    animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-cyan-500/20 blur-3xl"
                    animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Watermark */}
                <motion.span
                    aria-hidden="true"
                    className="df-logo pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] md:text-[16rem] font-bold leading-none whitespace-nowrap bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--watermark)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    DUALIS
                </motion.span>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-5xl text-center"
                >
                    <motion.p variants={item} className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-(--accent-icon)" strokeWidth={1.75} />
                        {t('about.heroEyebrow')}
                    </motion.p>

                    <motion.h1 variants={item} className="df-logo mt-0 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-(--text-strong)">
                        {t('common.titleLine1')}
                        <motion.span
                            className="block df-grad-text drop-shadow-[0_0_30px_rgba(79,216,232,0.35)]"
                            style={{
                                backgroundSize: '200% 100%',
                            }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            {t('common.titleLine2')}
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={item} className="df-nav mt-8 max-w-2xl mx-auto text-lg text-(--text-soft) leading-relaxed">
                        {t('about.heroSubtitle')}
                    </motion.p>

                    {/* Logo with rotating conic ring */}
                    <motion.div variants={item} className="mt-12 flex items-center justify-center pointer-events-none">
                        <div className="relative rounded-full p-[2px] overflow-hidden shadow-[0_0_60px_-15px_rgba(56,189,248,0.6)]">
                            <motion.div
                                aria-hidden="true"
                                className="absolute -inset-[60%]"
                                style={{
                                    background: 'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                            />
                            <div className="relative rounded-full bg-(--logo-bg) p-3">
                                <motion.img
                                    src={logo}
                                    alt="Dualis Team logo"
                                    className="w-44 md:w-56 rounded-full select-none"
                                    animate={{ x: offset.x, y: offset.y }}
                                    transition={{ type: 'spring', stiffness: 80, damping: 14, mass: 0.8 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= STORY ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="df-card relative rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl"
                    />
                    <motion.div variants={item} className="lg:col-span-4 relative">
                        <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{t('about.storyEyebrow')}</p>
                        <h2 className="df-logo text-3xl md:text-4xl font-semibold text-(--text-strong) leading-[1.15]">
                            {t('about.storyTitle')}{' '}
                            <span className="df-grad-text">{t('about.storyGrad')}</span>
                        </h2>
                        <span className="mt-5 block h-px w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />
                    </motion.div>

                    <motion.div variants={item} className="lg:col-span-8 relative">
                        <p className="df-nav df-dropcap text-lg md:text-xl text-(--text-soft) leading-relaxed">
                            {t('about.storyP1')}
                        </p>
                        <p className="df-nav mt-6 text-lg text-(--text-soft) leading-relaxed">
                            {t('about.storyP2')}
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= TIMELINE ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14"
                >
                    <SectionHead eyebrow={t('about.timelineEyebrow')} title={t('about.timelineTitle')} gradient={t('about.timelineGrad')} />
                </motion.div>

                <div className="relative ml-2 md:ml-4 pl-10 md:pl-14 space-y-14">
                    {/* Gradient glowing timeline line */}
                    <motion.div
                        aria-hidden="true"
                        className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-cyan-400/60 to-transparent shadow-[0_0_16px_rgba(56,189,248,0.8)]"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        style={{ transformOrigin: 'top' }}
                    />
                    {timeline.map((entry, i) => (
                        <motion.div
                            key={entry.year}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Glowing node */}
                            <span className="absolute -left-[45px] md:-left-[57px] top-1.5">
                                <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" style={{ animationDuration: '2.5s' }} />
                                <span className="relative block w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                            </span>
                            <p className="df-cta df-grad-text text-4xl md:text-5xl font-semibold" style={{ backgroundImage: 'linear-gradient(90deg, var(--text-muted), var(--grad-b))' }}>
                                {entry.year}
                            </p>
                            <h3 className="df-logo mt-2 text-xl font-semibold text-(--text-strong) flex items-center gap-2">
                                {entry.title}
                                <Sparkles className="w-4 h-4 text-(--accent-text)" strokeWidth={1.75} />
                            </h3>
                            <p className="df-nav mt-1 text-(--text-soft) leading-relaxed">{entry.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= VALUES ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14"
                >
                    <SectionHead eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} gradient={t('about.valuesGrad')} />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {values.map((value, i) => {
                        const Icon = VALUES_ICONS[i];
                        return (
                            <motion.div
                                key={value.title}
                                variants={item}
                                className="df-card group rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-8 overflow-hidden hover:-translate-y-1"
                            >
                                <motion.div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <span className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/30 to-cyan-500/30 shadow-[0_0_25px_-5px_rgba(56,189,248,0.6)] group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </span>
                                <h3 className="df-logo relative mt-5 text-lg font-semibold text-(--text-strong) mb-1.5">{value.title}</h3>
                                <p className="df-nav relative text-sm text-(--text-soft) leading-relaxed">{value.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* ================= TEAM ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14"
                >
                    <SectionHead eyebrow={t('about.teamEyebrow')} title={t('about.teamTitle')} gradient={t('about.teamGrad')} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TEAM.map((member) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="df-card group rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-8 overflow-hidden hover:-translate-y-1.5"
                        >
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                                style={{ background: `linear-gradient(135deg, ${member.from}33, ${member.to}55)` }}
                            />
                            <div className="relative flex items-center gap-4 mb-7">
                                <span className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-blue-500 to-cyan-400 group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.7)] transition-shadow duration-300">
                                    <span className="flex h-full w-full items-center justify-center rounded-full bg-(--bg-a) text-lg font-semibold text-white">
                                        {member.name.split(' ').map((n) => n[0]).join('')}
                                    </span>
                                </span>
                                <div>
                                    <h3 className="df-logo text-xl font-semibold text-(--text-strong)">{member.name}</h3>
                                    <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mt-1">{t('about.role')}</p>
                                </div>
                            </div>
                            <div className="df-nav relative flex flex-col gap-2.5">
                                <p className="flex items-center gap-3 text-sm text-(--text-soft)">
                                    <MapPin className="w-4 h-4 text-(--accent-icon)" strokeWidth={1.75} />
                                    {t('about.memberLocation')}
                                </p>
                                <p className="flex items-center gap-3 text-sm text-(--text-soft)">
                                    <Calendar className="w-4 h-4 text-(--accent-icon)" strokeWidth={1.75} />
                                    {member.birth} {t('about.birthLabel')}
                                </p>
                                <p className="flex items-center gap-3 text-sm text-(--text-soft)">
                                    <Briefcase className="w-4 h-4 text-(--accent-icon)" strokeWidth={1.75} />
                                    {t('about.exp')}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14"
                >
                    <SectionHead eyebrow={t('about.skillsEyebrow')} title={t('about.skillsTitle')} gradient={t('about.skillsGrad')} />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="df-card rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) px-8 md:px-10 overflow-hidden"
                >
                    {skillsGroups.map((group, i) => (
                        <motion.div
                            key={group}
                            variants={item}
                            className={`relative py-7 flex flex-col md:flex-row md:items-center gap-4 ${
                                i !== 0 ? 'bg-[linear-gradient(to_right,var(--chip-bg),transparent)]' : ''
                            }`}
                        >
                            {i !== 0 && (
                                <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/30 to-transparent" aria-hidden="true" />
                            )}
                            <p className="df-cta w-full md:w-56 shrink-0 text-sm uppercase tracking-[0.2em] text-(--text-muted) flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                                {group}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {SKILL_ITEMS[i].map((tag) => (
                                    <span
                                        key={tag}
                                        className="df-chip df-nav text-sm text-(--text-soft) rounded-full bg-(--chip-bg) px-4 py-1.5 transition-all duration-300 hover:text-(--text-strong) hover:bg-(--border-soft) hover:-translate-y-0.5 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.6)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= STATS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="df-card relative rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) overflow-hidden"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-blue-600/15 blur-3xl"
                    />
                    <div className="relative grid grid-cols-2 md:grid-cols-4">
                        {stats.map((label, i) => (
                            <div
                                key={label}
                                className="relative py-9 px-6 text-center"
                            >
                                {i !== 0 && (
                                    <span
                                        className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/30 to-transparent hidden md:block"
                                        aria-hidden="true"
                                    />
                                )}
                                <p className="df-cta df-grad-text text-4xl md:text-5xl font-semibold drop-shadow-[0_0_20px_rgba(79,216,232,0.25)]">
                                    {STAT_VALUES[i]}
                                </p>
                                <p className="df-nav mt-2 text-sm text-(--text-soft)">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
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
                            <h2 className="df-logo text-3xl md:text-5xl font-semibold leading-[1.1] text-(--text-strong) max-w-2xl mx-auto">
                                {t('about.ctaTitle')}{' '}
                                <motion.span
                                    className="df-grad-text"
                                    style={{
                                        backgroundSize: '200% 100%',
                                    }}
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    {t('about.ctaGrad')}
                                </motion.span>
                            </h2>
                            <p className="df-nav mt-4 text-lg text-(--text-soft) max-w-xl mx-auto">
                                {t('about.ctaSubtitle')}
                            </p>
                            <Link
                                to="/contact"
                                className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 mt-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 text-sm font-medium text-white">{t('common.getInTouch')}</span>
                                <motion.span
                                    className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500"
                                    whileHover={{ rotate: 45 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                >
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default About;
