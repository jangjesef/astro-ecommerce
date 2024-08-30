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
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="public/favicon.svg">
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

      <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-sm z-10">
        <div className="space-x-6">
          {['HOME', 'STORE', 'ABOUT', 'PREORDER'].map((item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div>
          <motion.a href="https://www.instagram.com/yeezuzboy/?hl=cs" className="hover:text-gray-300 mr-6" whileHover={{ scale: 1.05 }}>INSTAGRAM</motion.a>
          <motion.a href="mailto:yeezuz332@gmail.com" className="hover:text-gray-300" whileHover={{ scale: 1.05 }}>BOOKING</motion.a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.h1 
          className="text-8xl font-bold mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          YEEZUZ2020
        </motion.h1>
      </div>

      <motion.div 
        className="absolute bottom-20 left-0 right-0 flex justify-center space-x-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.a
          href="https://linktr.ee/yeezuz2020"
          className="text-xl hover:text-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LISTEN NOW
        </motion.a>
        {['MERCHANDISE', 'CONCERTS'].map((item) => (
          <motion.a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-xl hover:text-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      <motion.button
        className="absolute bottom-10 right-10 px-4 py-2 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 z-10 text-sm"
        onClick={toggleMute}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? 'UNMUTE' : 'MUTE'} MUSIC
      </motion.button>

      <div className="absolute bottom-4 left-4 text-sm z-10">
        © 2024 YEEZUZ2020
      </div>
    </div>
  );
};

export default YeezuzPage;