"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top Bar (Corporate Info) */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarText}>Call Us:</span>
            <a href="tel:+914714342500" className={styles.topBarLink}>
              <Phone size={14} className={styles.topBarIcon} /> +91 471 4342 500
            </a>
            <a href="mailto:info@livepixeltechnologies.com" className={styles.topBarLink}>
              <Mail size={14} className={styles.topBarIcon} /> info@livepixeltechnologies.com
            </a>
          </div>
        </div>
      </div>

      <nav className={`${styles.navbar}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/livepixel-logo.jpg" 
              alt="LivePixel Logo" 
              width={120} 
              height={80} 
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoTextWrapper}>
              LivePixel
              <motion.span 
                className={styles.glowingPixel}
                animate={{ 
                  y: [-5, 5, -5],
                  x: [-2, 3, -2],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span 
                className={`${styles.glowingPixel} ${styles.glowingPixel2}`}
                animate={{ 
                  y: [4, -4, 4],
                  x: [2, -2, 2],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span 
                className={`${styles.glowingPixel} ${styles.glowingPixel3}`}
                animate={{ y: [-6, 6, -6], x: [4, -4, 4], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span 
                className={`${styles.glowingPixel} ${styles.glowingPixel4}`}
                animate={{ y: [5, -5, 5], x: [-6, 6, -6], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span 
                className={`${styles.glowingPixel} ${styles.glowingPixel5}`}
                animate={{ y: [-3, 3, -3], x: [8, -8, 8], opacity: [0.7, 0.2, 0.7] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div> 
            <span className="text-gradient">Technologies</span>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.navLinks}>
            <Link href="/#about" className={styles.link}>About</Link>
            <Link href="/#services" className={styles.link}>Services</Link>
            <Link href="/#work" className={styles.link}>Work</Link>
            <Link href="/team" className={styles.link}>Team</Link>
            <ThemeToggle />
            <Link href="/contact">
              <button className={styles.contactBtn}>Contact Us</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logo}>
                <Image 
                  src="/livepixel-logo.jpg" 
                  alt="LivePixel Logo" 
                  width={90} 
                  height={60} 
                  className={styles.logoImage}
                />
                LivePixel
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ThemeToggle />
                <button 
                  className={styles.mobileCloseBtn}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
            </div>
            
            <div className={styles.mobileNavLinks}>
              <Link href="/#about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/#services" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/#work" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Work</Link>
              <Link href="/team" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Team</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className={styles.mobileContactBtn}>Contact Us</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
