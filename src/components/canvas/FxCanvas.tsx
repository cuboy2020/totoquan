import React, { useEffect, useRef } from 'react';

class MagicParticle {
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = Math.random() * 3 + 1.5;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3.5 + 1;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.life = Math.random() * 15 + 15;
    this.maxLife = this.life;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export const triggerSpellBurst = (x: number, y: number, color: string) => {
  window.dispatchEvent(new CustomEvent('spellburst', { detail: { x, y, color } }));
};

export const FxCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<MagicParticle[]>([]);
  const animFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleBurst = (e: Event) => {
      const customEvent = e as CustomEvent<{ x: number; y: number; color: string }>;
      const { x, y, color } = customEvent.detail;
      for (let i = 0; i < 22; i++) {
        particlesRef.current.push(new MagicParticle(x, y, color));
      }
    };
    window.addEventListener('spellburst', handleBurst);

    const renderFX = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
      animFrameIdRef.current = requestAnimationFrame(renderFX);
    };

    animFrameIdRef.current = requestAnimationFrame(renderFX);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('spellburst', handleBurst);
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return <canvas id="fxCanvas" ref={canvasRef} />;
};
