import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Rocket, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/index.js';

const DIGITS = [
    { char: '4', from: 'var(--grad-a)', to: 'var(--grad-b)' },
    { char: '0', from: '#2563EB', to: '#22D3EE' },
    { char: '4', from: 'var(--grad-b)', to: 'var(--grad-a)' },
];

const FLOATS = [
    { Icon: Home, className: 'top-[18%] left-[6%]', delay: 0 },
    { Icon: Rocket, className: 'top-[26%] right-[8%]', delay: 1.2 },
    { Icon: Sparkles, className: 'bottom-[24%] left-[10%]', delay: 0.6 },
];

const NotFound = () => {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-6 pt-32 md:pt-36 pb-24">
            <div className="df-grid-bg pointer-events-none absolute inset-x-0 top-0 bottom-0" aria-hidden="true" />

            {/* Ambient glows */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 right-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl"
                animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Floating icon chips */}
            {FLOATS.map(({ Icon, className, delay }) => (
                <motion.div
                    key={className}
                    aria-hidden="true"
                    className={`pointer-events-none absolute hidden md:block ${className}`}
                    animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <span className="df-chip flex h-14 w-14 items-center justify-center rounded-2xl bg-(--chip-bg) text-(--accent-text)">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
            >
                {/* Eyebrow */}
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="df-cta inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--chip-bg) px-4 py-1.5 text-xs font-medium tracking-wide text-(--accent-text)"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    {t('notFound.eyebrow')}
                </motion.span>

                {/* Giant gradient digits */}
                <div className="df-logo relative mt-6 flex items-center gap-3 md:gap-6">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 rounded-full bg-cyan-400/20 blur-3xl"
                    />
                    {DIGITS.map(({ char, from, to }, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-clip-text text-transparent text-[6rem] leading-none font-extrabold tracking-tight md:text-[10rem]"
                            style={{
                                backgroundImage: `linear-gradient(160deg, ${from}, ${to})`,
                                textShadow: '0 0 80px rgba(56,189,248,0.15)',
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="df-logo mt-10 text-2xl font-semibold tracking-tight text-(--text-strong) md:text-3xl"
                >
                    {t('notFound.title')}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="df-nav mt-3 max-w-md text-base text-(--text-soft) leading-relaxed"
                >
                    {t('notFound.desc')}
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                    <Link
                        to="/"
                        className="df-cta group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_-12px_rgba(37,99,235,0.7)] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(56,189,248,0.8)] hover:-translate-y-0.5"
                    >
                        <Home className="h-4 w-4" strokeWidth={2} />
                        {t('notFound.backHome')}
                    </Link>
                    <Link
                        to="/project"
                        className="df-cta group inline-flex items-center justify-center gap-2 rounded-full border border-(--border) px-7 py-3 text-sm font-semibold text-(--text-soft) transition-all duration-300 hover:border-cyan-300/50 hover:text-(--text-strong) hover:bg-cyan-400/10 hover:-translate-y-0.5"
                    >
                        {t('notFound.projects')}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                    </Link>
                </motion.div>

                {/* Back link */}
                <motion.button
                    onClick={() => window.history.back()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="df-nav mt-8 inline-flex items-center gap-2 text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--accent-icon)"
                >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                    {t('notFound.back')}
                </motion.button>
            </motion.div>
        </section>
    );
};

export default NotFound;
