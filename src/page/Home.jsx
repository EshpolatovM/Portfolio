import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Palette,
    Code2,
    Rocket,
    Smartphone,
    PenTool,
    Layers,
    Zap,
    Shield,
    Users,
    Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { PROJECTS } from '../data/projects.js';
import { useLanguage } from '../context/index.js';

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewContainer = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const viewItem = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const SERVICES_ICONS = [Palette, Code2, Smartphone, Rocket];
const PROCESS_ICONS = [Layers, PenTool, Code2, Zap];
const WHY_US_ICONS = [Shield, Zap, Users];

const Home = () => {
    const { lang, t } = useLanguage();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const MAX = 60;

    const stats = t('home.stats');
    const services = t('home.services');
    const process = t('home.process');
    const testimonials = t('home.testimonials');
    const whyUs = t('home.whyUs');

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
        @keyframes df-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .df-marquee-track { animation: df-marquee 22s linear infinite; }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pb-24 pt-10">
                {/* Ambient glows */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full bg-blue-600/20 blur-3xl"
                    animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full bg-cyan-500/15 blur-3xl"
                    animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 min-h-[calc(100vh-200px)]"
                >
                    {/* Left: headline + actions */}
                    <div className="flex flex-col items-start text-left">
                        <motion.h1
                            variants={item}
                            className="df-logo mt-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-(--text-strong)"
                        >
                            {t('common.titleLine1')}
                            <motion.span
                                className="block df-grad-text"
                                style={{
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {t('common.titleLine2')}
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={item} className="df-nav mt-6 max-w-md text-lg text-(--text-soft) leading-relaxed">
                            {t('home.hero.subtitle')}
                        </motion.p>

                        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="df-cta group relative inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden shadow-[0_0_0px_rgba(56,189,248,0)] transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                            >
                                <motion.span
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(90deg, #0B1730, #1D4ED8, #0B1F33)',
                                        transformOrigin: 'right',
                                    }}
                                    initial={false}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                />
                                <span className="relative z-10 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-[1.03]">
                                    {t('common.startProject')}
                                </span>
                                <motion.span
                                    className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.6)]"
                                    whileHover={{ rotate: 45, scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                >
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                </motion.span>
                            </Link>

                            <Link
                                to="/contact"
                                className="df-cta group inline-flex items-center gap-2 rounded-full border border-(--border) px-6 py-3 text-sm font-medium text-(--text-soft) transition-all duration-300 hover:text-(--text-strong) hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.5)]"
                            >
                                {t('common.getInTouch')}
                                <ArrowUpRight
                                    className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                    strokeWidth={2.25}
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: balanced logo composition with symmetric glow */}
                    <motion.div
                        variants={item}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative flex items-center justify-center pointer-events-none">
                            {/* Symmetric ambient glows — fill the dead space */}
                            <motion.div
                                aria-hidden="true"
                                className="absolute w-[26rem] h-[26rem] md:w-[34rem] md:h-[34rem] rounded-full bg-blue-600/20 blur-3xl"
                                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.95, 0.6] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="absolute w-[20rem] h-[20rem] md:w-[27rem] md:h-[27rem] rounded-full bg-cyan-500/15 blur-3xl"
                                animate={{ scale: [1.05, 1, 1.05], opacity: [0.5, 0.85, 0.5] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Gradient ring + logo */}
                            <div className="relative rounded-full p-[2.5px] bg-gradient-to-br from-blue-500/60 via-cyan-400/30 to-blue-500/60 shadow-[0_0_70px_-15px_rgba(56,189,248,0.5)]">
                                <motion.img
                                    src={logo}
                                    alt="Dualis Team logo"
                                    className="block w-72 md:w-[26rem] lg:w-[30rem] rounded-full select-none"
                                    animate={{ x: offset.x, y: offset.y }}
                                    transition={{ type: 'spring', stiffness: 80, damping: 14, mass: 0.8 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= MARQUEE ================= */}
            <div className="relative overflow-hidden border-y border-(--border-soft) bg-(--soft-bg) py-3">
                <div className="flex whitespace-nowrap df-marquee-track w-max">
                    {Array.from({ length: 2 }).map((_, loop) => (
                        <div key={loop} className="flex items-center">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <span key={i} className="df-cta flex items-center gap-3 mx-4 text-sm tracking-wide text-(--text-muted)">
                    DUALIS TEAM
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    TWO MINDS, ONE VISION
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    DESIGN &amp; ENGINEERING
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= STATS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={viewItem}
                            className="df-card rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-6 text-center transition-colors duration-300"
                        >
                            <p className="df-cta df-grad-text text-3xl md:text-4xl font-semibold">
                                {stat.value}
                            </p>
                            <p className="df-nav mt-2 text-sm text-(--text-soft)">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{t('home.servicesEyebrow')}</p>
                        <h2 className="df-logo text-3xl md:text-5xl font-semibold text-(--text-strong) leading-[1.1]">
                            {t('home.servicesTitle')}{' '}
                            <span className="df-grad-text">{t('home.servicesGrad')}</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={viewItem} className="df-nav max-w-sm text-(--text-soft) leading-relaxed">
                        {t('home.servicesDesc')}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {services.map((service, i) => {
                        const Icon = SERVICES_ICONS[i];
                        return (
                            <motion.div
                                key={service.title}
                                variants={viewItem}
                                className="df-card group rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-7 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20 group-hover:from-blue-600/40 group-hover:to-cyan-500/40 transition-colors duration-300">
                                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-(--text-faint) opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-(--accent-icon)" />
                                </div>
                                <h3 className="df-logo text-xl font-semibold text-(--text-strong) mb-2">{service.title}</h3>
                                <p className="df-nav text-(--text-soft) leading-relaxed">{service.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{t('home.projectsEyebrow')}</p>
                        <h2 className="df-logo text-3xl md:text-5xl font-semibold text-(--text-strong) leading-[1.1]">
                            {t('home.projectsTitle')} <span className="df-grad-text">{t('home.projectsGrad')}</span>
                        </h2>
                    </motion.div>
                    <Link
                        to="/project"
                        className="df-cta group inline-flex items-center gap-2 rounded-full border border-(--border) px-5 py-2.5 text-sm font-medium text-(--text-soft) transition-all duration-300 hover:text-(--text-strong) hover:border-cyan-300/50 hover:bg-cyan-400/10"
                    >
                        {t('home.allBtn')}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {PROJECTS.slice(0, 3).map(({ Icon, title, category, tags, from, to }) => (
                        <motion.div
                            key={title[lang]}
                            variants={viewItem}
                            className="df-card group rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div
                                className="relative h-40 m-3 rounded-2xl overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${from}22, ${to}33)` }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/20">
                                        <Icon className="w-7 h-7" strokeWidth={1.75} />
                                    </span>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em]">{category[lang]}</p>
                                <h3 className="df-logo mt-1 text-xl font-semibold text-(--text-strong) flex items-center justify-between">
                                    {title[lang]}
                                    <ArrowUpRight className="w-5 h-5 text-(--text-faint) transition-all duration-300 group-hover:text-(--accent-icon) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags[lang].map((tag) => (
                                        <span key={tag} className="df-nav text-xs text-(--text-soft) rounded-full border border-(--border) px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12"
                >
                    <motion.p variants={viewItem} className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{t('home.processEyebrow')}</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl font-semibold text-(--text-strong) leading-[1.1]">
                        {t('home.processTitle')} <span className="df-grad-text">{t('home.processGrad')}</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {process.map((step, i) => {
                        const Icon = PROCESS_ICONS[i];
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="df-card relative rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-7 transition-colors duration-300"
                            >
                                <span className="df-cta absolute top-5 right-6 text-4xl font-semibold text-(--text-faint)/20">0{i + 1}</span>
                                <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20 mb-5">
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </span>
                                <h3 className="df-logo text-lg font-semibold text-(--text-strong) mb-2">{step.title}</h3>
                                <p className="df-nav text-sm text-(--text-soft) leading-relaxed">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12"
                >
                    <motion.p variants={viewItem} className="df-eyebrow df-cta text-xs uppercase tracking-[0.2em] mb-3">{t('home.testimonialsEyebrow')}</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl font-semibold text-(--text-strong) leading-[1.1]">
                        {t('home.testimonialsTitle')} <span className="df-grad-text">{t('home.testimonialsGrad')}</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, i) => (
                        <motion.figure
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="df-card rounded-3xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-8 flex flex-col"
                        >
                            <Quote className="w-8 h-8 text-blue-500/60 mb-4" />
                            <blockquote className="df-nav text-lg text-(--text-strong) leading-relaxed flex-1">{testimonial.quote}</blockquote>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <span className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-br from-blue-600 to-cyan-500">
                                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                                </span>
                                <div>
                                    <p className="df-nav font-semibold text-(--text-strong)">{testimonial.name}</p>
                                    <p className="df-nav text-sm text-(--text-muted)">{testimonial.role}</p>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {whyUs.map((itemData, i) => {
                        const Icon = WHY_US_ICONS[i];
                        return (
                            <motion.div
                                key={itemData.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="df-card rounded-3xl bg-(--soft-bg) p-7 flex items-start gap-4 transition-colors duration-300"
                            >
                                <span className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20">
                                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                                </span>
                                <div>
                                    <h3 className="df-logo text-lg font-semibold text-(--text-strong)">{itemData.title}</h3>
                                    <p className="df-nav text-sm text-(--text-soft) mt-1 leading-relaxed">{itemData.desc}</p>
                                </div>
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
                    className="df-card relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-(--deep-a) to-(--deep-b) px-6 md:px-14 py-16 text-center"
                >
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
                            {t('home.ctaTitle')}{' '}
                            <motion.span
                                className="df-grad-text"
                                style={{
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {t('home.ctaGrad')}
                            </motion.span>
                        </h2>
                        <p className="df-nav mt-4 text-lg text-(--text-soft) max-w-xl mx-auto">
                            {t('home.ctaSubtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 mt-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 text-sm font-medium text-white">{t('common.getInTouch')}</span>
                            <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Home;
