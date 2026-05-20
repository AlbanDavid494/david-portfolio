import { useEffect, useRef } from "react";

/** Animated sparkle star + twinkling dot canvas — hero section only. */
export function SparkleCanvas() {
const SPARKLE_COLORS = ["#a855f7", "#c084fc", "#22d3ee", "#67e8f9", "#ffffff", "#f0abfc", "#f59e0b"];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animId, W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Twinkling dot particles
    const STAR_COUNT = 160;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:            Math.random(),
      y:            Math.random(),
      size:         Math.random() * 1.6 + 0.4,
      color:        SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      phase:        Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.008,
      drift:        (Math.random() - 0.5) * 0.00015,
    }));

    // Star-shaped sparkle bursts
    const SPARK_COUNT = 28;
    const sparks = Array.from({ length: SPARK_COUNT }, () => ({
      x:            Math.random(),
      y:            Math.random(),
      size:         Math.random() * 2.5 + 1,
      color:        SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      phase:        Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.015,
      armCount:     Math.floor(Math.random() * 2) + 4,
    }));

    const drawSparkStar = (cx, cy, arms, outerR, innerR, color, alpha) => {
      ctx.save();
      ctx.globalAlpha  = alpha;
      ctx.fillStyle    = color;
      ctx.shadowBlur   = outerR * 6;
      ctx.shadowColor  = color;
      ctx.beginPath();
      for (let i = 0; i < arms * 2; i++) {
        const angle = (i * Math.PI) / arms - Math.PI / 2;
        const r     = i % 2 === 0 ? outerR : innerR;
        const px    = cx + r * Math.cos(angle);
        const py    = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      // Draw twinkling dots
      for (const s of stars) {
        s.x += s.drift;
        if (s.x < 0) s.x = 1;
        if (s.x > 1) s.x = 0;
        const alpha = (Math.sin(t * s.twinkleSpeed * 60 + s.phase) + 1) / 2;
        const glow  = s.size * (0.8 + alpha * 0.8);
        ctx.save();
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle   = s.color;
        ctx.shadowBlur  = glow * 5;
        ctx.shadowColor = s.color;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, glow, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw star-shaped sparkles
      for (const sp of sparks) {
        const alpha = Math.pow((Math.sin(t * sp.twinkleSpeed * 60 + sp.phase) + 1) / 2, 1.5);
        const outer = sp.size * (0.9 + alpha * 0.7);
        drawSparkStar(sp.x * W, sp.y * H, sp.armCount, outer, outer * 0.35, sp.color, alpha * 0.9);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}