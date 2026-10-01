import React, { useEffect, useRef } from 'react';

interface SmokeCanvasProps {
  offeringStartTime: number;
  isLit: boolean;
}

class SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxSize: number;
  life: number;
  maxLife: number;

  constructor(x: number, y: number) {
    this.x = x + (Math.random() - 0.5) * 4;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = -(Math.random() * 0.8 + 0.5);
    this.size = Math.random() * 4 + 4;
    this.maxSize = Math.random() * 22 + 16;
    this.life = 0;
    this.maxLife = Math.random() * 90 + 70;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.size += (this.maxSize - this.size) * 0.02;
    this.life++;
  }

  draw(ctx: CanvasRenderingContext2D, cacheCanvas: HTMLCanvasElement) {
    const alpha = Math.max(0, 1 - (this.life / this.maxLife));
    ctx.globalAlpha = alpha;
    ctx.drawImage(
      cacheCanvas,
      this.x - this.size,
      this.y - this.size,
      this.size * 2,
      this.size * 2
    );
  }
}

export const SmokeCanvas: React.FC<SmokeCanvasProps> = ({ offeringStartTime, isLit }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const smokeCacheRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<SmokeParticle[]>([]);
  const animFrameIdRef = useRef<number>(0);

  // Lưu trữ props mới nhất vào ref để vòng lặp requestAnimationFrame đọc trực tiếp mà không cần re-trigger effect
  const stateRef = useRef({ offeringStartTime, isLit });
  useEffect(() => {
    stateRef.current = { offeringStartTime, isLit };
  }, [offeringStartTime, isLit]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Tạo Offscreen Canvas Cache cho gradient khói
    const cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = 64;
    cacheCanvas.height = 64;
    const cacheCtx = cacheCanvas.getContext('2d');
    if (cacheCtx) {
      const grad = cacheCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(235, 230, 220, 0.45)');
      grad.addColorStop(0.5, 'rgba(195, 190, 180, 0.2)');
      grad.addColorStop(1, 'rgba(195, 190, 180, 0)');
      cacheCtx.fillStyle = grad;
      cacheCtx.beginPath();
      cacheCtx.arc(32, 32, 32, 0, Math.PI * 2);
      cacheCtx.fill();
    }
    smokeCacheRef.current = cacheCanvas;

    // 2. Vòng lặp Render khói
    const renderSmoke = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { offeringStartTime: startT, isLit: lit } = stateRef.current;
      const particles = particlesRef.current;

      // Sinh hạt khói theo đường đi của que hương dâng lên
      if (startT > 0) {
        const elapsed = (performance.now() - startT) / 1000;
        if (elapsed <= 3.2) {
          const progress = elapsed / 3.2;
          let tipY: number;
          if (progress < 0.25) tipY = (canvas.height - 30) - (progress / 0.25) * 220;
          else if (progress < 0.55) tipY = canvas.height - 250;
          else tipY = (canvas.height - 250) + ((progress - 0.55) / 0.45) * 215;

          if (particles.length < 50) {
            particles.push(new SmokeParticle(canvas.width / 2, tipY));
          }
        }
      }

      // Sinh hạt khói từ 3 que hương đã thắp
      if (lit && particles.length < 45) {
        if (Math.random() > 0.5) {
          particles.push(new SmokeParticle(155, canvas.height - 20));
          particles.push(new SmokeParticle(170, canvas.height - 35));
          particles.push(new SmokeParticle(185, canvas.height - 20));
        }
      }

      // Cập nhật và vẽ hạt
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx, cacheCanvas);
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(renderSmoke);
    };

    animFrameIdRef.current = requestAnimationFrame(renderSmoke);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    <canvas
      id="smokeCanvas"
      ref={canvasRef}
      width={340}
      height={380}
    />
  );
};
