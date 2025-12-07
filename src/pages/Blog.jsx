import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiClock, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import ModernHero from '../components/ModernHero';
import { blogPosts, blogCategories } from '../data/blog';

/**
 * Blog Page Component
 * Blog list with search and filtering
 */
const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter posts
    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Insights & Knowledge"
                title="Blog & Insights"
                description="Expert insights on quantity surveying and construction management"
            />

            {/* Blog Section */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    {/* Search and Filter */}
                    <div className="mb-12">
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coolBlue"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {blogCategories.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-coolBlue to-emerald text-white'
                                        : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-lightGray dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
                            >
                                {/* Post Image */}
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

                                {/* Post Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <FiClock className="mr-1" size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </span>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="text-coolBlue dark:text-emerald font-semibold text-sm flex items-center hover:underline"
                                        >
                                            Read More <FiArrowRight className="ml-1" />
                                        </Link>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {post.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-coolBlue/10 dark:bg-emerald/10 text-coolBlue dark:text-emerald rounded text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-600 dark:text-gray-400">
                                No articles found matching your criteria
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
