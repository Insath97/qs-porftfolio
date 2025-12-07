import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TestimonialSlider from '../components/TestimonialSlider';
import ModernHero from '../components/ModernHero';
import { testimonials } from '../data/testimonials';
import { FiStar } from 'react-icons/fi';

/**
 * Testimonials Page Component
 * Full testimonials page with carousel and grid view
 */
const Testimonials = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Client Reviews"
                title="Client Testimonials"
                description="Hear what our clients say about working with us"
            />

            {/* Testimonial Slider */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Featured Reviews"
                        title="What Our Clients Say"
                    />
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="All Reviews"
                        title="Client Feedback"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                            >
                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className="text-yellow-400 fill-current"
                                            size={20}
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coolBlue to-emerald flex items-center justify-center text-white text-lg font-bold mr-3">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-sm text-coolBlue dark:text-emerald font-semibold">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Project Tag */}
                                {testimonial.project && (
                                    <div className="mt-4">
                                        <span className="inline-block px-3 py-1 bg-coolBlue/10 dark:bg-emerald/10 text-coolBlue dark:text-emerald rounded-full text-xs font-medium">
                                            {testimonial.project}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-navy to-coolBlue text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-5xl font-bold mb-2">150+</p>
                            <p className="text-lg">Happy Clients</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <p className="text-5xl font-bold mb-2">98%</p>
                            <p className="text-lg">Satisfaction Rate</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-5xl font-bold mb-2">5.0</p>
                            <p className="text-lg">Average Rating</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-5xl font-bold mb-2">200+</p>
                            <p className="text-lg">Projects Delivered</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
