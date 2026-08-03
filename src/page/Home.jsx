import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Palette,
    Code2,
    Rocket,
    Smartphone,
    PenTool,
    Zap,
    Shield,
    Users,
    Quote,
    Terminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap';
import GsapCounter from '../components/GsapCounter.jsx';
import { PROJECTS } from '../data/projects.js';
import logo from '../assets/logo.png';

/* ===================================================================
   DESIGN NOTE (leave for the next dev touching this file):

   The brand fact worth building around is structural, not decorative:
   every project runs through exactly one designer + one engineer.
   So instead of a generic dark-hero-with-glow, the whole page treats
   "two roles, one output" as the actual design system:

     - gold  (--role-designer) tags anything design-side
     - blue  (--role-engineer) tags anything engineering-side
     - the two only merge to white/gradient at the point of a finished
       outcome (headline's third line, CTA, final stat)

   Typography was previously switching families after the first
   section (Newsreader/Outfit in hero, Sora/Manrope everywhere else)
   with no reason behind it — that's fixed here to one consistent
   pairing: Newsreader (italic, display) + Outfit (everything else).
   =================================================================== */

const ROLE = {
    designer: '#F2B84B', // warm gold — design/craft
    engineer: '#4C8DFA', // brand blue — engineering/logic (matches existing CTAs)
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const viewContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const viewItem = {
    hidden: { opacity: 0, y: 26 },
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
        role: 'designer',
    },
    {
        Icon: Code2,
        title: 'Web Dasturlash',
        desc: 'Tez, xavfsiz va zamonaviy frontend hamda backend yechimlar. React, Node va boshqa zamonaviy stackda ishlaymiz.',
        role: 'engineer',
    },
    {
        Icon: Smartphone,
        title: 'Mobil Ilovalar',
        desc: "iOS va Android uchun silliq ishlaydigan, foydalanuvchiga yo'naltirilgan mobil ilovalarni ishlab chiqamiz.",
        role: 'engineer',
    },
    {
        Icon: Rocket,
        title: 'Brending',
        desc: 'Logotipdan to brend kitgacha — brendingizni eslab qoladigan va taniladigan qilamiz.',
        role: 'designer',
    },
];

// Shared project data (icons + accent colors) lives in src/data/projects.js —
// the same file feeds both Home highlights and the Project page, so every
// project keeps one consistent identity across the site.
const FEATURED = PROJECTS.slice(0, 3);

const PROCESS = [
    { Icon: PenTool, title: 'Tahlil', desc: "Maqsad va auditoriyani chuqur o'rganamiz." },
    { Icon: Palette, title: 'Dizayn', desc: 'Prototip va dizayn sistemani yaratamiz.' },
    { Icon: Code2, title: 'Ishlab chiqish', desc: 'Toza va tez kod bilan hayotga keltiramiz.' },
    { Icon: Zap, title: 'Tekshiruv', desc: 'Sinov, optimizatsiya va ishga tushirish.' },
];

// Two real, distinct tool sets instead of the same list mirrored twice —
// each marquee row now actually means something (who reaches for it).
const DESIGN_TOOLS = ['Figma', 'Framer', 'Illustrator', 'Photoshop', 'Principle', 'Webflow'];
const ENGINEERING_TOOLS = ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker', 'Tailwind CSS'];

const TESTIMONIALS = [
    {
        quote: "Dualis Team bilan ishlash — bu jarayon. Ular g'oyani tezda real mahsulotga aylantirdi.",
        name: 'Aziz Karimov',
        role: 'Nova Finance asoschisi',
    },
    {
        quote: "Dizayn va texnik sifat bitta jamoada bo'lishi mumkinligini ular isbotladi.",
        name: 'Malika Yusupova',
        role: 'Atlas Logistics CTO',
    },
];

