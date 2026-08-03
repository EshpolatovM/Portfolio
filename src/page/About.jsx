import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap';
import GsapCounter from '../components/GsapCounter.jsx';
import {
    ArrowUpRight,
    Palette,
    Code2,
    Zap,
    Target,
    Gem,
    Heart,
    Quote,
} from 'lucide-react';
import logo from '../assets/logo.png';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const viewItem = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const STATS = [
    { value: '50+', label: 'Loyiha yakunlandi' },
    { value: '5+', label: 'Yillik tajriba' },
    { value: '98%', label: 'Mijozlar qoniqishi' },
    { value: '24/7', label: "Qo'llab-quvvatlash" },
];

const VALUES = [
    { Icon: Target, title: 'Aniqlik', desc: 'Har bir loyihada aniq maqsad va o\u2018lchanadigan natijaga intilamiz.' },
    { Icon: Gem, title: 'Sifat', desc: 'Dizayn ham, kod ham eng yuqori standartda bajariladi.' },
    { Icon: Heart, title: 'G‘amxo‘rlik', desc: 'Mijoz g‘oyasiga o‘zimiznikidek qaraymiz va qo‘llab-quvvatlaymiz.' },
    { Icon: Zap, title: 'Tezlik', desc: 'Bosqichlar orasida sustkashlik yo‘q — har kuni yangilanish.' },
];

const TEAM = [
    {
        initials: 'EM',
        name: 'Esanpolatov Miraziz',
        year: '2012',
        role: 'Frontend + Fullstack Developer',
        accent: '#4C8DFA',
        blurb: "Foydalanuvchi interfeysidan to ma'lumotlar bazasigacha — loyihani boshidan oxirigacha olib boradi. UI/UX bo'yicha ham boshlang'ich tajribaga ega.",
        stack: [
            { label: 'Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Bootstrap'] },
            { label: 'Backend', tags: ['PostgreSQL', 'SQL', 'Supabase'] },
            { label: 'Asoslar', tags: ['Python', 'Go (Golang)'] },
        ],
        learning: ['Django', 'Node.js'],
        extra: 'UI/UX — boshlang\'ich tajriba',
    },
    {
        initials: 'TA',
        name: 'Toirov Asadbek',
        year: '2011',
        role: 'Frontend + Fullstack Developer',
        accent: '#F2B84B',
        blurb: "Toza va tartibli kod yozadi, frontenddan ma'lumotlar bazasigacha chuqur ishlay oladi. Yangi texnologiyalarni tez o'zlashtiradi.",
        stack: [
            { label: 'Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'] },
            { label: 'Backend', tags: ['PostgreSQL', 'SQL', 'Supabase'] },
            { label: 'Asoslar', tags: ['Python', 'Go (Golang)'] },
        ],
        learning: ['Django', 'Node.js'],
    },
];

const JOURNEY = [
    { year: '2020', title: 'Boshlanish', desc: 'Ikki do‘st bitta g‘oya bilan jamoa tuzdik.' },
    { year: '2022', title: 'Birinchi yirik loyiha', desc: 'Xalqaro miqyosdagi fintech mahsulotini topshirdik.' },
    { year: '2024', title: '15+ mijoz', desc: 'Brendingdan to mobil ilovagacha — to‘liq xizmat.' },
    { year: '2026', title: 'Bugun', desc: 'Hali ham juftlikda ishlaymiz — va bundan faxrlanamiz.' },
];

