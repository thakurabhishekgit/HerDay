"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { content } from "@/data/content";
import { burstHearts, softPetalRain } from "@/lib/confetti";
import { ChapterShell, NavRow } from "../ChapterShell";

export function LoveLetter({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [opened, setOpened] = useState(false);
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!opened || done) return;
    let i = 0;
    const full = content.loveLetter;
    const id = window.setInterval(() => {
      i += 2;
      setShown(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(id);
        setDone(true);
        burstHearts(100);
        softPetalRain();
      }
    }, 28);
    return () => window.clearInterval(id);
  }, [opened, done]);

  return (
    <ChapterShell>
      <div className="flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 05</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">A letter for you</h2>
        <p className="mt-2 text-sm text-ink/70">Words I meant with my whole chest.</p>

        <div className="mt-8 flex flex-1 flex-col items-center justify-center">
          {!opened ? (
            <motion.button
              type="button"
              onClick={() => setOpened(true)}
              className="relative w-full max-w-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="rounded-xl bg-gradient-to-br from-rose to-rose-deep p-10 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-2xl text-rose-deep">
                  ✉
                </div>
                <p className="font-display text-xl text-cream">Tap to unseal</p>
                <p className="mt-1 text-xs text-cream/70">from {content.yourName}</p>
              </div>
            </motion.button>
          ) : (
            <div className="glass-card relative w-full rounded-3xl p-5 sm:p-6">
              <pre className="font-hand whitespace-pre-wrap text-[15px] leading-relaxed text-ink/90">
                {shown}
                {!done && <span className="animate-pulse">▌</span>}
              </pre>
              {!done && (
                <button
                  type="button"
                  className="mt-4 text-xs text-rose underline"
                  onClick={() => {
                    setShown(content.loveLetter);
                    setDone(true);
                    burstHearts(60);
                  }}
                >
                  Skip typing
                </button>
              )}
            </div>
          )}
        </div>

        <NavRow
          onBack={onBack}
          onNext={done ? onNext : undefined}
          nextLabel="Blow the candles →"
        />
      </div>
    </ChapterShell>
  );
}
