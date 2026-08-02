import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Palette,
    Code2,
    Rocket,
    Smartphone,
    Sparkles,
    PenTool,
    Zap,
    Shield,
    Users,
    Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap';
import GsapCounter from '../components/GsapCounter.jsx';
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
        desc: "iOS va Android uchun silliq ishlaydigan, foydalanuvchiga yo'naltirilgan mobil ilovalarni ishlab chiqamiz.",
    },
    {
        Icon: Rocket,
        title: 'Brending',
        desc: 'Logotipdan to brend kitgacha — brendingizni eslab qoladigan va taniladigan qilamiz.',
    },
];

const PROJECTS = [
    { title: 'Nova Finance', category: 'Fintech', tags: ['React', 'UI/UX', 'SaaS'] },
    { title: 'Atlas Logistics', category: 'Logistika', tags: ['Dashboard', 'Mobile', 'Branding'] },
    { title: 'Vela Health', category: "Sog'liqni saqlash", tags: ['Telemed', 'Design System'] },
];

const PROCESS = [
    { Icon: PenTool, title: 'Tahlil', desc: "Maqsad va auditoriyani chuqur o'rganamiz." },
    { Icon: Palette, title: 'Dizayn', desc: 'Prototip va dizayn sistemani yaratamiz.' },
    { Icon: Code2, title: 'Ishlab chiqish', desc: 'Toza va tez kod bilan hayotga keltiramiz.' },
    { Icon: Zap, title: 'Tekshiruv', desc: 'Sinov, optimizatsiya va ishga tushirish.' },
];

const TECH = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Docker',
    'Figma',
];

const TESTIMONIALS = [
    {
        quote: "Dualis Team bilan ishlash — bu jarayon. Ular g'oyani tezda real mahsulotga aylantirdi.",
        name: 'Aziz Karimov',
        role: 'Nova Finance asoschisi',
    },
    {
        quote: 'Dizayn va texnik sifat bitta jamoada bo\'lishi mumkinligini ular isbotladi.',
        name: 'Malika Yusupova',
        role: 'Atlas Logistics CTO',
    },
];

const STAR_COUNT = 60;

