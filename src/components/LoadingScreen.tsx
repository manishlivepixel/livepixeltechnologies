"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";
import Image from "next/image";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait for exit animation
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? "-100vh" : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/livepixel-logo.jpg" 
            alt="LivePixel Logo" 
            width={360} 
            height={240} 
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoTextWrapper}>
            LivePixel
            <motion.span 
              className={styles.glowingPixel}
              animate={{ y: [-15, 15, -15], x: [-8, 12, -8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel2}`}
              animate={{ y: [12, -12, 12], x: [8, -8, 8], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel3}`}
              animate={{ y: [-18, 18, -18], x: [12, -12, 12], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel4}`}
              animate={{ y: [15, -15, 15], x: [-18, 18, -18], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel5}`}
              animate={{ y: [-9, 9, -9], x: [24, -24, 24], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel6}`}
              animate={{ y: [20, -20, 20], x: [15, -15, 15], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel7}`}
              animate={{ y: [-25, 25, -25], x: [-20, 20, -20], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel8}`}
              animate={{ y: [10, -10, 10], x: [30, -30, 30], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel9}`}
              animate={{ y: [-15, 15, -15], x: [-35, 35, -35], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`${styles.glowingPixel} ${styles.glowingPixel10}`}
              animate={{ y: [25, -25, 25], x: [10, -10, 10], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div> 
          <span className="text-gradient" style={{marginLeft: '0.3rem'}}>Technologies</span>
        </motion.div>
        
        <div className={styles.progressBarContainer}>
          <motion.div 
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className={styles.progressText}>{progress}%</div>
      </div>
    </motion.div>
  );
}
