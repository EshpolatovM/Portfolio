import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, ExternalLink, Mail } from 'lucide-react';

const SITEMAP = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
];

const STUDIO = [
    { label: 'Process', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'FAQ', href: '#' },
];

const SOCIALS = [
    { label: 'Github', href: 'https://github.com/', Icon: ExternalLink },
    { label: 'LinkedIn', href: 'https://linkedin.com/', Icon: ExternalLink },
    { label: 'Email', href: 'mailto:hello@example.com', Icon: Mail },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
    return (
        <footer className="px-4 md:px-6 pb-6 pt-24">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');
        .df-logo { font-family: 'Sora', sans-serif; }
        .df-nav { font-family: 'Manrope', sans-serif; }
        .df-cta { font-family: 'Space Grotesk', sans-serif; }
        @keyframes df-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .df-marquee-track { animation: df-marquee 22s linear infinite; }
      `}</style>

            {/* Footer is a centered card, not full viewport width */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-[#060B18] to-[#02040A] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
            >
                {/* Ambient drifting glows */}
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

                {/* Infinite marquee strip */}
                <div className="relative border-b border-white/[0.06] overflow-hidden py-3">
                    <div className="flex whitespace-nowrap df-marquee-track w-max">
                        {Array.from({ length: 2 }).map((_, loop) => (
                            <div key={loop} className="flex items-center">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <span key={i} className="df-cta flex items-center gap-3 mx-4 text-sm tracking-wide text-slate-500">
                    DUALIS TEAM
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    TWO MINDS, ONE VISION
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Big CTA row */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative px-6 md:px-14 pt-16 pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/[0.06]"
                >
                    <motion.h2
                        variants={item}
                        className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] max-w-xl"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        <motion.span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8, #EEF1FF)',
                                backgroundSize: '200% 100%',
                            }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Got an idea? Let's make it real.
                        </motion.span>
                    </motion.h2>

                    <motion.a
                        variants={item}
                        href="#contact"
                        initial="rest"
                        whileHover="hover"
                        whileTap={{ scale: 0.96 }}
                        className="df-cta relative inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full border border-blue-400/25 overflow-hidden shrink-0 w-fit"
                    >
                        <motion.span
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(90deg, #0B1730, #1D4ED8, #0B1F33)',
                                transformOrigin: 'right',
                            }}
                            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        />
                        <span className="relative z-10 text-sm font-medium text-white">Get in touch</span>
                        <motion.span
                            className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500"
                            variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
                            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        >
                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                        </motion.span>
                    </motion.a>
                </motion.div>

                {/* Link columns */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative grid grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-14 py-14 border-b border-white/[0.06]"
                >
                    {/* Brand column */}
                    <motion.div variants={item} className="col-span-2 md:col-span-1">
                        <div className="df-logo flex items-center gap-2.5 text-lg font-semibold text-slate-50 mb-4">
              <span className="relative w-3 h-3 inline-block">
                <motion.span
                    className="absolute inset-0 rounded-full bg-blue-400 opacity-85"
                    animate={{ x: [-2, -3, -2], y: [-2, -3, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                    className="absolute inset-0 rounded-full bg-cyan-300 opacity-85"
                    animate={{ x: [2, 3, 2], y: [2, 3, 2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>
                            Dualis Team
                        </div>
                        <p className="df-nav text-sm text-slate-400 leading-relaxed max-w-[220px] mb-6">
                            A design &amp; engineering studio that works in pairs — one designer, one engineer, every brief.
                        </p>
                        <div className="flex items-center gap-2">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    whileHover={{ y: -4, scale: 1.08 }}
                                    whileTap={{ scale: 0.94 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-colors duration-200"
                                >
                                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sitemap column */}
                    <motion.div variants={item}>
                        <p className="df-nav text-xs uppercase tracking-[0.2em] text-slate-500 mb-5">Sitemap</p>
                        <ul className="df-nav flex flex-col gap-3">
                            {SITEMAP.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    <span className="relative">
                      {link.label}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Studio column */}
                    <motion.div variants={item}>
                        <p className="df-nav text-xs uppercase tracking-[0.2em] text-slate-500 mb-5">Studio</p>
                        <ul className="df-nav flex flex-col gap-3">
                            {STUDIO.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    <span className="relative">
                      {link.label}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter column */}
                    <motion.div variants={item} className="col-span-2 md:col-span-1">
                        <p className="df-nav text-xs uppercase tracking-[0.2em] text-slate-500 mb-5">Stay in the loop</p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="relative flex items-center rounded-full border border-white/10 bg-white/[0.02] focus-within:border-blue-400/40 transition-colors duration-300 pl-4 pr-1 py-1"
                        >
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="df-nav bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500 w-full py-1.5"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.08, rotate: 45 }}
                                whileTap={{ scale: 0.92 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                aria-label="Subscribe"
                                className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500"
                            >
                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Bottom bar */}
                <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-6 md:px-14 py-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="df-nav text-xs text-slate-500"
                    >
                        © 2026 Dualis Team. All rights reserved.
                    </motion.p>

                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="df-nav group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors duration-200"
                    >
                        Back to top
                        <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-300/40 group-hover:bg-cyan-500/10 transition-colors duration-200">
              <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex"
              >
                <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
              </motion.span>
            </span>
                    </motion.button>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;