const Home = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const MAX = 50;

    const stars = useMemo(
        () =>
            Array.from({ length: STAR_COUNT }).map((_, i) => ({
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 1.8 + 0.6,
                duration: Math.random() * 3 + 2.5,
                delay: Math.random() * 5,
            })),
        []
    );

    const handleMouseMove = (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const rawX = (e.clientX - cx) * 0.1;
        const rawY = (e.clientY - cy) * 0.1;
        setOffset({ x: Math.max(-MAX, Math.min(MAX, rawX)), y: Math.max(-MAX, Math.min(MAX, rawY)) });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.gsap-parallax', {
                yPercent: 22,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.home-shell',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="home-shell">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&family=Sora:wght@500;600;700&family=Manrope:wght@500;600;700&display=swap');
        .home-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .home-shell .df-nav,
        .home-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .home-shell section:not(:first-of-type) .df-logo { font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-style: normal; font-weight: 600; letter-spacing: -0.02em; }
        .home-shell section:not(:first-of-type) .df-nav,
        .home-shell section:not(:first-of-type) .df-cta { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .home-shell .df-glass {
          background: linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .home-shell .df-glass::before {
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

        @keyframes df-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes df-float { 0%, 100% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(-4px); opacity: 0.5; } }
        .home-shell .df-float { animation: df-float 2.4s ease-in-out infinite; }
        .home-shell .df-marquee-track { animation: df-marquee 26s linear infinite; }
        .home-shell .df-marquee-track-reverse { animation: df-marquee 34s linear infinite reverse; }
        .home-shell .df-marquee-wrap:hover .df-marquee-track,
        .home-shell .df-marquee-wrap:hover .df-marquee-track-reverse { animation-play-state: paused; }
        .home-shell .df-marquee-wrap {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }

        @keyframes df-twinkle { 0%, 100% { opacity: 0.12; } 50% { opacity: 0.95; } }
        .home-shell .df-twinkle { animation-name: df-twinkle; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }

        @keyframes df-drift-a { 0%, 100% { transform: translate(-10%, -10%); } 50% { transform: translate(8%, 6%); } }
        @keyframes df-drift-b { 0%, 100% { transform: translate(6%, 4%); } 50% { transform: translate(-10%, -8%); } }
        .home-shell .df-drift-a { animation: df-drift-a 16s ease-in-out infinite; }
        .home-shell .df-drift-b { animation: df-drift-b 20s ease-in-out infinite; }

        @keyframes df-grid-fade { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        .home-shell .df-grid { animation: df-grid-fade 10s ease-in-out infinite; }
      `}</style>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pb-24 pt-16 min-h-[calc(100vh-100px)] flex items-center">
                {/* Background layer: starfield + drifting glow orbs + faint grid */}
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <div
                        className="df-grid absolute inset-0 opacity-60"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)',
                            backgroundSize: '56px 56px',
                            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
                        }}
                    />

                    {stars.map((s) => (
                        <span
                            key={s.id}
                            className="absolute rounded-full bg-blue-100 df-twinkle"
                            style={{
                                top: `${s.top}%`,
                                left: `${s.left}%`,
                                width: `${s.size}px`,
                                height: `${s.size}px`,
                                animationDuration: `${s.duration}s`,
                                animationDelay: `${s.delay}s`,
                            }}
                        />
                    ))}

                    <div className="gsap-parallax df-drift-a absolute top-[-10%] left-[10%] w-[480px] h-[480px] rounded-full bg-blue-600/15 blur-[130px]" />
                    <div className="df-drift-b absolute bottom-[-15%] right-[8%] w-[420px] h-[420px] rounded-full bg-blue-400/10 blur-[120px]" />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center"
                >
                    {/* Orbiting duality badge */}
                    <motion.div variants={item} className="relative flex items-center justify-center mb-10 w-[132px] h-[132px]">
                        <motion.div
                            animate={{ x: offset.x * 0.6, y: offset.y * 0.6 }}
                            transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.8 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin-slow_20s_linear_infinite]">
                                <defs>
                                    <path id="df-circle-path" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" fill="none" />
                                </defs>
                                <text className="df-nav fill-slate-300 text-[10.5px] uppercase tracking-[0.35em]">
                                    <textPath href="#df-circle-path">Two minds · one vision · Dualis Team · Est. 2020 · </textPath>
                                </text>
                            </svg>

                            {/* two orbiting dots — design & engineering, circling the mark */}
                            <motion.div
                                aria-hidden="true"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 13, ease: 'linear', repeat: Infinity }}
                                className="absolute inset-0"
                            >
                                <span className="absolute left-1/2 top-[6px] -translate-x-1/2 w-2 h-2 rounded-full bg-blue-200/90 shadow-[0_0_10px_2px_rgba(191,219,254,0.5)]" />
                                <span className="absolute left-1/2 bottom-[6px] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]" />
                            </motion.div>

                            <div className="df-glass relative rounded-full p-2.5">
                                <img src={logo} alt="Dualis Team logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover" />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.p variants={item} className="df-nav inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-7">
                        <span className="w-2 h-2 rounded-full bg-blue-400 df-float" />
                        Juftlik asosidagi studiya
                    </motion.p>

                    <motion.h1 variants={item} className="df-logo text-5xl md:text-7xl leading-[1.02] text-slate-50">
                        Two minds,
                        <motion.span
                            className="block mt-2 bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD, #EEF1FF)',
                                backgroundSize: '200% 100%',
                            }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            one vision.
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={item} className="df-nav mt-7 max-w-md text-lg text-slate-400 leading-relaxed">
                        Biz dizayn va muhandislikni bitta jamoada birlashtiramiz — har bir loyihada bitta dizayner va bitta muhandis, yelkama-yelka.
                    </motion.p>

                    <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="df-cta group relative inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                        >
                            <motion.span
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, #0B1730, #1D4ED8, #0B1F33)', transformOrigin: 'right' }}
                                initial={false}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />
                            <span className="relative z-10 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-[1.03]">Start a project</span>
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
                            Contact
                            <ArrowUpRight
                                className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                strokeWidth={2.25}
                            />
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
                        {STATS.map((stat, i) => (
                            <div key={stat.label} className={`flex flex-col items-center ${i > 0 ? 'sm:border-l sm:border-white/[0.06] sm:pl-10' : ''}`}>
                                <span className="df-logo text-2xl md:text-3xl text-slate-50">{stat.value}</span>
                                <span className="df-nav mt-1 text-xs text-slate-500">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= MARQUEE ================= */}
            <div className="relative overflow-hidden py-3 df-marquee-wrap">
                <div className="flex whitespace-nowrap df-marquee-track w-max">
                    {Array.from({ length: 2 }).map((_, loop) => (
                        <div key={loop} className="flex items-center">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <span key={i} className="df-cta flex items-center gap-3 mx-4 text-sm tracking-wide text-slate-500">
                                    DUALIS TEAM
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-300" />
                                    TWO MINDS, ONE VISION
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-300" />
                                    DESIGN &amp; ENGINEERING
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-300" />
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
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Xizmatlar</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            Nima qilamiz,
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}> qanday qilamiz</span>
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {SERVICES.map(({ Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="df-glass group relative rounded-[28px] p-7 overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <motion.span
                                    whileHover={{ rotate: 12, scale: 1.08 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors duration-300"
                                >
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </motion.span>
                                <ArrowUpRight className="w-5 h-5 text-slate-600 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-blue-300" />
                            </div>
                            <h3 className="df-logo text-xl text-slate-50 mb-2">{title}</h3>
                            <p className="df-nav text-slate-400 leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= TECH STACK ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Texnologiyalar</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            Ishlaydigan <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>stack'imiz</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={viewItem} className="df-nav max-w-sm text-slate-400 leading-relaxed">
                        Har bir loyihani zamonaviy va isbotlangan texnologiyalar bilan quramiz.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-4"
                >
                    <div className="df-marquee-wrap relative overflow-hidden">
                        <div className="flex w-max items-center df-marquee-track">
                            {Array.from({ length: 2 }).map((_, loop) => (
                                <div key={loop} className="flex items-center">
                                    {TECH.map((tech) => (
                                        <motion.span
                                            key={`${tech}-${loop}`}
                                            whileHover={{ y: -4, scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                            className="df-nav group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 mx-2 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-300/50 hover:bg-blue-500/10 hover:text-white"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-300 transition-transform duration-300 group-hover:scale-125" />
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="df-marquee-wrap relative overflow-hidden">
                        <div className="flex w-max items-center df-marquee-track-reverse">
                            {Array.from({ length: 2 }).map((_, loop) => (
                                <div key={loop} className="flex items-center">
                                    {TECH.map((tech) => (
                                        <motion.span
                                            key={`${tech}-rev-${loop}`}
                                            whileHover={{ y: -4, scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                            className="df-nav group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 mx-2 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-300/50 hover:bg-blue-500/10 hover:text-white"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-300 transition-transform duration-300 group-hover:scale-125" />
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
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
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Loyihalar</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            So'nggi <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>ishlarimiz</span>
                        </h2>
                    </motion.div>
                    <Link
                        to="/project"
                        className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-300/50 hover:bg-blue-400/10"
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {PROJECTS.map(({ title, category, tags }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="df-glass group relative rounded-[28px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                        >
                            <div className="relative h-40 m-3 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/15 to-blue-300/10">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        whileHover={{ rotate: 90, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-white/10 backdrop-blur border border-white/15"
                                    >
                                        <Sparkles className="w-7 h-7" strokeWidth={1.75} />
                                    </motion.span>
                                </div>
                            </div>
                            <div className="px-5 pb-6">
                                <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80">{category}</p>
                                <h3 className="df-logo mt-1 text-xl text-slate-50 flex items-center justify-between">
                                    {title}
                                    <ArrowUpRight className="w-5 h-5 text-slate-600 transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                    <motion.p variants={viewItem} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Jarayon</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                        Qanday <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>ishlaymiz</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {PROCESS.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative ${i > 0 ? 'lg:border-l lg:border-white/[0.06] lg:pl-6' : ''}`}
                        >
                            <span className="df-logo absolute -top-1 right-0 lg:right-auto lg:left-0 text-5xl text-white/[0.06]">0{i + 1}</span>
                            <span className="relative w-12 h-12 rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20 mb-5">
                                <Icon className="w-6 h-6" strokeWidth={1.75} />
                            </span>
                            <h3 className="df-logo text-lg text-slate-50 mb-2">{title}</h3>
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
                    <motion.p variants={viewItem} className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Fikrlar</motion.p>
                    <motion.h2 variants={viewItem} className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                        Mijozlarimiz <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>nimadir deydi</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4 }}
                            className="df-glass rounded-[28px] p-8 flex flex-col transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.3)]"
                        >
                            <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                            <blockquote className="df-nav text-lg text-slate-200 leading-relaxed flex-1">{t.quote}</blockquote>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <span className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-br from-blue-700 to-blue-400">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
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
                            whileHover={{ x: 3 }}
                            className="flex items-start gap-4"
                        >
                            <motion.span
                                whileHover={{ rotate: 12, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20"
                            >
                                <Icon className="w-5 h-5" strokeWidth={1.75} />
                            </motion.span>
                            <div>
                                <h3 className="df-logo text-lg text-slate-50">{title}</h3>
                                <p className="df-nav text-sm text-slate-400 mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
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
                            G'oyangiz bormi? Uni{' '}
                            <motion.span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD, #EEF1FF)', backgroundSize: '200% 100%' }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                real qilaylik.
                            </motion.span>
                        </h2>
                        <p className="df-nav mt-4 text-lg text-slate-400 max-w-xl mx-auto">
                            Bepul konsultatsiya oling — 24 soat ichida javob beramiz.
                        </p>
                        <Link
                            to="/contact"
                            className="df-cta group inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 mt-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 text-sm font-medium text-white">Get in touch</span>
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

export default Home;