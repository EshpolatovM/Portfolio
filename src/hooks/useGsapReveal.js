import { useLayoutEffect } from 'react';
import { gsap } from '../lib/gsap';

const useGsapReveal = (scopeRef) => {
    useLayoutEffect(() => {
        const scope = scopeRef.current;
        if (!scope) return;
        const ctx = gsap.context(() => {
            gsap.utils.toArray('[data-reveal]', scope).forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        delay: parseFloat(el.dataset.revealDelay || 0),
                        ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                    }
                );
            });
        }, scope);
        return () => ctx.revert();
    }, [scopeRef]);
};

export default useGsapReveal;
