import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const LETTERS = ['D', 'u', 'a', 'l', 'i', 's', ' ', 'T', 'e', 'a', 'm'];

const Preloader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070B] overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
            aria-label="Loading"
        >
            <motion.div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-[120px]"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center"
            >
                <div className="relative">
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-[-10px] rounded-full border border-blue-400/30"
                        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-[-10px] rounded-full border border-blue-400/30"
                        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
                    />
                    <motion.img
                        src={logo}
                        alt="Dualis Team logo"
                        className="w-20 h-20 rounded-full object-cover"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>

                <div className="mt-7 flex overflow-hidden">
                    {LETTERS.map((letter, i) => (
                        <motion.span
                            key={`${letter}-${i}`}
                            className="text-lg md:text-xl font-semibold tracking-[0.35em] text-slate-100"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <div className="absolute bottom-10 w-48 h-[2px] rounded-full bg-white/5 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-700 to-blue-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'left' }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
