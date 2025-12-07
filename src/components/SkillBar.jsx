import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Skill Bar Component
 * Animated progress bar showing skill proficiency
 * @param {string} name - Skill name
 * @param {number} percentage - Proficiency percentage (0-100)
 * @param {number} delay - Animation delay
 */
const SkillBar = ({ name, percentage, delay = 0 }) => {
    const { ref, inView } = useScrollAnimation(0.3);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="mb-6"
        >
            {/* Skill Name and Percentage */}
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{name}</span>
                <span className="text-coolBlue dark:text-emerald font-bold">{percentage}%</span>
            </div>

            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* Progress Bar Fill */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-coolBlue to-emerald rounded-full relative"
                >
                    {/* Shimmer Effect */}
                    <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillBar;
