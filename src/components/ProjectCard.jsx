import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiDollarSign, FiClock, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Project Card Component
 * Displays project information with image, details, and modal view
 * @param {object} project - Project data object
 * @param {number} delay - Animation delay
 */
const ProjectCard = ({ project, delay = 0 }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { ref, inView } = useScrollAnimation(0.2);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay }}
                className="card-hover rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg group cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                        }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">View Details</span>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed'
                                ? 'bg-emerald text-white'
                                : 'bg-coolBlue text-white'
                            }`}>
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                            {project.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {project.year}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FiMapPin className="mr-2 text-coolBlue" />
                            {project.location}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FiDollarSign className="mr-2 text-emerald" />
                            {project.cost}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <FiClock className="mr-2 text-navy dark:text-coolBlue" />
                            {project.duration}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                <FiX size={24} className="text-gray-800 dark:text-white" />
                            </button>

                            {/* Image Gallery */}
                            <div className="relative h-96 bg-gray-100 dark:bg-gray-900">
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23f0f0f0" width="800" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                                    }}
                                />

                                {/* Image Navigation */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <FiChevronLeft size={24} className="text-gray-800 dark:text-white" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <FiChevronRight size={24} className="text-gray-800 dark:text-white" />
                                        </button>

                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-sm">
                                            {currentImageIndex + 1} / {project.images.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {project.images.length > 1 && (
                                <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900">
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                                                    ? 'border-coolBlue scale-105'
                                                    : 'border-transparent opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23e0e0e0" width="80" height="80"/%3E%3C/svg%3E';
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-coolBlue dark:text-emerald">
                                        {project.category}
                                    </span>
                                    <h2 className="text-3xl font-bold text-navy dark:text-white mt-2 mb-4">
                                        {project.title}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                        <p className="font-semibold text-navy dark:text-white">{project.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Cost</p>
                                        <p className="font-semibold text-navy dark:text-white">{project.cost}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                                        <p className="font-semibold text-navy dark:text-white">{project.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                                        <p className="font-semibold text-navy dark:text-white">{project.status}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Role</h3>
                                    <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Description</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Responsibilities</h3>
                                    <ul className="space-y-2">
                                        {project.responsibilities.map((resp, index) => (
                                            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                                <span className="text-coolBlue dark:text-emerald mr-2">•</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
