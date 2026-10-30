"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { content } from "@/data/content";
import { celebrationBurst } from "@/lib/confetti";
import { ChapterShell, NavRow } from "../ChapterShell";
import { MemeCat } from "../MemeCat";

export function Cake({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [blown, setBlown] = useState(false);
  const letters = useMemo(
    () => content.herName.replace(/\s+/g, "").split("").slice(0, 12),
    [],
  );

  return (
    <ChapterShell>
      <div className="relative flex flex-1 flex-col">
        <div className="absolute -right-1 top-2 z-10">
          <MemeCat
            pose="peek"
            quote={content.catMemes[0].quote}
            driveFileId={content.catMemes[0].driveFileId}
            side="right"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 06</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Make a wish</h2>
        <p className="mt-2 text-sm text-ink/70">{content.cakeWishText}</p>

        <div className="relative mt-8 flex flex-1 flex-col items-center justify-center">
          {blown && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-1 overflow-hidden">
              {letters.map((ch, idx) => (
                <motion.span
                  key={`${ch}-${idx}`}
                  className="inline-flex h-10 w-8 items-center justify-center rounded-full bg-rose text-sm font-bold text-cream shadow-lg"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: -40, opacity: [0, 1, 1, 0] }}
                  transition={{ delay: idx * 0.08, duration: 2.4, ease: "easeOut" }}
                >
                  {ch.toUpperCase()}
                </motion.span>
              ))}
            </div>
          )}

          <div className="relative">
            {/* candles */}
            <div className="mb-1 flex justify-center gap-3">
              {[0, 1, 2].map((c) => (
                <div key={c} className="flex flex-col items-center">
                  {!blown && (
                    <motion.span
                      className="mb-0.5 text-sm"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: c * 0.12 }}
                    >
                      🔥
                    </motion.span>
                  )}
                  <div className="h-8 w-1.5 rounded-full bg-champagne" />
                </div>
              ))}
            </div>

            {/* cake body */}
            <div className="relative">
              <div className="h-8 w-52 rounded-t-xl bg-rose shadow-inner" />
              <div className="h-16 w-56 -translate-x-2 rounded-xl bg-gradient-to-b from-rose-200 to-rose shadow-xl" />
              <div className="mx-auto mt-1 h-3 w-60 rounded-full bg-rose-deep/20 blur-[2px]" />
            </div>
          </div>

          {!blown ? (
            <button
              type="button"
              className="btn-love mt-10"
              onClick={() => {
                setBlown(true);
                celebrationBurst();
              }}
            >
              Make a wish & blow 🎂
            </button>
          ) : (
            <div className="mt-10 text-center">
              <MemeCat
                pose="cheer"
                quote="wish unlocked ✨"
                driveFileId={content.catMemes[3].driveFileId}
              />
              <p className="font-hand mt-4 text-xl text-rose-deep">Wish received. Heart noted.</p>
            </div>
          )}
        </div>

        <NavRow
          onBack={onBack}
          onNext={blown ? onNext : undefined}
          nextLabel="Our forever →"
        />
      </div>
    </ChapterShell>
  );
}
