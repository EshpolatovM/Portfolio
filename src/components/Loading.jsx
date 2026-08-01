import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/index.js';

const Loading = () => {
    const { t } = useLanguage();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-(--bg-c)">
            {/* Ambient glows */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center gap-8"
            >
                {/* Conic-ring spinner + logo */}
                <div className="relative h-24 w-24">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-1 rounded-full opacity-90"
                        style={{
                            background: 'conic-gradient(from 0deg, #2563EB, #22D3EE, transparent 55%, #2563EB)',
                            animation: 'spin-slow 1.1s linear infinite',
                            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
                            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
                        }}
                    />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-(--bg-a) border border-(--border) shadow-[0_20px_60px_-20px_rgba(37,99,235,0.6)]">
                        <img src={logo} alt="Dualis Team logo" className="h-full w-full rounded-full object-cover" />
                    </div>
                </div>

                {/* Text */}
                <div className="text-center">
                    <p className="df-logo text-lg font-semibold tracking-tight text-(--text-strong)">Dualis Team</p>
                    <p className="df-nav mt-1 text-sm text-(--text-muted)">{t('loading')}</p>
                </div>

                {/* Progress bar */}
                <div className="h-1 w-52 overflow-hidden rounded-full bg-(--border-soft)">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Loading;
