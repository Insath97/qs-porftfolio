import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlay } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import ModernHero from '../components/ModernHero';
import { galleryImages, galleryVideos, galleryCategories } from '../data/gallery';

/**
 * Gallery Page Component
 * Multimedia gallery with real images and videos
 */
const Gallery = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [activeTab, setActiveTab] = useState('images');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [playingVideo, setPlayingVideo] = useState(null);

    // Gallery tabs
    const tabs = [
        { id: 'images', label: 'Images' },
        { id: 'videos', label: 'Videos' },
    ];

    // Filter images by category
    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ModernHero
                badge="Multimedia Showcase"
                title="Gallery"
                description="Explore our multimedia collection of projects and construction work"
            />

            {/* Gallery Section */}
            <section className="py-20 bg-white dark:bg-blackSlate">
                <div className="container-custom">
                    {/* Tabs */}
                    <div className="flex justify-center space-x-4 mb-12">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-coolBlue to-emerald text-white shadow-lg'
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Images Tab */}
                    {activeTab === 'images' && (
                        <>
                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {galleryCategories.map((category) => (
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

                            {/* Images Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {filteredImages.map((image, index) => (
                                    <motion.div
                                        key={image.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setLightboxImage(image)}
                                        className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg group"
                                    >
                                        <div className="relative w-full h-full">
                                            <img
                                                src={image.thumbnail}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div className="text-white">
                                                    <p className="font-semibold text-sm">{image.title}</p>
                                                    <p className="text-xs text-gray-300">{image.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Videos Tab */}
                    {activeTab === 'videos' && (
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {galleryVideos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-lightGray dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                                >
                                    {playingVideo === video.id ? (
                                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={`${video.videoUrl}?autoplay=1`}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div
                                            className="relative aspect-video cursor-pointer group"
                                            onClick={() => setPlayingVideo(video.id)}
                                        >
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <FiPlay className="text-navy text-2xl ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {video.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
                        >
                            <FiX size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-6xl w-full"
                        >
                            <img
                                src={lightboxImage.url}
                                alt={lightboxImage.title}
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                            <div className="mt-6 text-center text-white">
                                <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                                <p className="text-lg text-gray-300">{lightboxImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
