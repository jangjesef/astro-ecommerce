import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{ left: '-100px', top: '-100px' }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0V30M0 15H30" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
  );
};

const YeezuzPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.play();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'STORE', path: '/merchandise' },
  ];

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden cursor-none font-sans">
      <CustomCursor />

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/Bigsteppa.mp4" type="video/mp4" />
      </video>

      <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-xs md:text-sm z-10">
        <div className="space-x-4 md:space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => window.location.href = item.path}
              className="hover:text-gray-300 transition-colors duration-300 bg-transparent border-none cursor-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        <div className="flex space-x-4 md:space-x-6">
          <motion.button
            onClick={() => window.open("https://www.instagram.com/yeezuzboy/?hl=cs", "_blank")}
            className="hover:text-gray-300 bg-transparent border-none cursor-none"
            whileHover={{ scale: 1.05 }}
          >
            INSTAGRAM
          </motion.button>
          <motion.button
            onClick={() => window.location.href = "mailto:yeezuz332@gmail.com"}
            className="hover:text-gray-300 bg-transparent border-none cursor-none"
            whileHover={{ scale: 1.05 }}
          >
            BOOKING
          </motion.button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          YEEZUZ2020
        </motion.h1>
      </div>

      <motion.div 
        className="absolute bottom-16 left-0 right-0 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          onClick={() => window.open("https://linktr.ee/yeezuz2020", "_blank")}
          className="text-lg md:text-xl hover:text-gray-300 bg-transparent border-none cursor-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LISTEN NOW
        </motion.button>
        {['MERCHANDISE', 'CONCERTS'].map((item) => (
          <motion.button
            key={item}
            onClick={() => window.location.href = `/${item.toLowerCase()}`}
            className="text-lg md:text-xl hover:text-gray-300 bg-transparent border-none cursor-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      <motion.button
        className="absolute bottom-8 right-8 md:bottom-10 md:right-10 px-3 py-2 md:px-4 md:py-2 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 z-10 text-xs md:text-sm cursor-none"
        onClick={toggleMute}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? 'UNMUTE' : 'MUTE'} MUSIC
      </motion.button>

      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-xs md:text-sm z-10">
        © 2024 YEEZUZ2020
      </div>
    </div>
  );
};

export default YeezuzPage;
