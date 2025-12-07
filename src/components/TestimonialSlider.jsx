import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

/**
 * Testimonial Slider Component
 * Carousel for displaying client testimonials
 * @param {array} testimonials - Array of testimonial objects
 */
const TestimonialSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Navigate to next testimonial
    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    // Navigate to previous testimonial
    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Slide animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-xl"
                    >
                        {/* Quote Icon */}
                        <div className="text-6xl text-coolBlue/20 dark:text-emerald/20 mb-4">
                            "
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                            {currentTestimonial.text}
                        </p>

                        {/* Rating Stars */}
                        <div className="flex items-center mb-6">
                            {[...Array(currentTestimonial.rating)].map((_, index) => (
                                <FiStar
                                    key={index}
                                    className="text-yellow-400 fill-current"
                                    size={20}
                                />
                            ))}
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coolBlue to-emerald flex items-center justify-center text-white text-2xl font-bold mr-4">
                                {currentTestimonial.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-navy dark:text-white text-lg">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {currentTestimonial.position}
                                </p>
                                <p className="text-coolBlue dark:text-emerald text-sm font-semibold">
                                    {currentTestimonial.company}
                                </p>
                            </div>
                        </div>

                        {/* Project Tag */}
                        {currentTestimonial.project && (
                            <div className="mt-4">
                                <span className="inline-block px-3 py-1 bg-coolBlue/10 dark:bg-emerald/10 text-coolBlue dark:text-emerald rounded-full text-sm font-medium">
                                    Project: {currentTestimonial.project}
                                </span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center mt-8 space-x-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-coolBlue text-white hover:bg-coolBlue/90 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <FiChevronLeft size={24} />
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-coolBlue dark:bg-emerald w-8'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-coolBlue text-white hover:bg-coolBlue/90 transition-colors"
                    aria-label="Next testimonial"
                >
                    <FiChevronRight size={24} />
                </motion.button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
