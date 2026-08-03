import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Send, Check, Mail, Phone, MapPin, Clock } from 'lucide-react';
import useGsapReveal from '../hooks/useGsapReveal.js';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const INFO = [
    { Icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { Icon: Phone, label: 'Telefon', value: '+998 90 123 45 67', href: 'tel:+998901234567' },
    { Icon: MapPin, label: 'Manzil', value: 'Tashkent, Uzbekistan', href: null },
    { Icon: Clock, label: 'Ish vaqti', value: 'Du–Sha, 9:00 – 19:00', href: null },
];

const SOCIALS = ['Github', 'LinkedIn', 'Telegram', 'Instagram'];

const Contact = () => {
    const pageRef = useRef(null);
    useGsapReveal(pageRef);
    const shouldReduceMotion = useReducedMotion();

    const [sent, setSent] = useState(false);

    const fieldClass =
        "df-nav peer w-full bg-transparent border-0 border-b border-white/15 pb-3 pt-2 text-base text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300";

    return (
        <div className="contact-shell bg-[#040711]" ref={pageRef}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');

        .contact-shell .df-serif,
        .contact-shell .df-display,
        .contact-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .contact-shell .df-nav,
        .contact-shell .df-cta,
        .contact-shell .df-mono { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        @keyframes df-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.55; } }
        .contact-shell .df-pulse-dot { animation: df-pulse 2.4s ease-in-out infinite; }

        @keyframes df-pulse-centered { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.5); } }
        .contact-shell .df-pulse-dot-centered { animation: df-pulse-centered 2.4s ease-in-out infinite; }

        @keyframes df-drift { 0%, 100% { opacity: 0.45; } 50% { opacity: 0.85; } }
        .contact-shell .df-drift { animation: df-drift 8s ease-in-out infinite; }

        .contact-shell .df-field:focus-within .df-field-tag { opacity: 1; transform: translateY(0); }
        .contact-shell .df-field-tag { opacity: 0.35; transform: translateY(2px); transition: all 0.25s ease; }
      `}</style>

            {/* ================= HERO — TWO MINDS SPLIT ================= */}
            <section className="relative overflow-hidden px-4 md:px-6 pt-24 pb-8 md:pt-32">
                <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[480px] rounded-full bg-blue-600/10 blur-[140px] ${shouldReduceMotion ? '' : 'df-drift'}`}
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative mx-auto max-w-5xl"
                >
                    <motion.p variants={item} className="df-mono text-center text-xs uppercase tracking-[0.35em] text-slate-500 mb-5">
                        Bog'lanish
                    </motion.p>
                    <motion.h1 variants={item} className="df-display text-center text-4xl md:text-6xl leading-[1.08] text-slate-50 mb-16 md:mb-24">
                        Ikki fikr,{' '}
                        <span className="df-serif text-blue-300">bitta yechim.</span>
                    </motion.h1>

                    {/* Split panels: Design (light, thin) / Engineering (deep, bold) — same hue, two registers */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                        <motion.div variants={item} className="md:pr-14 md:text-right">
                            <span className="df-mono inline-flex items-center gap-2 text-xs tracking-[0.3em] text-blue-200/70 uppercase md:flex-row-reverse font-medium">
                                <span className="w-1.5 h-1.5 rounded-full border border-blue-200/70" />
                                D — Dizayn
                            </span>
                            <p className="df-serif mt-4 text-2xl md:text-[28px] text-slate-200 leading-snug">
                                G'oya va hissiyot ortidagi ma'no.
                            </p>
                            <p className="df-nav mt-4 text-sm text-slate-500 max-w-xs md:ml-auto">
                                Har bir piksel, rang va bo'shliq — foydalanuvchi tajribasiga xizmat qiladi.
                            </p>
                        </motion.div>

                        {/* mobile connector */}
                        <div className="flex md:hidden items-center gap-3 my-9" aria-hidden="true">
                            <span className="h-px flex-1 bg-white/10" />
                            <span className="w-2 h-2 rounded-full bg-blue-400 df-pulse-dot" />
                            <span className="h-px flex-1 bg-white/10" />
                        </div>

                        {/* desktop connector */}
                        <div className="hidden md:block absolute inset-y-2 left-1/2 w-px -translate-x-1/2" aria-hidden="true">
                            <div className="h-full w-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                            <span
                                className="absolute w-2.5 h-2.5 rounded-full bg-blue-400 df-pulse-dot-centered"
                                style={{ top: '50%', left: '50%' }}
                            />
                        </div>

                        <motion.div variants={item} className="md:pl-14">
                            <span className="df-mono inline-flex items-center gap-2 text-xs tracking-[0.3em] text-blue-400 uppercase font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                E — Muhandislik
                            </span>
                            <p className="df-serif mt-4 text-2xl md:text-[28px] text-slate-100 leading-snug">
                                Kod, tezlik va ishonchlilik.
                            </p>
                            <p className="df-nav mt-4 text-sm text-slate-400 max-w-xs">
                                Arxitektura mustahkam, ishlash tez, natija uzoq yillar davom etadi.
                            </p>
                        </motion.div>
                    </div>

                    {/* Convergence CTA */}
                    <motion.div variants={item} className="mt-16 md:mt-20 flex flex-col items-center">
                        <a
                            href="mailto:hello@example.com"
                            className="group relative inline-flex items-center gap-4 rounded-full border border-blue-400/25 pl-8 pr-2 py-2 text-lg md:text-2xl text-slate-100 overflow-hidden transition-all duration-300 hover:border-blue-300/60 hover:shadow-[0_0_45px_-8px_rgba(96,165,250,0.55)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                        >
                            <span className="df-nav relative">hello@example.com</span>
                            <span className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.25} />
                            </span>
                        </a>
                        <p className="df-nav mt-5 text-sm text-slate-500">yoki quyidagi formani to'ldiring</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= FORM ================= */}
            <section className="relative mx-auto max-w-2xl px-4 md:px-6 pt-16 pb-24">
                <div data-reveal>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSent(true);
                        }}
                        className="flex flex-col gap-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <div className="df-field relative">
                                <span className="df-field-tag df-mono absolute -top-4 left-0 text-[10px] tracking-[0.25em] text-blue-200/80 uppercase">Ism</span>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ismingiz"
                                    className={`${fieldClass} focus:border-blue-200/70`}
                                />
                            </div>
                            <div className="df-field relative">
                                <span className="df-field-tag df-mono absolute -top-4 left-0 text-[10px] tracking-[0.25em] text-blue-400 uppercase">Email</span>
                                <input
                                    type="email"
                                    required
                                    placeholder="Email manzilingiz"
                                    className={`${fieldClass} focus:border-blue-400/70`}
                                />
                            </div>
                        </div>

                        <div className="df-field relative">
                            <span className="df-field-tag df-mono absolute -top-4 left-0 text-[10px] tracking-[0.25em] text-slate-400 uppercase">Mavzu</span>
                            <input type="text" placeholder="Mavzu" className={`${fieldClass} focus:border-white/40`} />
                        </div>

                        <div className="df-field relative">
                            <span className="df-field-tag df-mono absolute -top-4 left-0 text-[10px] tracking-[0.25em] text-slate-400 uppercase">Xabar</span>
                            <textarea
                                required
                                rows={4}
                                placeholder="Xabaringiz..."
                                className={`${fieldClass} resize-none focus:border-white/40`}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="df-cta group relative mt-2 inline-flex items-center justify-center gap-3 self-start rounded-full border border-blue-400/25 px-8 py-4 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:border-blue-300/60 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                        >
                            {sent ? (
                                <span className="relative z-10 inline-flex items-center gap-2 text-blue-200">
                                    <Check className="w-4 h-4" strokeWidth={2.5} />
                                    Yuborildi! Rahmat.
                                </span>
                            ) : (
                                <>
                                    <span className="relative z-10">Xabar yuborish</span>
                                    <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                        <Send className="w-4 h-4" strokeWidth={2} />
                                    </span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </section>

            {/* ================= INFO + SOCIAL ================= */}
            <section className="relative mx-auto max-w-5xl px-4 md:px-6 pb-28">
                <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-white/10">
                    {INFO.map(({ Icon, label, value, href }) => (
                        <div key={label} className="flex flex-col items-start gap-2 bg-[#05070f] px-6 py-7">
                            <span className="w-9 h-9 rounded-full flex items-center justify-center text-blue-300 bg-blue-500/10 border border-blue-400/20">
                                <Icon className="w-4 h-4" strokeWidth={1.75} />
                            </span>
                            <p className="df-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{label}</p>
                            {href ? (
                                <a href={href} className="df-nav text-sm text-slate-200 hover:text-blue-300 transition-colors duration-200">
                                    {value}
                                </a>
                            ) : (
                                <p className="df-nav text-sm text-slate-200">{value}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    {SOCIALS.map((name) => (
                        <a
                            key={name}
                            href="#"
                            className="df-nav group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-slate-50"
                        >
                            {name}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;