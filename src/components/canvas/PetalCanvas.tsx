import React, { useEffect, useRef } from 'react';

class Petal {
  x: number = 0;
  y: number = 0;
  w: number = 0;
  h: number = 0;
  speedY: number = 0;
  speedX: number = 0;
  rotation: number = 0;
  rotSpeed: number = 0;
  flipX: number = 0;
  swing: number = 0;
  color: string = '';

  constructor(canvasWidth: number, canvasHeight: number) {
    this.reset(true, canvasWidth, canvasHeight);
  }

  reset(init: boolean, canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = init ? Math.random() * canvasHeight : -30;
    this.w = Math.random() * 5 + 8;
    this.h = this.w * 1.35;
    this.speedY = Math.random() * 0.7 + 0.5;
    this.speedX = Math.random() * 0.4 + 0.2;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.flipX = Math.random() * Math.PI;
    this.swing = Math.random() * Math.PI * 2;
    this.color = Math.random() > 0.5 ? 'rgba(255, 175, 195, 0.6)' : 'rgba(240, 140, 165, 0.6)';
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.swing += 0.02;
    this.flipX += 0.02;
    this.rotation += this.rotSpeed;
    this.x += this.speedX + Math.sin(this.swing) * 0.5;
    this.y += this.speedY;
    if (this.y > canvasHeight + 30 || this.x > canvasWidth + 30) {
      this.reset(false, canvasWidth, canvasHeight);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(Math.cos(this.flipX), 1);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.w / 2, this.h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export const PetalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
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

    // Khởi tạo 22 cánh hoa đào
    petalsRef.current = Array.from({ length: 22 }, () => new Petal(canvas.width, canvas.height));

    const renderPetals = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const petals = petalsRef.current;
      for (let i = 0; i < petals.length; i++) {
        petals[i].update(canvas.width, canvas.height);
        petals[i].draw(ctx);
      }
      animFrameIdRef.current = requestAnimationFrame(renderPetals);
    };

    animFrameIdRef.current = requestAnimationFrame(renderPetals);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return <canvas id="petalCanvas" ref={canvasRef} />;
};
