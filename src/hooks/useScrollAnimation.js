import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for scroll-triggered animations
 * @param {number} threshold - Percentage of element visibility to trigger animation (0-1)
 * @param {boolean} triggerOnce - Whether to trigger animation only once
 * @returns {Object} - ref and inView status
 */
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });

    return { ref, inView };
};

/**
 * Custom hook for detecting scroll position
 * @returns {number} - Current scroll position
 */
export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPosition;
};
