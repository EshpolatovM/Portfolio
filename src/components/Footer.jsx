import React, { useState, useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin, Code2, ExternalLink, Globe, AtSign, MessageCircle } from 'lucide-react';

const SITEMAP = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/project' },
    { label: 'Contact', href: '/contact' },
];

const STUDIO = [
    { label: 'UI/UX Design', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'Mobile Apps', href: '#' },
    { label: 'Branding', href: '#' },
];

const SOCIALS = [
    { label: 'Github', href: 'https://github.com/', Icon: Code2 },
    { label: 'LinkedIn', href: 'https://linkedin.com/', Icon: ExternalLink },
    { label: 'Twitter', href: 'https://twitter.com/', Icon: Globe },
    { label: 'Telegram', href: 'https://t.me/', Icon: MessageCircle },
    { label: 'Email', href: 'mailto:hello@example.com', Icon: AtSign },
];

const HEADLINE = ["Let's", 'build', 'something', 'great'];

const wordContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordItem = {
    hidden: { opacity: 0, y: 34, rotate: 4, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const listItem = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const Magnetic = ({ children, strength = 18, className = '' }) => {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const shouldReduceMotion = useReducedMotion();

    const onMouseMove = (e) => {
        if (shouldReduceMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setPos({ x: relX * strength, y: relY * strength });
    };
    const onMouseLeave = () => setPos({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, mass: 0.4 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ProgressRing = () => {
    const { scrollYProgress } = useScroll();
    const r = 13;
    const c = 2 * Math.PI * r;
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" className="absolute inset-0 -rotate-90">
            <circle cx="16" cy="16" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
            <motion.circle
                cx="16"
                cy="16"
                r={r}
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={c}
                style={{ pathLength: scrollYProgress }}
            />
        </svg>
    );
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <footer className="footer-shell relative overflow-hidden bg-[#030509] rounded-t-[36px] md:rounded-t-[48px]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');
        .footer-shell .df-headline,
        .footer-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .footer-shell .df-nav,
        .footer-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .footer-shell .df-top-line {
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.45), transparent);
        }
      `}</style>

            {/* Top hairline */}
            <div className="df-top-line absolute top-0 inset-x-0 h-px" aria-hidden="true" />

            {/* Ambient glow */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full bg-blue-600/15 blur-[120px]"
                animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative mx-auto max-w-6xl px-4 md:px-6">
                {/* Big centered CTA */}
                <div className="pt-24 md:pt-28 pb-16 text-center border-b border-white/[0.06]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="df-cta text-xs uppercase tracking-[0.3em] text-blue-300/70 mb-6"
                    >
                        Have an idea?
                    </motion.p>

                    <motion.h2
                        variants={wordContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        className="df-headline text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-slate-50 flex flex-wrap justify-center gap-x-5"
                    >
                        {HEADLINE.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordItem}
                                className={
                                    word === 'something' || word === 'great'
                                        ? 'bg-clip-text text-transparent'
                                        : ''
                                }
                                style={
                                    word === 'something' || word === 'great'
                                        ? { backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }
                                        : undefined
                                }
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex justify-center"
                    >
                        <Magnetic strength={14}>
                            <a
                                href="mailto:hello@example.com"
                                className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:border-blue-300/60 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Start a conversation</span>
                                <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                </span>
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Link columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 py-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-2 md:col-span-1"
                    >
                        <div className="df-logo flex items-center gap-2.5 text-base text-slate-50 mb-4">
                            <span className="relative w-3 h-3 inline-block">
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-blue-500 opacity-85"
                                    animate={shouldReduceMotion ? {} : { x: [-2, -3, -2], y: [-2, -3, -2] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                />
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-blue-300 opacity-85"
                                    animate={shouldReduceMotion ? {} : { x: [2, 3, 2], y: [2, 3, 2] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </span>
                            Dualis Team
                        </div>
                        <p className="df-nav text-sm text-slate-500 leading-relaxed max-w-[240px]">
                            A design &amp; engineering studio that works in pairs — one designer, one engineer.
                        </p>
                    </motion.div>

                    <motion.div variants={listContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <p className="df-nav text-xs uppercase tracking-[0.25em] text-slate-600 mb-6">Sitemap</p>
                        <ul className="df-nav flex flex-col gap-4">
                            {SITEMAP.map((link) => (
                                <motion.li key={link.label} variants={listItem}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-baseline text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-300 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={listContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <p className="df-nav text-xs uppercase tracking-[0.25em] text-slate-600 mb-6">Studio</p>
                        <ul className="df-nav flex flex-col gap-4">
                            {STUDIO.map((link) => (
                                <motion.li key={link.label} variants={listItem}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-baseline text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-300 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-2 md:col-span-1"
                    >
                        <p className="df-nav text-xs uppercase tracking-[0.25em] text-slate-600 mb-6">Contact</p>
                        <ul className="df-nav flex flex-col gap-4 text-sm">
                            <li>
                                <a
                                    href="mailto:hello@example.com"
                                    className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    <Mail className="w-4 h-4 text-blue-400/60 group-hover:text-blue-300" strokeWidth={1.75} />
                                    hello@example.com
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-3 text-slate-400">
                                <Phone className="w-4 h-4 text-blue-400/60" strokeWidth={1.75} />
                                +998 90 123 45 67
                            </li>
                            <li className="inline-flex items-center gap-3 text-slate-400">
                                <MapPin className="w-4 h-4 text-blue-400/60" strokeWidth={1.75} />
                                Tashkent, Uzbekistan
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 py-6 border-t border-white/[0.06]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="df-nav text-xs text-slate-600"
                    >
                        © 2026 Dualis Team. All rights reserved.
                    </motion.p>

                    <div className="flex items-center gap-2">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                whileHover={{ y: -4, rotate: -6, scale: 1.1 }}
                                whileTap={{ scale: 0.94 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                            >
                                <Icon className="w-4 h-4" strokeWidth={1.75} />
                            </motion.a>
                        ))}
                    </div>

                    <Magnetic strength={8}>
                        <button
                            onClick={scrollToTop}
                            className="df-nav group relative flex items-center gap-3 text-xs text-slate-500 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-full"
                        >
                            Back to top
                            <span className="relative w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-300/40 group-hover:bg-blue-500/10 transition-colors duration-200">
                                {!shouldReduceMotion && <ProgressRing />}
                                <motion.span
                                    animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative flex"
                                >
                                    <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
                                </motion.span>
                            </span>
                        </button>
                    </Magnetic>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
