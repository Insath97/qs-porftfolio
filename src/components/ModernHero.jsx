import React from 'react';
import { motion } from 'framer-motion';

/**
 * Modern Hero Component
 * Reusable elegant hero section for all pages
 */
const ModernHero = ({
    badge = null,
    title,
    subtitle,
    description = null,
    gradient = "from-slate-900 via-blue-900 to-slate-900"
}) => {
    return (
        <section className={`relative py-32 md:py-40 overflow-hidden bg-gradient-to-br ${gradient}`}>
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-coolBlue/20 via-emerald/20 to-navy/20"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-coolBlue/20 to-emerald/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 25, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald/15 to-navy/20 rounded-full blur-3xl"
            />

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -80, 0],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                    }}
                />
            ))}

            {/* Content */}
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-xl"
                        >
                            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse"></span>
                            <span className="text-white/90 font-medium text-sm">{badge}</span>
                        </motion.div>
                    )}

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-emerald font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    {description && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* Decorative Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/50 to-transparent"
            />
        </section>
    );
};

export default ModernHero;
