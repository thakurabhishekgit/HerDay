"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { content } from "@/data/content";
import { driveImageUrl } from "@/lib/drive";
import { burstHearts } from "@/lib/confetti";
import { MusicToggle } from "./MusicToggle";
import { Lightbox } from "./Polaroid";
import { Gate } from "./chapters/Gate";
import { Hero } from "./chapters/Hero";
import { MemoryLane } from "./chapters/MemoryLane";
import { Gallery } from "./chapters/Gallery";
import { Reasons } from "./chapters/Reasons";
import { LoveLetter } from "./chapters/LoveLetter";
import { Cake } from "./chapters/Cake";
import { Future } from "./chapters/Future";
import { Closing } from "./chapters/Closing";

/** 0 gate → 1–7 chapters → 8 closing */
const LAST = 8;

export function Experience() {
  const [chapter, setChapter] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const go = useCallback((n: number) => setChapter(n), []);
  const next = useCallback(() => setChapter((c) => Math.min(LAST, c + 1)), []);
  const back = useCallback(() => setChapter((c) => Math.max(0, c - 1)), []);

  const openPhoto = (index: number) => {
    const src = driveImageUrl(content.photos[index]?.driveFileId);
    if (!src) return;
    burstHearts(40);
    setLightbox(index);
  };

  const lightboxSrc =
    lightbox !== null ? driveImageUrl(content.photos[lightbox]?.driveFileId) : null;

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-cream">
      <MusicToggle src={content.musicSrc} unlocked={unlocked} />

      <AnimatePresence mode="wait">
        {chapter === 0 && (
          <Gate
            key="gate"
            onOpen={() => {
              setUnlocked(true);
              go(1);
            }}
          />
        )}
        {chapter === 1 && <Hero key="hero" onNext={next} onBack={() => go(0)} />}
        {chapter === 2 && (
          <MemoryLane key="memory" onNext={next} onBack={back} onPhoto={openPhoto} />
        )}
        {chapter === 3 && (
          <Gallery key="gallery" onNext={next} onBack={back} onPhoto={openPhoto} />
        )}
        {chapter === 4 && <Reasons key="reasons" onNext={next} onBack={back} />}
        {chapter === 5 && <LoveLetter key="letter" onNext={next} onBack={back} />}
        {chapter === 6 && <Cake key="cake" onNext={next} onBack={back} />}
        {chapter === 7 && <Future key="future" onNext={next} onBack={back} />}
        {chapter === 8 && (
          <Closing
            key="closing"
            onReplay={() => {
              setUnlocked(true);
              go(0);
            }}
          />
        )}
      </AnimatePresence>

      {chapter > 0 && chapter < LAST && (
        <div className="pointer-events-none fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-white/70 px-3 py-1 text-[10px] tracking-[0.2em] text-rose-deep/70 backdrop-blur">
          {chapter} / 7
        </div>
      )}

      <AnimatePresence>
        {lightbox !== null && lightboxSrc && (
          <Lightbox
            src={lightboxSrc}
            caption={content.photos[lightbox].caption}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
