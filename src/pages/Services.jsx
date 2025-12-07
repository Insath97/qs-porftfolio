import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import ModernHero from '../components/ModernHero';
import { services } from '../data/services';

/**
 * Services Page Component
 * Displays all QS services with detailed information
 */
const Services = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="What We Offer"
                title="Our Services"
                description="Comprehensive quantity surveying solutions tailored to your project needs"
            />

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="What We Offer"
                        title="Professional QS Services"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Every project is unique. Let's discuss how we can tailor our services to meet your specific requirements.
                        </p>
                        <Button to="/contact" size="lg">
                            Get in Touch
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
