import React, { createContext, useState, useRef, useContext, useEffect } from 'react';

const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <AudioPlayerContext.Provider value={{ isPlaying, togglePlay, audioRef }}>
            {children}
            <audio ref={audioRef} loop>
                <source src="/Bigsteppa.mp3" type="audio/mpeg" />
            </audio>
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);