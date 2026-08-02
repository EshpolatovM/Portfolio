import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home } from 'lucide-react';
import useGsapReveal from '../hooks/useGsapReveal.js';

const NotFound = () => {
    const pageRef = useRef(null);
    useGsapReveal(pageRef);

    return (
        <div className="notfound-shell" ref={pageRef}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap');
        .notfound-shell .df-logo { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 500; letter-spacing: -0.01em; }
        .notfound-shell .df-nav,
        .notfound-shell .df-cta { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>

            <section className="relative overflow-hidden px-4 md:px-6 py-16 min-h-screen flex items-center">
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/15 blur-[130px]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative mx-auto max-w-3xl text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="df-cta text-xs uppercase tracking-[0.3em] text-blue-300/80 mb-6"
                        data-reveal
                    >
                        Error 404
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="df-logo text-[9rem] md:text-[13rem] leading-none bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(180deg, #EEF1FF, #93C5FD, #1D4ED8)' }}
                    >
                        404
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="df-logo text-3xl md:text-4xl text-slate-50 mt-2"
                    >
                        Sahifa topilmadi
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="df-nav mt-4 text-lg text-slate-400 max-w-md mx-auto"
                    >
                        Qidirayotgan sahifa ko'chirilgan yoki endi mavjud emas. Bosh sahifaga qaytib, qolgan ishlarimizni ko'ring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            to="/"
                            className="df-cta group relative inline-flex items-center gap-3 rounded-full border border-blue-400/25 pl-6 pr-1.5 py-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(96,165,250,0.5)] hover:border-blue-300/60 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 text-sm font-medium text-white">Bosh sahifa</span>
                            <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-400 transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                            </span>
                        </Link>
                        <Link
                            to="/project"
                            className="df-cta group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-300/50 hover:bg-blue-400/10 hover:-translate-y-0.5"
                        >
                            <Home className="w-4 h-4" strokeWidth={1.75} />
                            Ishlarimiz
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
