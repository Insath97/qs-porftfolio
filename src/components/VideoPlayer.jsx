import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize } from 'react-icons/fi';

/**
 * Video Player Component
 * Custom video player with controls
 * @param {string} src - Video source URL
 * @param {string} poster - Poster image URL
 * @param {string} title - Video title
 */
const VideoPlayer = ({ src, poster, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);

    // Toggle play/pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Toggle mute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Toggle fullscreen
    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            }
        }
    };

    return (
        <div
            className="relative rounded-xl overflow-hidden bg-black group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
        >
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={poster}
                onClick={togglePlay}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video Title Overlay */}
            {title && showControls && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent"
                >
                    <h3 className="text-white font-semibold">{title}</h3>
                </motion.div>
            )}

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                    >
                        <FiPlay className="text-navy text-3xl ml-1" />
                    </motion.button>
                </motion.div>
            )}

            {/* Controls Bar */}
            {showControls && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                >
                    <div className="flex items-center justify-between">
                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlay}
                            className="text-white hover:text-coolBlue transition-colors"
                        >
                            {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                        </button>

                        <div className="flex items-center space-x-4">
                            {/* Mute Button */}
                            <button
                                onClick={toggleMute}
                                className="text-white hover:text-coolBlue transition-colors"
                            >
                                {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
                            </button>

                            {/* Fullscreen Button */}
                            <button
                                onClick={toggleFullscreen}
                                className="text-white hover:text-coolBlue transition-colors"
                            >
                                <FiMaximize size={24} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Placeholder for missing video */}
            {!src && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-coolBlue/20 to-emerald/20">
                    <div className="text-center">
                        <p className="text-6xl mb-4">🎬</p>
                        <p className="text-gray-600 dark:text-gray-400">Video placeholder</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
