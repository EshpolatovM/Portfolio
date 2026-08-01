import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Palette,
    Code2,
    Rocket,
    Smartphone,
    Sparkles,
    PenTool,
    Layers,
    Zap,
    Shield,
    Users,
    Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

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

const STATS = [
    { value: '50+', label: 'Loyiha yakunlandi' },
    { value: '5+', label: 'Yillik tajriba' },
    { value: '98%', label: 'Mijozlar qoniqishi' },
    { value: '24/7', label: 'Qo\'llab-quvvatlash' },
];

const SERVICES = [
    {
        Icon: Palette,
        title: 'UI/UX Dizayn',
        desc: 'Mahsulotingizni yorqin va intuitiv qiladigan interfeyslar yaratamiz — prototipdan to yakuniy dizayn sistemasigacha.',
    },
    {
        Icon: Code2,
        title: 'Web Dasturlash',
        desc: 'Tez, xavfsiz va zamonaviy frontend hamda backend yechimlar. React, Node va boshqa zamonaviy stackda ishlaymiz.',
    },
    {
        Icon: Smartphone,
        title: 'Mobil Ilovalar',
        desc: 'iOS va Android uchun silliq ishlaydigan, foydalanuvchiga yo\'naltirilgan mobil ilovalarni ishlab chiqamiz.',
    },
    {
        Icon: Rocket,
        title: 'Brending',
        desc: 'Logotipdan to brend kitgacha — brendingizni eslab qoladigan va taniladigan qilamiz.',
    },
];

const PROJECTS = [
    {
        title: 'Nova Finance',
        category: 'Fintech',
        tags: ['React', 'UI/UX', 'SaaS'],
        from: '#2563EB',
        to: '#22D3EE',
    },
    {
        title: 'Atlas Logistics',
        category: 'Logistika',
        tags: ['Dashboard', 'Mobile', 'Branding'],
        from: '#7C3AED',
        to: '#EC4899',
    },
    {
        title: 'Vela Health',
        category: 'Sog\'liqni saqlash',
        tags: ['Telemed', 'Design System'],
        from: '#10B981',
        to: '#06B6D4',
    },
];

const PROCESS = [
    { Icon: Layers, title: 'Tahlil', desc: 'Maqsad va auditoriyani chuqur o\'rganamiz.' },
    { Icon: PenTool, title: 'Dizayn', desc: 'Prototip va dizayn sistemani yaratamiz.' },
    { Icon: Code2, title: 'Ishlab chiqish', desc: 'Toza va tez kod bilan hayotga keltiramiz.' },
    { Icon: Zap, title: 'Tekshiruv', desc: 'Sinov, optimizatsiya va ishga tushirish.' },
];

const TESTIMONIALS = [
    {
        quote: 'Dualis Team bilan ishlash — bu jarayon. Ular g\'oyani tezda real mahsulotga aylantirdi.',
        name: 'Aziz Karimov',
        role: 'Nova Finance asoschisi',
    },
    {
        quote: 'Dizayn va texnik sifat bitta jamoada bo\'lishi mumkinligini ular isbotladi.',
        name: 'Malika Yusupova',
        role: 'Atlas Logistics CTO',
    },
];

