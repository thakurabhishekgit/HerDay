"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { ChapterShell, NavRow } from "../ChapterShell";
import { MemeCat } from "../MemeCat";

export function Future({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <ChapterShell>
      <div className="relative flex flex-1 flex-col">
        <div className="absolute -left-1 top-4 z-10">
          <MemeCat
            pose="peek"
            quote={content.catMemes[1].quote}
            driveFileId={content.catMemes[1].driveFileId}
            side="left"
          />
        </div>
        <div className="absolute -right-1 bottom-28 z-10">
          <MemeCat
            pose="cheer"
            quote={content.catMemes[2].quote}
            driveFileId={content.catMemes[2].driveFileId}
            side="right"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 07</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Future with you</h2>
        <p className="mt-2 text-sm text-ink/70">Soft promises, already in motion.</p>

        <div className="mt-8 grid flex-1 gap-4">
          {content.futureCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-card rounded-2xl p-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-rose-deep">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{card.text}</p>
                </div>
                <motion.span
                  className="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-rose"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-hand mt-6 text-center text-lg text-rose-deep">
          Forever starts every morning with you.
        </p>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="One last thing →" />
      </div>
    </ChapterShell>
  );
}