const About = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        if (!timelineRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-timeline-line',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    transformOrigin: 'top center',
                    scrollTrigger: {
                        trigger: '.gsap-timeline',
                        start: 'top 75%',
                        end: 'bottom 55%',
                        scrub: true,
                    },
                }
            );
        }, timelineRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="about-shell">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');
        .about-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .about-shell .df-nav,
        .about-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .about-shell .df-glass {
          background: linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .about-shell .df-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(147,197,253,0.25), transparent 40%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pb-24 pt-16">
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full bg-blue-600/15 blur-[120px]"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 min-h-[calc(100vh-260px)]"
                >
                    <div className="flex flex-col items-start text-left">
                        <motion.p variants={item} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-5">
                            About Dualis Team
                        </motion.p>
                        <motion.h1 variants={item} className="df-logo mt-0 text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-slate-50">
                            Ikki kishi,
                            <motion.span
                                className="block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD, #EEF1FF)',
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                bitta jamoa.
                            </motion.span>
                        </motion.h1>
                        <motion.p variants={item} className="df-nav mt-6 max-w-md text-lg text-slate-400 leading-relaxed">
                            Biz kichik, ammo kuchli studiyamiz. Ikki mutaxassis — bitta dizayner va bitta muhandis — har bir loyihani boshidan oxirigacha birga olib boramiz.
                        </motion.p>
                        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                to="/project"
                                className="df-cta group relative inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                            >
                                <motion.span
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(90deg, #0B1730, #1D4ED8, #0B1F33)', transformOrigin: 'right' }}
                                    initial={false}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                />
                                <span className="relative z-10 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-[1.03]">Ishlarimizni ko'ring</span>
                                <motion.span
                                    className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(96,165,250,0.6)]"
                                    whileHover={{ rotate: 45, scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                >
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                                </motion.span>
                            </Link>
                            <Link
                                to="/contact"
                                className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-300/50 hover:bg-blue-400/10 hover:-translate-y-0.5"
                            >
                                Bog'lanish
                                <ArrowUpRight className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" strokeWidth={2.25} />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div variants={item} className="flex items-center justify-center lg:justify-end">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="df-glass relative rounded-[40px] p-10 flex flex-col items-center gap-5"
                        >
                            <img src={logo} alt="Dualis Team logo" className="w-40 md:w-52 rounded-full object-cover" />
                            <p className="df-logo text-lg text-slate-50">Two minds, one vision</p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-blue-300" />
                                <span className="df-nav text-sm text-slate-400">Est. 2020</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= STATS ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={viewItem}
                            whileHover={{ y: -3 }}
                            className={`text-center md:text-left ${i > 0 ? 'md:border-l md:border-white/[0.06] md:pl-6' : ''}`}
                        >
                            <motion.p
                                whileHover={{ scale: 1.06 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                className="df-logo inline-block text-4xl md:text-5xl bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}
                            >
                                <GsapCounter value={stat.value} />
                            </motion.p>
                            <p className="df-nav mt-2 text-sm text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= STORY ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Bizning hikoya</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1] mb-6">
                            Nega <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>juftlikda</span> ishlaymiz?
                        </h2>
                        <p className="df-nav text-slate-400 leading-relaxed mb-4">
                            Ko‘p studiyalarda dizayner va muhandis alohida ishlaydi — dizayn tayyor bo‘lib, keyingi bosqichga uzatiladi. Shunda g‘oyalar yo‘lda yo‘qoladi.
                        </p>
                        <p className="df-nav text-slate-400 leading-relaxed">
                            Biz bunga qarshi chiqdik. Har bir loyihada bitta dizayner va bitta muhandis boshidan oxirigacha birga ishlaydi. Shunday qilib, dizayn amaliy, kod esa chiroyli bo‘ladi.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { Icon: Palette, title: 'Dizayn', count: '50%' },
                            { Icon: Code2, title: 'Muhandislik', count: '50%' },
                        ].map(({ Icon, title, count }) => (
                            <div key={title} className="df-glass relative rounded-[28px] p-6 text-center">
                                <span className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20 mb-4">
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </span>
                                <p className="df-logo text-3xl text-slate-50">{count}</p>
                                <p className="df-nav mt-1 text-sm text-slate-400">{title}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= VALUES ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Qadriyatlar</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            Bizni <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>boshqaradigan</span> tamoyillar
                        </h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {VALUES.map(({ Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="df-glass group relative rounded-[28px] p-7 overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                        >
                            <motion.span
                                whileHover={{ rotate: 12, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                className="w-12 h-12 rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors duration-300"
                            >
                                <Icon className="w-6 h-6" strokeWidth={1.75} />
                            </motion.span>
                            <h3 className="df-logo mt-5 text-xl text-slate-50 mb-2">{title}</h3>
                            <p className="df-nav text-slate-400 leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

{/* ================= TEAM (editorial) ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Jamoa</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            Biz ikkimiz — <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>bitta jamoa</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={viewItem} className="df-nav max-w-sm text-slate-400 leading-relaxed">
                        Har ikkovimiz ham frontenddan fullstackgacha ishlaymiz — va har kuni yangi narsa o'rganamiz.
                    </motion.p>
                </motion.div>

                <div className="flex flex-col">
                    {TEAM.map(({ initials, name, year, role, accent, blurb, stack, learning, extra }, i) => (
                        <motion.article
                            key={name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative py-14 md:py-20 ${i > 0 ? 'border-t border-white/[0.07]' : ''}`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                                {/* Identity */}
                                <div className="lg:col-span-5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.span
                                            whileHover={{ rotate: -6, scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                                            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-base df-cta font-semibold tracking-wide"
                                            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}77)` }}
                                        >
                                            {initials}
                                        </motion.span>
                                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-slate-500">{role}</p>
                                    </div>

                                    <h3 className="df-logo text-4xl md:text-6xl leading-[1.02]">
                                        <span className="transition-colors duration-300 group-hover:brightness-110" style={{ color: accent }}>
                                            {name}
                                        </span>
                                    </h3>

                                    <div className="mt-7 flex flex-wrap items-center gap-3">
                                        <span
                                            className="df-cta text-sm py-1.5 px-4 rounded-full tabular-nums"
                                            style={{ color: accent, backgroundColor: `${accent}14`, border: `1px solid ${accent}40` }}
                                        >
                                            {year} yil
                                        </span>
                                        <span className="df-nav text-sm text-slate-500">Dualis Team a'zosi</span>
                                    </div>

                                    <p className="df-nav mt-6 text-slate-400 leading-relaxed max-w-md">{blurb}</p>
                                </div>

                                {/* Skills */}
                                <div className="lg:col-span-7 lg:border-l lg:border-white/[0.07] lg:pl-14">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                                        {stack.map(({ label, tags }) => (
                                            <div key={label}>
                                                <p className="df-cta text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-5 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                                                    {label}
                                                </p>
                                                <ul className="flex flex-col gap-2.5">
                                                    {tags.map((tag) => (
                                                        <li key={tag} className="df-nav text-[15px] text-slate-300 flex items-center gap-2 transition-colors duration-200 group-hover:translate-x-0.5">
                                                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: `${accent}66` }} />
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-7 border-t border-dashed border-white/10 flex flex-wrap items-center gap-2.5">
                                        <span className="df-cta text-[11px] uppercase tracking-[0.18em] text-slate-500 mr-1">O'rganilmoqda</span>
                                        {learning.map((tag) => (
                                            <span key={tag} className="df-nav text-xs text-slate-300 rounded-full border border-white/15 px-3 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                        {extra && (
                                            <span
                                                className="df-nav text-xs rounded-full px-3 py-1"
                                                style={{ color: '#f6ffe9', backgroundColor: `${accent}1f`, border: `1px solid ${accent}55` }}
                                            >
                                                {extra}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ================= JOURNEY ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12"
                >
                    <motion.p variants={viewItem} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Yo‘l xaritasi</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                        Bizning <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>sayohatimiz</span>
                    </motion.h2>
                </motion.div>

                <div className="relative gsap-timeline">
                    <div className="gsap-timeline-line absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 via-white/10 to-transparent" aria-hidden="true" />
                    <div className="flex flex-col gap-10">
                        {JOURNEY.map(({ year, title, desc }, i) => (
                            <motion.div
                                key={year}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                            >
                                <span className={`absolute top-1 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)] ${i % 2 === 0 ? 'left-3 md:left-auto md:-right-1.5' : 'left-3 md:-left-1.5'}`} />
                                <p className="df-logo text-2xl bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>
                                    {year}
                                </p>
                                <h3 className="df-logo text-lg text-slate-50 mt-1">{title}</h3>
                                <p className="df-nav text-sm text-slate-400 mt-1 leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= QUOTE ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.figure
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="df-glass relative rounded-[40px] px-6 md:px-14 py-14 text-center"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[240px] rounded-full bg-blue-600/15 blur-[90px]"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <Quote className="relative w-10 h-10 text-blue-400/50 mx-auto mb-6" />
                    <blockquote className="df-nav relative text-2xl md:text-3xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        “Kichik jamoa katta natijaga erisha olmaydi, deganlarni isbotlab turibmiz — juftlikda ishlaganimiz uchun.”
                    </blockquote>
                    <figcaption className="df-nav relative mt-6 text-sm text-slate-500">Dualis Team</figcaption>
                </motion.figure>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="df-glass relative overflow-hidden rounded-[40px] px-6 md:px-14 py-16 text-center"
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className="relative">
                        <h2 className="df-logo text-3xl md:text-5xl leading-[1.1] text-slate-50 max-w-2xl mx-auto">
                            Biz bilan ishlashni{' '}
                            <motion.span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD, #EEF1FF)', backgroundSize: '200% 100%' }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                xohlaysizmi?
                            </motion.span>
                        </h2>
                        <p className="df-nav mt-4 text-lg text-slate-400 max-w-xl mx-auto">
                            G‘oyangizni birga muhokama qilamiz — bepul konsultatsiya.
                        </p>
                        <Link
                            to="/contact"
                            className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 mt-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 text-sm font-medium text-white">Bog'lanish</span>
                            <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
