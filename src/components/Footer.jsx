import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiLinkedin,
    FiGithub,
    FiTwitter,
    FiFacebook
} from 'react-icons/fi';

/**
 * Footer Component
 * Multi-column footer with links, contact info, and social media
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Quick links
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
    ];

    // Resources links
    const resourceLinks = [
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    // Social media links
    const socialLinks = [
        { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
        { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter' },
        { icon: <FiFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    ];

    return (
        <footer className="bg-navy dark:bg-blackSlate text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">QS</span> Portfolio
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Professional Quantity Surveyor providing expert cost estimation, BOQ preparation, and project management services.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-coolBlue/20 hover:bg-coolBlue flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-coolBlue transition-colors inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-coolBlue transition-colors inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FiMapPin className="text-coolBlue mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    123 Construction Avenue<br />
                                    Building City, BC 12345
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiPhone className="text-coolBlue flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-coolBlue transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FiMail className="text-coolBlue flex-shrink-0" />
                                <a href="mailto:info@qsportfolio.com" className="text-gray-300 hover:text-coolBlue transition-colors">
                                    info@qsportfolio.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-8 border-t border-gray-700"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} QS Portfolio. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-coolBlue transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-coolBlue transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