const Home = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const MAX = 60;

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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');
        .df-logo { font-family: 'Sora', sans-serif; }
        .df-nav { font-family: 'Manrope', sans-serif; }
        .df-cta { font-family: 'Space Grotesk', sans-serif; }
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
                            className="df-logo mt-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-50"
                        >
                            Two minds,
                            <span
                                className="block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8, #EEF1FF)',
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                one vision.
                            </span>
                        </motion.h1>

                        <motion.p variants={item} className="df-nav mt-6 max-w-md text-lg text-slate-400 leading-relaxed">
                            Biz dizayn va muhandislikni bitta jamoada birlashtiramiz — har bir loyihada bitta dizayner va bitta muhandis, yelkama-yelka.
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
                                <span className="relative z-10 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-[1.03]">Start a project</span>
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
                                className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.5)]"
                            >
                                Contact
                                <ArrowUpRight
                                    className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                    strokeWidth={2.25}
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: big logo */}
                    <motion.div
                        variants={item}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative flex items-center justify-center pointer-events-none">
                            <motion.img
                                src={logo}
                                alt="Dualis Team logo"
                                className="w-80 md:w-[28rem] lg:w-[32rem] select-none"
                                animate={{ x: offset.x, y: offset.y }}
                                transition={{ type: 'spring', stiffness: 80, damping: 14, mass: 0.8 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= MARQUEE ================= */}
            <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-3">
                <div className="flex whitespace-nowrap df-marquee-track w-max">
                    {Array.from({ length: 2 }).map((_, loop) => (
                        <div key={loop} className="flex items-center">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <span key={i} className="df-cta flex items-center gap-3 mx-4 text-sm tracking-wide text-slate-500">
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
                    {STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={viewItem}
                            className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-[#0B142B] to-[#080F22] p-6 text-center hover:border-blue-400/30 transition-colors duration-300"
                        >
                            <p className="df-cta text-3xl md:text-4xl font-semibold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8)' }}>
                                {stat.value}
                            </p>
                            <p className="df-nav mt-2 text-sm text-slate-400">{stat.label}</p>
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
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Xizmatlar</p>
                        <h2 className="df-logo text-3xl md:text-5xl font-semibold text-slate-50 leading-[1.1]">
                            Nima qilamiz,
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8)' }}> qanday qilamiz</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={viewItem} className="df-nav max-w-sm text-slate-400 leading-relaxed">
                        Har bir loyihaga ikkita mutaxassis — dizayner va muhandis birgalikda yondashadi.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {SERVICES.map(({ Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            className="group rounded-3xl border border-white/[0.06] bg-gradient-to-b from-[#0B142B] to-[#080F22] p-7 transition-all duration-300 hover:border-blue-400/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.4)]"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-cyan-300 bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20 group-hover:from-blue-600/40 group-hover:to-cyan-500/40 transition-colors duration-300">
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-slate-600 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cyan-300" />
                            </div>
                            <h3 className="df-logo text-xl font-semibold text-slate-50 mb-2">{title}</h3>
                            <p className="df-nav text-slate-400 leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
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
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Loyihalar</p>
                        <h2 className="df-logo text-3xl md:text-5xl font-semibold text-slate-50 leading-[1.1]">
                            So'nggi <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8)' }}>ishlarimiz</span>
                        </h2>
                    </motion.div>
                    <Link
                        to="/project"
                        className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-cyan-300/50 hover:bg-cyan-400/10"
                    >
                        Barchasi
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
                    {PROJECTS.map(({ title, category, tags, from, to }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            className="group rounded-3xl border border-white/[0.06] bg-gradient-to-b from-[#0B142B] to-[#080F22] overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(37,99,235,0.45)]"
                        >
                            <div
                                className="relative h-40 m-3 rounded-2xl overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${from}22, ${to}33)` }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/20">
                                        <Sparkles className="w-7 h-7" strokeWidth={1.75} />
                                    </span>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <p className="df-cta text-xs uppercase tracking-[0.2em] text-cyan-300/80">{category}</p>
                                <h3 className="df-logo mt-1 text-xl font-semibold text-slate-50 flex items-center justify-between">
                                    {title}
                                    <ArrowUpRight className="w-5 h-5 text-slate-600 transition-all duration-300 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span key={tag} className="df-nav text-xs text-slate-400 rounded-full border border-white/10 px-3 py-1">
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
                    <motion.p variants={viewItem} className="df-cta text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Jarayon</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl font-semibold text-slate-50 leading-[1.1]">
                        Qanday <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8)' }}>ishlaymiz</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROCESS.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-b from-[#0B142B] to-[#080F22] p-7 hover:border-blue-400/30 transition-colors duration-300"
                        >
                            <span className="df-cta absolute top-5 right-6 text-4xl font-semibold text-white/[0.06]">0{i + 1}</span>
                            <span className="w-12 h-12 rounded-2xl flex items-center justify-center text-cyan-300 bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20 mb-5">
                                <Icon className="w-6 h-6" strokeWidth={1.75} />
                            </span>
                            <h3 className="df-logo text-lg font-semibold text-slate-50 mb-2">{title}</h3>
                            <p className="df-nav text-sm text-slate-400 leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
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
                    <motion.p variants={viewItem} className="df-cta text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Fikrlar</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl font-semibold text-slate-50 leading-[1.1]">
                        Mijozlarimiz <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8)' }}>nimadir deydi</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-[#0B142B] to-[#080F22] p-8 flex flex-col"
                        >
                            <Quote className="w-8 h-8 text-blue-500/60 mb-4" />
                            <blockquote className="df-nav text-lg text-slate-200 leading-relaxed flex-1">{t.quote}</blockquote>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <span className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-br from-blue-600 to-cyan-500">
                                    {t.name.split(' ').map((n) => n[0]).join('')}
                                </span>
                                <div>
                                    <p className="df-nav font-semibold text-slate-50">{t.name}</p>
                                    <p className="df-nav text-sm text-slate-500">{t.role}</p>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {[
                        { Icon: Shield, title: 'Ishonch', desc: 'Shartnoma asosida aniq muddat va narx.' },
                        { Icon: Zap, title: 'Tezlik', desc: 'Har bir bosqichda tezkor aloqa va yangilanish.' },
                        { Icon: Users, title: 'Juftlik', desc: 'Bitta dizayner + bitta muhandis har doim.' },
                    ].map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 flex items-start gap-4 hover:border-blue-400/30 transition-colors duration-300"
                        >
                            <span className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-cyan-300 bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-blue-400/20">
                                <Icon className="w-5 h-5" strokeWidth={1.75} />
                            </span>
                            <div>
                                <h3 className="df-logo text-lg font-semibold text-slate-50">{title}</h3>
                                <p className="df-nav text-sm text-slate-400 mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-[#060B18] to-[#02040A] px-6 md:px-14 py-16 text-center"
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
                        <h2 className="df-logo text-3xl md:text-5xl font-semibold leading-[1.1] text-slate-50 max-w-2xl mx-auto">
                            G'oyangiz bormi? Uni{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #EEF1FF, #4FD8E8, #EEF1FF)',
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                real qilaylik.
                            </span>
                        </h2>
                        <p className="df-nav mt-4 text-lg text-slate-400 max-w-xl mx-auto">
                            Bepul konsultatsiya oling — 24 soat ichida javob beramiz.
                        </p>
                        <Link
                            to="/contact"
                            className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 mt-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.55)] hover:border-cyan-300/60 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 text-sm font-medium text-white">Get in touch</span>
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
