"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoBackground}>
        <div className={styles.bgImageStatic} />
        <div className={styles.bgImageWater} />
        
        {/* SVG Filter for realistic water movement */}
        <svg className={styles.svgFilter}>
          <filter id="water-ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" values="0.01 0.05; 0.015 0.06; 0.01 0.05" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </svg>
        <div className={styles.overlay} />
      </div>

      <div className={styles.starsContainer}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.star} ${styles[`star${i}`]}`}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              scale: [0.8, 1.3, 0.8],
              boxShadow: [
                "0 0 10px 2px rgba(255, 255, 255, 0.5)",
                "0 0 20px 8px rgba(255, 255, 255, 0.9)",
                "0 0 10px 2px rgba(255, 255, 255, 0.5)"
              ]
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          World-Class <span className="accent-gradient">Colorization</span> <br/>
          &amp; Restoration.
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          LivePixel Technologies is a premier studio preserving heritage and breathing new life into valuable materials globally.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/contact" className={styles.primaryBtn}>
            Start a Project
          </Link>
          <Link href="/#work" className={styles.secondaryBtn}>
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
