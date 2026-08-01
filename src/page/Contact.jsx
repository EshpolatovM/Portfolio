import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Send,
    Mail,
    MapPin,
    Phone,
    User,
    MessageSquare,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/index.js';

const GithubIcon = ({ className }) => (
    <svg
        className={className}
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

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

const SOCIALS = [
    { label: 'GitHub', value: 'github.com/DualisTeam', href: 'https://github.com/', Icon: GithubIcon, from: '#94A3B8', to: '#E2E8F0' },
    { label: 'Telegram', value: '@dualis_team', href: 'https://t.me/', Icon: Send, from: '#22D3EE', to: '#3B82F6' },
    { label: 'Email', value: 'hello@dualis.uz', href: 'mailto:hello@example.com', Icon: Mail, from: '#EC4899', to: '#F97316' },
];

const INFO = [
    { Icon: Phone, key: 'infoPhone', value: '+998 90 000 00 00' },
    { Icon: Mail, key: 'infoEmail', value: 'hello@dualis.uz' },
    { Icon: MapPin, key: 'infoAddress', value: "Toshkent, O'zbekiston" },
];

const Contact = () => {
    const { t } = useLanguage();
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    const inputClass =
        'df-nav w-full rounded-xl border border-(--border) bg-(--chip-bg) px-4 py-3 text-sm text-(--text-strong) placeholder:text-(--text-muted) outline-none transition-colors duration-300 focus:border-blue-400/50 focus:bg-(--soft-bg)';

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pt-20 md:pt-28 pb-20">
                <div className="df-grid-bg pointer-events-none absolute inset-x-0 top-0 bottom-0" aria-hidden="true" />

                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full bg-blue-600/25 blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-fuchsia-600/15 blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-8"
                >
                    {/* Left: text + socials */}
                    <div className="flex flex-col items-start text-left">
                        <motion.p variants={item} className="df-eyebrow df-cta text-xs uppercase tracking-[0.25em] mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--chip-bg) px-4 py-1.5">
                            <Sparkles className="w-4 h-4 text-(--accent-icon)" strokeWidth={1.75} />
                            {t('contact.heroEyebrow')}
                        </motion.p>

                        <motion.h1 variants={item} className="df-logo mt-0 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-(--text-strong) max-w-2xl">
                            {t('contact.heroTitle')}{' '}
                            <motion.span
                                className="df-grad-text drop-shadow-[0_0_35px_rgba(79,216,232,0.3)]"
                                style={{
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {t('contact.heroGrad')}
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={item} className="df-nav mt-8 max-w-xl text-lg text-(--text-soft) leading-relaxed">
                            {t('contact.heroSubtitle')}
                        </motion.p>

                        {/* Social cards */}
                        <motion.div variants={item} className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {SOCIALS.map(({ label, value, href, Icon, from }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="df-card group rounded-2xl bg-gradient-to-b from-(--surface-a) to-(--surface-b) p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span
                                        className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-(--text-strong) bg-(--soft-bg) backdrop-blur border border-(--border) transition-transform duration-300 group-hover:scale-110"
                                        style={{ boxShadow: `0 0 25px -8px ${from}` }}
                                    >
                                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="df-nav block text-sm font-semibold text-(--text-strong)">{label}</span>
                                        <span className="df-nav block text-xs text-(--text-muted) truncate">{value}</span>
                                    </span>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: animated logo */}
                    <motion.div variants={item} className="relative flex items-center justify-center py-12 lg:py-4">
                        <div className="relative">
                            <motion.div
                                aria-hidden="true"
                                className="absolute -inset-6 rounded-full blur-3xl opacity-60"
                                style={{ background: 'linear-gradient(135deg, #2563EB, #22D3EE)' }}
                                animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <div className="relative rounded-full p-[2px] overflow-hidden shadow-[0_0_60px_-15px_rgba(56,189,248,0.6)]">
                                <motion.div
                                    aria-hidden="true"
                                    className="absolute -inset-[60%]"
                                    style={{
                                        background: 'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 35%, transparent 65%, #2563EB)',
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                />
                                <div className="relative rounded-full bg-(--logo-bg) p-4">
                                    <motion.img
                                        src={logo}
                                        alt="Dualis Team logo"
                                        className="w-52 md:w-60 rounded-full select-none"
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    />
                                </div>
                            </div>

                            {/* Floating contact chips */}
                            {SOCIALS.map(({ Icon, from }, i) => (
                                <motion.span
                                    key={i}
                                    className={`absolute w-12 h-12 rounded-2xl flex items-center justify-center text-(--accent-icon) bg-(--bg-a)/90 backdrop-blur border border-(--border) shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] ${
                                        i === 0 ? 'top-4 -right-8' : i === 1 ? '-bottom-2 -left-10' : 'top-1/2 -right-12'
                                    }`}
                                    animate={{ y: [0, -8, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
                                    transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ boxShadow: `0 0 25px -6px ${from}` }}
                                >
                                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= FORM ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="df-card relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-(--surface-a) to-(--surface-b)"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl"
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 p-8 md:p-12">
                        {/* Left info */}
                        <div className="lg:col-span-2">
                            <p className="df-eyebrow df-cta text-xs uppercase tracking-[0.25em] mb-4">{t('contact.formEyebrow')}</p>
                            <h2 className="df-logo text-3xl md:text-4xl font-bold text-(--text-strong) tracking-tight leading-[1.15]">
                                {t('contact.formTitle')}{' '}
                                <span className="df-grad-text">{t('contact.formGrad')}</span>
                            </h2>
                            <p className="df-nav mt-4 text-(--text-soft) leading-relaxed">
                                {t('contact.formDesc')}
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                                {INFO.map(({ Icon, key, value }) => (
                                    <div key={key} className="flex items-center gap-3">
                                        <span className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-(--accent-icon) bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20">
                                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                                        </span>
                                        <div>
                                            <p className="df-nav text-xs uppercase tracking-[0.15em] text-(--text-muted)">{t(`contact.${key}`)}</p>
                                            <p className="df-nav text-sm text-(--text-strong)">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right form */}
                        <div className="lg:col-span-3">
                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full min-h-[320px] flex flex-col items-center justify-center text-center"
                                >
                                    <span className="w-16 h-16 rounded-full flex items-center justify-center text-emerald-300 bg-emerald-500/15 border border-emerald-400/30">
                                        <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                                    </span>
                                    <h3 className="df-logo mt-5 text-2xl font-semibold text-(--text-strong)">
                                        {t('contact.successThanks', { name: form.name || t('contact.successFriend') })}
                                    </h3>
                                    <p className="df-nav mt-2 text-(--text-soft) max-w-sm">
                                        {t('contact.successDesc')}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setForm({ name: '', phone: '', message: '' });
                                            setSent(false);
                                        }}
                                        className="df-cta mt-6 rounded-full border border-(--border) px-6 py-2.5 text-sm text-(--text-soft) transition-all duration-300 hover:text-(--text-strong) hover:border-cyan-300/50 hover:bg-cyan-400/10"
                                    >
                                        {t('contact.successAgain')}
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="df-nav text-xs uppercase tracking-[0.15em] text-(--text-muted) flex items-center gap-2">
                                                <User className="w-3.5 h-3.5" strokeWidth={1.75} />
                                                {t('contact.labelName')}
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={update('name')}
                                                placeholder={t('contact.placeholderName')}
                                                className={inputClass}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="phone" className="df-nav text-xs uppercase tracking-[0.15em] text-(--text-muted) flex items-center gap-2">
                                                <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
                                                {t('contact.labelPhone')}
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                required
                                                value={form.phone}
                                                onChange={update('phone')}
                                                placeholder={t('contact.placeholderPhone')}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="df-nav text-xs uppercase tracking-[0.15em] text-(--text-muted) flex items-center gap-2">
                                            <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.75} />
                                            {t('contact.labelMessage')}
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows="5"
                                            value={form.message}
                                            onChange={update('message')}
                                            placeholder={t('contact.placeholderMessage')}
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="df-cta group mt-2 inline-flex items-center justify-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 self-start overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                                    >
                                        <span className="relative z-10 text-sm font-medium text-white">{t('contact.submit')}</span>
                                        <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Contact;
