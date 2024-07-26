"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 20 + 340}, 100%, ${Math.random() * 30 + 20}%)`;      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 150;

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(20, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    setIsLoaded(true);

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <motion.div 
        className="relative z-10 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image 
          src="/logo.svg" 
          alt="DarkGPT Logo" 
          width={200} 
          height={200} 
          className="mb-4"
        />
        <motion.h1 
          className="text-8xl font-bold text-crimson mb-2 font-primary"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          DarkGPT
        </motion.h1>
        <motion.p 
          className="text-3xl text-white mb-8 font-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Fraud • Carding • Money Laundering • Hacking • Drug Manufacture
        </motion.p>
        <motion.button 
          className="px-8 py-4 text-xl font-primary text-white bg-crimson rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson transition-all duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};