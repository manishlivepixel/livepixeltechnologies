"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoBackground}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.bgVideo}
          poster="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
        >
          {/* High-quality cinematic placeholder video */}
          <source src="https://cdn.coverr.co/videos/coverr-flying-through-a-glowing-tunnel-4493/1080p.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
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
