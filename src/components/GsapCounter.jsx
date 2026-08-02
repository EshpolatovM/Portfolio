import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const GsapCounter = ({ value, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ''));
        if (isNaN(numeric)) return;
        const suffix = String(value).replace(/[0-9.]/g, '');
        const proxy = { val: 0 };
        const tween = gsap.fromTo(proxy, { val: 0 }, {
            val: numeric,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            onUpdate: () => {
                if (el) el.textContent = Math.round(proxy.val) + suffix;
            },
        });
        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, [value]);

    return (
        <span ref={ref} className={className}>
            {value}
        </span>
    );
};

export default GsapCounter;
