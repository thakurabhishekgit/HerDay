"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { content } from "@/data/content";
import { ChapterShell, NavRow } from "../ChapterShell";
import { MemeCat } from "../MemeCat";

export function Reasons({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [i, setI] = useState(0);
  const reason = content.reasons[i];

  return (
    <ChapterShell>
      <div className="relative flex flex-1 flex-col">
        <div className="absolute -left-1 top-8 z-10">
          <MemeCat
            pose="peek"
            quote={content.catMemes[3].quote}
            driveFileId={content.catMemes[3].driveFileId}
            side="left"
          />
        </div>
        <div className="absolute -right-1 bottom-28 z-10">
          <MemeCat
            pose="cheer"
            quote={content.catMemes[i % content.catMemes.length].quote}
            driveFileId={content.catMemes[i % content.catMemes.length].driveFileId}
            side="right"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 04</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Reasons I love you</h2>
        <p className="mt-2 text-sm text-ink/70">Swipe through my soft evidence.</p>

        <div className="relative mt-10 flex flex-1 flex-col items-center justify-center">
          <div className="relative w-full max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                className="glass-card min-h-[14rem] rounded-3xl p-8 text-center"
                initial={{ opacity: 0, x: 40, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40, rotate: -3 }}
                transition={{ duration: 0.35 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) setI((v) => Math.min(content.reasons.length - 1, v + 1));
                  if (info.offset.x > 60) setI((v) => Math.max(0, v - 1));
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-rose/55">
                  Reason {i + 1} / {content.reasons.length}
                </p>
                <p className="font-hand mt-6 text-2xl leading-snug text-rose-deep">{reason}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous reason"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-rose shadow"
                onClick={() => setI((v) => Math.max(0, v - 1))}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next reason"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-rose shadow"
                onClick={() => setI((v) => Math.min(content.reasons.length - 1, v + 1))}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="Read my letter →" />
      </div>
    </ChapterShell>
  );
}
