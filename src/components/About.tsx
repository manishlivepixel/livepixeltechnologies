"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  
  // A simple counter effect for illustration
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section className={`section`} id="about">
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Global Footprint in <br/><span className="text-gradient">Visual Entertainment</span></h2>
          <p className={styles.description}>
            LivePixel Technologies offers an array of services and support in the Creative and Technology space. We work across various medias, entertainment, and edutainment spectrums, bringing a rich heritage of cinematic expertise to every project.
          </p>
          <Link href="/about">
            <button className={styles.readMoreBtn}>Our Story</button>
          </Link>
        </motion.div>

        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={`${styles.statCard} glass`}>
            <h3 className={styles.statNumber}><Counter end={15} suffix="+" /></h3>
            <p className={styles.statLabel}>Years of Experience</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3 className={styles.statNumber}><Counter end={500} suffix="+" /></h3>
            <p className={styles.statLabel}>Projects Delivered</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3 className={styles.statNumber}><Counter end={50} suffix="+" /></h3>
            <p className={styles.statLabel}>Global Partners</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3 className={styles.statNumber}>TPN</h3>
            <p className={styles.statLabel}>Certified Studio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
