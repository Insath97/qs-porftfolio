import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import ModernHero from '../components/ModernHero';
import ContactForm from '../components/ContactForm';

/**
 * Contact Page Component
 * Contact form, map, and contact information
 */
const Contact = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Let's Talk"
                title="Get In Touch"
                description="Let's discuss how we can help with your next project"
            />

            {/* Contact Section */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle
                                subtitle="Send Message"
                                title="Contact Form"
                                centered={false}
                            />
                            <ContactForm />
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle
                                subtitle="Contact Info"
                                title="Reach Out Directly"
                                centered={false}
                            />

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-4 p-6 bg-lightGray dark:bg-gray-800 rounded-xl"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-coolBlue to-emerald rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                        <FiMapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white mb-1">Address</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            123 Construction Avenue<br />
                                            Building City, BC 12345<br />
                                            United Kingdom
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-4 p-6 bg-lightGray dark:bg-gray-800 rounded-xl"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald to-coolBlue rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                        <FiPhone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white mb-1">Phone</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            +1 (234) 567-890<br />
                                            +44 (20) 1234-5678
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-4 p-6 bg-lightGray dark:bg-gray-800 rounded-xl"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-coolBlue rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                        <FiMail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white mb-1">Email</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            info@qsportfolio.com<br />
                                            contact@qsportfolio.com
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8">
                                <div className="w-full h-64 bg-gradient-to-br from-coolBlue/20 to-emerald/20 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-5xl mb-2">🗺️</p>
                                        <p className="text-gray-600 dark:text-gray-400">Google Map Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom text-center">
                    <SectionTitle
                        subtitle="Connect"
                        title="Follow Us on Social Media"
                    />
                    <div className="flex justify-center space-x-6">
                        {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                            <motion.a
                                key={social}
                                href="#"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="w-16 h-16 bg-gradient-to-br from-coolBlue to-emerald rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                            >
                                {social[0]}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
