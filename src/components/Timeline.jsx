import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Timeline Component
 * Vertical timeline for education and work experience
 * @param {array} items - Array of timeline items
 */
const Timeline = ({ items }) => {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-coolBlue to-emerald" />

            {/* Timeline Items */}
            <div className="space-y-12">
                {items.map((item, index) => {
                    const { ref, inView } = useScrollAnimation(0.2);
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-row`}
                        >
                            {/* Content */}
                            <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-8 md:pl-0`}>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                                    <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mt-2 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                        {item.organization}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-coolBlue to-emerald border-4 border-white dark:border-gray-900 z-10" />

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-5/12" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
