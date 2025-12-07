import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiTarget, FiHeart } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Timeline from '../components/Timeline';
import ModernHero from '../components/ModernHero';
import { skills } from '../data/skills';
import SkillBar from '../components/SkillBar';

/**
 * About Page Component
 * Full professional bio, education, certificates, and mission
 */
const About = () => {
    // Education and certifications timeline
    const educationTimeline = [
        {
            year: '2023',
            title: 'RICS Chartered Quantity Surveyor',
            organization: 'Royal Institution of Chartered Surveyors',
            description: 'Achieved chartered status demonstrating professional competence',
        },
        {
            year: '2018',
            title: 'Master of Construction Management',
            organization: 'International University of Technology',
            description: 'Specialized in advanced cost management and project controls',
        },
        {
            year: '2011 - 2015',
            title: 'Bachelor of Quantity Surveying',
            organization: 'University of Construction Sciences',
            description: 'First Class Honours, Dean\'s List all semesters',
        },
    ];

    // Certificates and achievements
    const certificates = [
        { name: 'RICS Chartered QS', icon: '🏆' },
        { name: 'PMP Certified', icon: '📜' },
        { name: 'BIM Level 2', icon: '🏗️' },
        { name: 'LEED Accredited', icon: '🌱' },
        { name: 'Contract Management', icon: '📋' },
        { name: 'Cost Engineering', icon: '💰' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Professional Profile"
                title="About Me"
                description="Passionate about delivering precision and excellence in every project"
            />

            {/* Professional Bio */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Professional Headshot */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative">
                                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/profile/profile-photo.jpg"
                                        alt="Professional Quantity Surveyor"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EProfile Photo%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-coolBlue to-emerald p-6 rounded-2xl text-white">
                                    <p className="text-3xl font-bold">RICS</p>
                                    <p className="text-sm">Chartered</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle
                                subtitle="Professional Bio"
                                title="Building a Legacy of Excellence"
                                centered={false}
                            />
                            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                <p className="leading-relaxed">
                                    I am a RICS Chartered Quantity Surveyor with over 12 years of experience
                                    in delivering cost-effective solutions for construction projects worldwide.
                                    My journey in quantity surveying began with a passion for precision and
                                    a commitment to excellence.
                                </p>
                                <p className="leading-relaxed">
                                    Throughout my career, I have successfully managed projects valued at over
                                    $500 million, spanning residential, commercial, infrastructure, and mixed-use
                                    developments across multiple continents. My expertise lies in accurate cost
                                    estimation, comprehensive BOQ preparation, strategic procurement, and effective
                                    contract administration.
                                </p>
                                <p className="leading-relaxed">
                                    I believe in leveraging modern technology and industry best practices to
                                    deliver exceptional value to clients while maintaining the highest standards
                                    of professional integrity.
                                </p>
                            </div>
                            <div className="mt-6">
                                <Button icon={<FiDownload />}>Download Full CV</Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission, Goals, Values */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Core Principles"
                        title="Mission, Goals & Values"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coolBlue to-emerald rounded-full flex items-center justify-center text-white text-3xl">
                                <FiTarget />
                            </div>
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Mission</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                To provide world-class quantity surveying services that optimize costs,
                                enhance value, and ensure project success through precision and expertise.
                            </p>
                        </motion.div>

                        {/* Goals */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald to-coolBlue rounded-full flex items-center justify-center text-white text-3xl">
                                <FiAward />
                            </div>
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Goals</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                To continuously expand expertise in emerging construction technologies,
                                deliver exceptional client satisfaction, and contribute to sustainable
                                building practices.
                            </p>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-navy to-coolBlue rounded-full flex items-center justify-center text-white text-3xl">
                                <FiHeart />
                            </div>
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Values</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Integrity, accuracy, professionalism, innovation, and commitment to
                                excellence in every aspect of quantity surveying practice.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Academic Background"
                        title="Education & Certifications"
                    />
                    <div className="max-w-5xl mx-auto mb-16">
                        <Timeline items={educationTimeline} />
                    </div>
                </div>
            </section>

            {/* Certificates & Badges */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Achievements"
                        title="Professional Certifications"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-5xl mb-3">{cert.icon}</div>
                                <p className="font-semibold text-navy dark:text-white text-sm">
                                    {cert.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Competencies"
                        title="Core Skills & Expertise"
                    />
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <SkillBar
                                key={skill.id}
                                name={skill.name}
                                percentage={skill.percentage}
                                delay={index * 0.05}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-navy to-coolBlue text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Interested in collaborating on your next project? Get in touch today.
                        </p>
                        <Button to="/contact" variant="secondary" size="lg">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
