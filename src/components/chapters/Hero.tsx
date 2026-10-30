"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { ChapterShell, NavRow } from "../ChapterShell";
import { MemeCat } from "../MemeCat";

export function Hero({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <ChapterShell>
      <div className="relative flex flex-1 flex-col justify-center">
        <div className="absolute -left-1 top-8">
          <MemeCat
            pose="peek"
            quote={content.catMemes[0].quote}
            driveFileId={content.catMemes[0].driveFileId}
            side="left"
          />
        </div>
        <div className="absolute -right-1 bottom-28">
          <MemeCat
            pose="cheer"
            quote={content.catMemes[1].quote}
            driveFileId={content.catMemes[1].driveFileId}
            side="right"
          />
        </div>

        <motion.p
          className="mb-3 text-xs uppercase tracking-[0.28em] text-rose/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Today belongs to you
        </motion.p>

        <motion.h1
          className="font-display text-5xl leading-[1.05] text-rose-deep sm:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Happy Birthday,
          <br />
          <span className="bg-gradient-to-r from-rose to-rose-deep bg-clip-text text-transparent">
            {content.herName}
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-sm text-base leading-relaxed text-ink/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {content.heroSubtitle}
        </motion.p>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="Our story →" />
      </div>
    </ChapterShell>
  );
}