const Home = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const MAX = 18;

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const rawX = (e.clientX - cx) * 0.04;
            const rawY = (e.clientY - cy) * 0.04;
            setOffset({ x: Math.max(-MAX, Math.min(MAX, rawX)), y: Math.max(-MAX, Math.min(MAX, rawY)) });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.gsap-parallax', {
                yPercent: 20,
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
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');

        /* One consistent pairing everywhere — no more silent typeface
           swap after the first section. */
        .home-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .home-shell .df-nav,
        .home-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .home-shell .df-glass {
          background: linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        @keyframes df-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes df-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .home-shell .df-marquee-track { animation: df-marquee 28s linear infinite; }
        .home-shell .df-marquee-track-reverse { animation: df-marquee 28s linear infinite reverse; }
        .home-shell .df-marquee-wrap:hover .df-marquee-track,
        .home-shell .df-marquee-wrap:hover .df-marquee-track-reverse { animation-play-state: paused; }
        .home-shell .df-marquee-wrap {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .home-shell .df-float-designer { animation: df-float 5s ease-in-out infinite; }
        .home-shell .df-float-engineer { animation: df-float 5s ease-in-out infinite; animation-delay: 1.4s; }

        @media (prefers-reduced-motion: reduce) {
          .home-shell * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

            {/* ================= HERO ================= */}
            {/* The hero's job is to show the pairing, not describe it — so the
                headline itself carries the two roles as two lines of color,
                converging on the third. Everything else in the hero is quiet. */}
            <section className="relative overflow-hidden px-4 md:px-6 pb-24 pt-20 min-h-[calc(100vh-100px)] flex items-center">
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <div className="gsap-parallax absolute top-[-15%] left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center"
                >
                    <motion.div variants={item} className="df-glass mb-9 inline-flex items-center gap-1 rounded-full p-1">
                        <img src={logo} alt="Dualis Team" className="w-8 h-8 rounded-full object-cover" />
                        <span className="df-nav pl-2 pr-4 text-xs uppercase tracking-[0.2em] text-slate-400">Dualis Team · Est. 2020</span>
                    </motion.div>

                    <motion.h1 variants={item} className="relative df-logo text-5xl md:text-7xl leading-[1.05] text-slate-50">
                        <span className="relative inline-block">
                            <PenTool
                                aria-hidden="true"
                                className="df-float-designer absolute -left-9 md:-left-12 top-2 w-5 h-5 md:w-6 md:h-6 opacity-70"
                                style={{ color: ROLE.designer, transform: `translate(${offset.x * -1}px, ${offset.y}px)` }}
                                strokeWidth={1.75}
                            />
                            <span style={{ color: ROLE.designer }}>Dizayner.</span>
                        </span>
                        <br />
                        <span className="relative inline-block mt-1">
                            <Terminal
                                aria-hidden="true"
                                className="df-float-engineer absolute -right-9 md:-right-12 top-2 w-5 h-5 md:w-6 md:h-6 opacity-70"
                                style={{ color: ROLE.engineer, transform: `translate(${offset.x}px, ${offset.y * -1}px)` }}
                                strokeWidth={1.75}
                            />
                            <span style={{ color: ROLE.engineer }}>Muhandis.</span>
                        </span>
                        <br />
                        <motion.span
                            className="inline-block mt-1 bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${ROLE.designer}, #EEF1FF, ${ROLE.engineer})`, backgroundSize: '200% 100%' }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Bitta jamoa.
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={item} className="df-nav mt-8 max-w-md text-lg text-slate-400 leading-relaxed">
                        Har bir loyihaga bitta dizayner va bitta muhandis birga kirishadi — g'oyadan ishga tushirilgan mahsulotgacha, ikkalasi ham boshidan oxirigacha yelkama-yelka.
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
                            <span className="relative z-10 text-sm font-medium text-white transition-transform duration-300 group-hover:scale-[1.03]">Loyihani boshlash</span>
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

            {/* ================= STATS (in-view recount) ================= */}
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
                        Har bir xizmat qaysi tomon — dizayn yoki muhandislik — yetakchilik qilishini ochiq belgilaymiz.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {SERVICES.map(({ Icon, title, desc, role }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="df-glass group relative rounded-[28px] p-7 overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                            style={{ borderLeft: `2px solid ${ROLE[role]}55` }}
                        >
                            <div className="flex items-center justify-between mb-5">
                                <motion.span
                                    whileHover={{ rotate: 12, scale: 1.08 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                                    className="w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-300"
                                    style={{ color: ROLE[role], backgroundColor: `${ROLE[role]}1A`, borderColor: `${ROLE[role]}33` }}
                                >
                                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                                </motion.span>
                                <span className="df-nav text-[11px] uppercase tracking-[0.15em]" style={{ color: ROLE[role] }}>
                                    {role === 'designer' ? 'Dizayn' : 'Muhandislik'}
                                </span>
                            </div>
                            <h3 className="df-logo text-xl text-slate-50 mb-2">{title}</h3>
                            <p className="df-nav text-slate-400 leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= TOOLS (split by role, not repeated) ================= */}
            <section className="relative mx-auto max-w-6xl px-4 md:px-6 pb-24">
                <motion.div
                    variants={viewContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <motion.div variants={viewItem}>
                        <p className="df-cta text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">Asboblar</p>
                        <h2 className="df-logo text-3xl md:text-5xl text-slate-50 leading-[1.1]">
                            Har ikki tomon <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>o'z vositalari bilan</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={viewItem} className="df-nav max-w-sm text-slate-400 leading-relaxed">
                        Yuqori qator — dizaynerning, pastki qator — muhandisning kundalik asboblari.
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
                                    {DESIGN_TOOLS.map((tool) => (
                                        <span
                                            key={`${tool}-${loop}`}
                                            className="df-nav inline-flex items-center gap-2 rounded-full border px-5 py-2.5 mx-2 text-sm text-slate-200"
                                            style={{ borderColor: `${ROLE.designer}33`, backgroundColor: `${ROLE.designer}0F` }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ROLE.designer }} />
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="df-marquee-wrap relative overflow-hidden">
                        <div className="flex w-max items-center df-marquee-track-reverse">
                            {Array.from({ length: 2 }).map((_, loop) => (
                                <div key={loop} className="flex items-center">
                                    {ENGINEERING_TOOLS.map((tool) => (
                                        <span
                                            key={`${tool}-${loop}`}
                                            className="df-nav inline-flex items-center gap-2 rounded-full border px-5 py-2.5 mx-2 text-sm text-slate-200"
                                            style={{ borderColor: `${ROLE.engineer}33`, backgroundColor: `${ROLE.engineer}0F` }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ROLE.engineer }} />
                                            {tool}
                                        </span>
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
                    {FEATURED.map(({ title, category, tags, Icon, accent, lead }) => (
                        <motion.div
                            key={title}
                            variants={viewItem}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="df-glass group relative rounded-[28px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                            style={{ borderTop: `2px solid ${accent}55` }}
                        >
                            <div className="relative h-40 m-3 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${accent}2E, ${accent}0A 55%, transparent)` }}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur border border-white/15"
                                        style={{ color: accent }}
                                    >
                                        <Icon className="w-7 h-7" strokeWidth={1.75} />
                                    </span>
                                </div>
                            </div>
                            <div className="px-5 pb-6">
                                <p className="df-cta text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>
                                    {category} · {lead === 'designer' ? 'Dizayn yetakchi' : 'Muhandislik yetakchi'}
                                </p>
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

            {/* ================= PROCESS (a real sequence, so numbering earns its place) ================= */}
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
                        Mijozlarimiz <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EEF1FF, #93C5FD)' }}>nima deydi</span>
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
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-blue-600/15 blur-[100px]"
                    />

                    <div className="relative">
                        <h2 className="df-logo text-3xl md:text-5xl leading-[1.1] text-slate-50 max-w-2xl mx-auto">
                            G'oyangiz bormi? Uni{' '}
                            <motion.span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(90deg, ${ROLE.designer}, #EEF1FF, ${ROLE.engineer})`, backgroundSize: '200% 100%' }}
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

export default Home;