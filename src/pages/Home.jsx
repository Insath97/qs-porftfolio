import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import Counter from '../components/Counter';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialSlider from '../components/TestimonialSlider';
import Timeline from '../components/Timeline';
import { skills, tools } from '../data/skills';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blog';

/**
 * Home Page Component
 * Comprehensive homepage with 12+ sections
 */
const Home = () => {
    // Timeline data for education and experience
    const timelineData = [
        {
            year: '2020 - Present',
            title: 'Senior Quantity Surveyor',
            organization: 'Global Construction Ltd',
            description: 'Leading cost management and estimation for major international projects',
        },
        {
            year: '2017 - 2020',
            title: 'Quantity Surveyor',
            organization: 'BuildTech Solutions',
            description: 'Managed BOQ preparation and tender documentation for commercial projects',
        },
        {
            year: '2015 - 2017',
            title: 'Junior Quantity Surveyor',
            organization: 'Construction Partners Inc',
            description: 'Assisted in cost estimation and quantity takeoff for residential developments',
        },
        {
            year: '2011 - 2015',
            title: 'Bachelor of Quantity Surveying',
            organization: 'University of Construction Sciences',
            description: 'Graduated with First Class Honours, specialized in cost management',
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* 1. MODERN HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-coolBlue/20 via-emerald/20 to-navy/20"></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-coolBlue/30 to-emerald/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald/20 to-navy/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-coolBlue/10 to-transparent rounded-full blur-3xl"
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}

                {/* Hero Content */}
                <div className="container-custom relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full glass border border-white/20 backdrop-blur-xl"
                        >
                            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse"></span>
                            <span className="text-white/90 font-medium text-sm md:text-base">RICS Chartered Quantity Surveyor</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-white block mb-2">Precision Meets</span>
                            <span className="bg-gradient-to-r from-coolBlue via-emerald to-cyan-400 bg-clip-text text-transparent inline-block">
                                Excellence
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light"
                        >
                            Delivering world-class cost estimation, BOQ preparation, and project management
                            <span className="text-emerald font-medium"> for construction excellence worldwide</span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button to="/projects" size="lg" icon={<FiArrowRight />}>
                                Explore Projects
                            </Button>
                            <Button to="/contact" variant="outline" size="lg">
                                Let's Connect
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
                        >
                            {[
                                { number: '150+', label: 'Projects' },
                                { number: '$500M+', label: 'Value Managed' },
                                { number: '12+', label: 'Years Experience' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="flex flex-col items-center gap-2 text-white/60">
                            <span className="text-xs uppercase tracking-wider">Scroll</span>
                            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1 h-3 bg-white/60 rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ABOUT SUMMARY */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative">
                                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
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
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-coolBlue to-emerald rounded-2xl flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold">10+</p>
                                        <p className="text-sm">Years</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle
                                subtitle="About Me"
                                title="Building Excellence Through Precision"
                                centered={false}
                            />
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                With over a decade of experience in quantity surveying, I specialize in
                                delivering accurate cost estimates, comprehensive BOQ preparation, and
                                strategic project management for construction projects of all scales.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                My expertise spans residential, commercial, infrastructure, and mixed-use
                                developments across multiple continents, ensuring cost-effective solutions
                                without compromising quality.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button to="/about" icon={<FiArrowRight />}>
                                    Learn More
                                </Button>
                                <Button variant="outline" icon={<FiDownload />}>
                                    Download CV
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. MULTIMEDIA INTRO */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Multimedia Showcase"
                        title="Experience Quality Work"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
                                title: 'Construction Excellence',
                                description: 'Professional site management'
                            },
                            {
                                id: 2,
                                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
                                title: 'Precise Planning',
                                description: 'Detailed cost estimation'
                            },
                            {
                                id: 3,
                                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                                title: 'Data-Driven Decisions',
                                description: 'Comprehensive reporting'
                            }
                        ].map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.id * 0.1 }}
                                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                                        <div className="text-white">
                                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-200">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICES PREVIEW */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="What I Offer"
                        title="Professional QS Services"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.slice(0, 4).map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description.substring(0, 100) + '...'}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button to="/services" icon={<FiArrowRight />}>
                            View All Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. SKILLS SECTION */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Expertise"
                        title="Professional Skills"
                    />
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
                        {skills.slice(0, 8).map((skill, index) => (
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

            {/* 6. FEATURED QS SOFTWARE/TOOLS */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Technology"
                        title="QS Software & Tools"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-4xl mb-3">{tool.icon}</div>
                                <h4 className="font-bold text-navy dark:text-white mb-1">
                                    {tool.name}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {tool.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FEATURED PROJECT HIGHLIGHTS */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Portfolio"
                        title="Featured Projects"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button to="/projects" icon={<FiArrowRight />}>
                            View All Projects
                        </Button>
                    </div>
                </div>
            </section>

            {/* 8. ANIMATED STATISTICS/FACTS COUNTERS */}
            <section className="py-20 bg-gradient-to-r from-navy to-coolBlue">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <Counter end={150} suffix="+" label="Projects Completed" />
                        <Counter end={45} suffix="M+" prefix="$" label="Value Managed" />
                        <Counter end={98} suffix="%" label="Client Satisfaction" />
                        <Counter end={12} suffix="+" label="Years Experience" />
                    </div>
                </div>
            </section>

            {/* 9. VIDEO SECTION */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Watch"
                        title="QS Workflow Demonstration"
                    />
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1&playlist=ScMzIvxBSi4"
                                title="QS Workflow Demonstration"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. TIMELINE (Education + Work Experience) */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Journey"
                        title="Education & Experience"
                    />
                    <div className="max-w-5xl mx-auto">
                        <Timeline items={timelineData} />
                    </div>
                </div>
            </section>

            {/* 11. TESTIMONIALS SLIDER */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Client Feedback"
                        title="What Clients Say"
                    />
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section>

            {/* 12. BLOG/ARTICLES PREVIEW */}
            <section className="py-20 bg-lightGray dark:bg-gray-900">
                <div className="container-custom">
                    <SectionTitle
                        subtitle="Insights"
                        title="Latest Articles"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
                            >
                                <Link to={`/blog/${post.slug}`}>
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23f0f0f0" width="400" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EBlog Image%3C/text%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mt-2 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button to="/blog" icon={<FiArrowRight />}>
                            Read More Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* 13. CTA HIRE-ME BANNER */}
            <section className="py-20 bg-gradient-to-r from-coolBlue via-emerald to-navy relative overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />

                <div className="container-custom relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Let's discuss how I can help you achieve cost-effective excellence
                            in your next construction project
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/contact" variant="secondary" size="lg">
                                Hire Me Now
                            </Button>
                            <Button to="/projects" variant="outline" size="lg">
                                View Portfolio
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
