import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Counter Component
 * Animated number counter with scroll trigger
 * @param {number} end - End value for counter
 * @param {string} label - Counter label
 * @param {string} suffix - Optional suffix (e.g., '+', 'M')
 * @param {string} prefix - Optional prefix (e.g., '$')
 * @param {number} duration - Animation duration in seconds
 */
const Counter = ({ end, label, suffix = '', prefix = '', duration = 2 }) => {
    const { ref, inView } = useScrollAnimation(0.3);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
        >
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {inView && (
                    <>
                        {prefix}
                        <CountUp end={end} duration={duration} separator="," />
                        {suffix}
                    </>
                )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{label}</p>
        </motion.div>
    );
};

export default Counter;
