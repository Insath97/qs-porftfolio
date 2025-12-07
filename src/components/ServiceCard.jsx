import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Service Card Component
 * Displays a service with icon, title, description, and features
 * @param {string} icon - Service icon (emoji or component)
 * @param {string} title - Service title
 * @param {string} description - Service description
 * @param {array} features - List of service features
 * @param {number} delay - Animation delay
 */
const ServiceCard = ({ icon, title, description, features, delay = 0 }) => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="card-hover p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
        >
            {/* Icon */}
            <div className="text-5xl mb-4">{icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {description}
            </p>

            {/* Features List */}
            {features && features.length > 0 && (
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                        >
                            <span className="text-coolBlue dark:text-emerald mr-2">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-coolBlue to-emerald opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

export default ServiceCard;
