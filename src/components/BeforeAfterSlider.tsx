"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent | ReactMouseEvent) => {
    if (!isDragging) return;
    handleMove((e as MouseEvent).clientX);
  };

  const onTouchMove = (e: TouchEvent | ReactTouchEvent) => {
    if (!isDragging) return;
    handleMove((e as TouchEvent).touches[0].clientX);
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove as any);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", onTouchMove as any);
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", onMouseMove as any);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove as any);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 6000; // 6 seconds for a full sweep back and forth

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      
      // Calculate a smooth sine wave oscillating between 0 and 100
      const progress = (Math.sin((elapsed / duration) * Math.PI * 2) + 1) / 2;
      setSliderPosition(progress * 100);

      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isDragging) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      <div className={styles.imageWrapper}>
        <Image src={beforeImage} alt="Before" className={styles.baseImage} fill sizes="(max-width: 1000px) 100vw, 1000px" />
        <div 
          className={styles.overlayImageWrapper} 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={afterImage} alt="After" className={styles.overlayImage} fill sizes="(max-width: 1000px) 100vw, 1000px" />
        </div>
      </div>

      <div 
        className={styles.sliderLine}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.sliderHandle}>
          <ArrowLeftRight size={16} color="#000" />
        </div>
      </div>

      <div className={styles.labels}>
        <span className={styles.labelLeft}>Before</span>
        <span className={styles.labelRight}>After</span>
      </div>
    </div>
  );
}
