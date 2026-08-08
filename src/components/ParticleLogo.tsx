"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ParticleLogoProps {
  text?: string;
  fontSize?: number;
  width?: number;
  height?: number;
}

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
  size: number;
  density: number;
  vx: number;
  vy: number;
  friction: number;
  ease: number;

  constructor(x: number, y: number, color: string, canvasWidth: number, canvasHeight: number) {
    this.baseX = x;
    this.baseY = y;
    
    // Start scattered randomly within the canvas bounds so they are always visible
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    
    this.color = color;
    this.size = Math.random() * 1.0 + 0.6; // Slightly larger for better visibility
    this.density = (Math.random() * 30) + 1;
    
    // Physics variables for organic, fluid motion
    this.vx = 0;
    this.vy = 0;
    this.friction = Math.random() * 0.1 + 0.8; // 0.8 to 0.9
    this.ease = Math.random() * 0.05 + 0.02; // 0.02 to 0.07
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number, y: number, radius: number }) {
    let dxMouse = mouse.x - this.x;
    let dyMouse = mouse.y - this.y;
    let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    
    // Mouse repel behavior
    if (distanceMouse < mouse.radius) {
      let forceDirectionX = dxMouse / distanceMouse;
      let forceDirectionY = dyMouse / distanceMouse;
      let force = (mouse.radius - distanceMouse) / mouse.radius;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;
      
      this.vx -= directionX;
      this.vy -= directionY;
    }
    
    // Spring behavior towards base position
    let dx = this.baseX - this.x;
    let dy = this.baseY - this.y;
    
    this.vx += dx * this.ease;
    this.vy += dy * this.ease;
    
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default function ParticleLogo({ 
  text = "LivePixel", 
  fontSize = 28, 
  width = 160, 
  height = 45 
}: ParticleLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // 1. Offscreen Canvas for pure 1:1 text extraction
    const offCanvas = document.createElement('canvas');
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
    
    if (!offCtx) return;

    offCtx.fillStyle = 'white';
    offCtx.font = `800 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    offCtx.textAlign = 'left';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(text, 0, height / 2);

    const textData = offCtx.getImageData(0, 0, width, height);

    // 2. Setup visible canvas with DPR scaling for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let particleArray: Particle[] = [];
    
    // We sample every 2 pixels
    const gap = 2; 

    // Create particles based on pixel data
    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        // Look at the alpha value of the pixel
        const alpha = textData.data[(y * width + x) * 4 + 3];
        if (alpha > 128) {
          // Randomly assign orange colors to some particles
          const isAccent = Math.random() > 0.85;
          const color = isAccent ? '#f39c12' : '#111111';
          particleArray.push(new Particle(x, y, color, width, height));
        }
      }
    }
    
    setParticles(particleArray);

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 30
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw(ctx);
        particleArray[i].update(mouse);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [text, fontSize, width, height]);

  return (
    <div ref={containerRef} style={{ width, height, position: 'relative', display: 'flex', alignItems: 'center' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'default'
        }} 
      />
    </div>
  );
}
