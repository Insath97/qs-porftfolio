import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import Button from '../components/Button';
import { blogPosts } from '../data/blog';

/**
 * Blog Post Page Component
 * Individual blog post with full content
 */
const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
                        Post Not Found
                    </h2>
                    <Button to="/blog">Back to Blog</Button>
                </div>
            </div>
        );
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white dark:bg-blackSlate">
            {/* Back Button */}
            <div className="container-custom pt-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-coolBlue dark:text-emerald hover:underline"
                >
                    <FiArrowLeft className="mr-2" />
                    Back to Blog
                </Link>
            </div>

            {/* Article Header */}
            <article className="py-12">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-coolBlue/10 dark:bg-emerald/10 text-coolBlue dark:text-emerald rounded-lg font-semibold mb-4">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8">
                            <div className="flex items-center">
                                <FiUser className="mr-2" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <FiCalendar className="mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <FiClock className="mr-2" />
                                {post.readTime}
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full h-96 rounded-xl overflow-hidden mb-12">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23f0f0f0" width="800" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EBlog Image%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                {post.content}
                            </p>

                            <h2 className="text-2xl font-bold text-navy dark:text-white mt-8 mb-4">
                                Key Takeaways
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                                <li>Understanding the fundamentals of quantity surveying</li>
                                <li>Best practices for accurate cost estimation</li>
                                <li>Leveraging modern technology for efficiency</li>
                                <li>Maintaining professional standards and ethics</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-navy dark:text-white mt-8 mb-4">
                                Conclusion
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                In conclusion, mastering these concepts is essential for any quantity surveyor
                                looking to excel in their field. By applying these principles and staying
                                updated with industry trends, professionals can deliver exceptional value to
                                their clients and projects.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            {post.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-lightGray dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Author Box */}
            <section className="py-12 bg-lightGray dark:bg-gray-900">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-coolBlue to-emerald rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-1">
                                    {post.author}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Professional Quantity Surveyor with 10+ years of experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-white dark:bg-blackSlate">
                    <div className="container-custom max-w-6xl">
                        <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.slug}`}
                                    className="bg-lightGray dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23e0e0e0" width="400" height="200"/%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-navy dark:text-white mt-2 mb-2 line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {relatedPost.readTime}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPost;
