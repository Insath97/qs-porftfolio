import { motion } from 'framer-motion';

/**
 * Reusable Section Title Component
 * @param {string} title - Main title text
 * @param {string} subtitle - Optional subtitle text
 * @param {boolean} centered - Center align the title
 * @param {string} className - Additional CSS classes
 */
const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
        >
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-coolBlue dark:text-emerald font-semibold text-sm uppercase tracking-wider mb-2"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: centered ? 100 : 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`h-1 bg-gradient-to-r from-coolBlue to-emerald rounded-full ${centered ? 'mx-auto' : ''}`}
            />
        </motion.div>
    );
};

export default SectionTitle;
