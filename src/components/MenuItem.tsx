import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const YeezuzPage: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current?.pause();
            videoRef.current?.pause();
        } else {
            audioRef.current?.play();
            videoRef.current?.play();
        }
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
                
                <div className="w-full h-96">
                    <Canvas>
                        <Suspense fallback={null}>
                            <Environment preset="warehouse" />
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <MenuItem position={[-1.5, 0, 0]} text="LISTEN NOW" href="https://linktr.ee/yeezuz2020" />
                            <MenuItem position={[0, 0, 0]} text="MERCHANDISE" href="/merch" />
                            <MenuItem position={[1.5, 0, 0]} text="CONCERTS" href="/concerts" />
                        </Suspense>
                    </Canvas>
                </div>

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

interface MenuItemProps {
    position: [number, number, number];
    text: string;
    href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ position, text, href }) => {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={mesh} position={position} scale={0.7}>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial color="#aaaaaa" metalness={1} roughness={0} envMapIntensity={1} />
            <Html position={[0, 1, 0]}>
                <a
                    href={href}
                    className="text-white text-lg px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                    {text}
                </a>
            </Html>
        </mesh>
    );
};

export default YeezuzPage;
