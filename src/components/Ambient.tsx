"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  kind: "heart" | "sparkle" | "petal";
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 12,
    kind: (["heart", "sparkle", "petal"] as const)[i % 3],
  }));
}

export function FloatingParticles({ night = false }: { night?: boolean }) {
  const [reduced, setReduced] = useState(false);
  const particles = useMemo(() => makeParticles(18), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: "-10%",
            fontSize: p.size,
            color: night ? "rgba(255,241,242,0.55)" : "rgba(225,29,72,0.45)",
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "-120vh",
            opacity: [0, 0.85, 0.85, 0],
            rotate: p.kind === "petal" ? [0, 40, -20, 60] : [0, 15, -10, 0],
            x: [0, 20, -15, 10],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.kind === "heart" ? "♥" : p.kind === "sparkle" ? "✦" : "❀"}
        </motion.span>
      ))}
    </div>
  );
}

export function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 1 + (i % 3),
        delay: (i % 7) * 0.35,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-champagne"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: 0.55,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.8, delay: s.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
