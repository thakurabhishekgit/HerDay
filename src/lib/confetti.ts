import confetti from "canvas-confetti";

export function burstHearts(count = 80) {
  const defaults = {
    spread: 70,
    ticks: 120,
    gravity: 0.85,
    decay: 0.92,
    startVelocity: 28,
    colors: ["#be123c", "#fb7185", "#fda4af", "#fef3c7", "#f43f5e"],
  };

  confetti({
    ...defaults,
    particleCount: count,
    origin: { y: 0.65 },
    shapes: ["circle"],
  });
}

export function celebrationBurst() {
  const end = Date.now() + 1400;
  const colors = ["#be123c", "#fb7185", "#fef3c7", "#e11d48", "#fff1f2"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function softPetalRain() {
  confetti({
    particleCount: 40,
    spread: 100,
    startVelocity: 18,
    gravity: 0.5,
    ticks: 200,
    origin: { y: 0 },
    colors: ["#fda4af", "#fecdd3", "#fff1f2", "#fef3c7"],
  });
}
