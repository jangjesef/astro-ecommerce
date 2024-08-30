import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const YeezuzPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
            videoRef.current?.play();
        } else {
            audioRef.current?.pause();
            videoRef.current?.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative h-screen overflow-hidden bg-black">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                loop
                muted
            >
                <source src="/Bigsteppa.mp4" type="video/mp4" />
            </video>
            
            <audio ref={audioRef} loop>
                <source src="/Bigsteppa.mp3" type="audio/mpeg" />
            </audio>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    YEEZUZ2020
                </motion.h1>
                <motion.div
                    className="flex flex-col space-y-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <AnimatedLink href="https://linktr.ee/yeezuz2020" text="LISTEN NOW" />
                    <AnimatedLink href="/merch" text="MERCHANDISE" />
                    <AnimatedLink href="/concerts" text="CONCERTS" />
                </motion.div>
                <motion.button
                    className="mt-8 px-6 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isPlaying ? 'PAUSE' : 'PLAY MUSIC'}
                </motion.button>
            </div>
        </div>
    );
};

const AnimatedLink = ({ href, text }) => (
    <motion.a
        href={href}
        target="_self"
        className="px-6 py-2 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {text}
    </motion.a>
);

export default YeezuzPage;
