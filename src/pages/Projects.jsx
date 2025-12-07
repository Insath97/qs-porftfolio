import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ModernHero from '../components/ModernHero';
import { projects, projectCategories } from '../data/projects';

/**
 * Projects Page Component
 * Displays all projects with filtering
 */
const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Portfolio"
                title="Our Projects"
                description="Explore our portfolio of successful construction projects worldwide"
            />

            {/* Projects Section */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {projectCategories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-coolBlue to-emerald text-white shadow-lg'
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-600 dark:text-gray-400">
                                No projects found in this category
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
