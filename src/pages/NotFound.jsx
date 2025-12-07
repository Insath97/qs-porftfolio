import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

/**
 * 404 Not Found Page Component
 * Custom error page with dark mode support
 */
const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-blackSlate">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    {/* Animated 404 Illustration */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 1,
                        }}
                        className="mb-8"
                    >
                        <div className="text-9xl mb-4">🏗️</div>
                        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                            Page Under Construction
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Oops! The page you're looking for doesn't exist or has been moved.
                            Let's get you back on track.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button to="/" size="lg">
                            Go Back Home
                        </Button>
                        <Button to="/contact" variant="outline" size="lg">
                            Contact Support
                        </Button>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Or explore these pages:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/about"
                                className="text-coolBlue dark:text-emerald hover:underline"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="text-coolBlue dark:text-emerald hover:underline"
                            >
                                Services
                            </Link>
                            <Link
                                to="/projects"
                                className="text-coolBlue dark:text-emerald hover:underline"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/blog"
                                className="text-coolBlue dark:text-emerald hover:underline"
                            >
                                Blog
                            </Link>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute top-20 left-10 text-6xl opacity-20"
                    >
                        📐
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute bottom-20 right-10 text-6xl opacity-20"
                    >
                        📊
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
