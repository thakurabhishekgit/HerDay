"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { content } from "@/data/content";
import { softPetalRain } from "@/lib/confetti";
import { ChapterShell } from "../ChapterShell";
import { MemeCat } from "../MemeCat";

export function Closing({ onReplay }: { onReplay: () => void }) {
  useEffect(() => {
    softPetalRain();
  }, []);

  return (
    <ChapterShell night>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <MemeCat pose="wave" quote="bye for now… forever continues" />

        <motion.h2
          className="font-display mt-8 text-4xl leading-tight text-cream sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {content.closingLine}
        </motion.h2>
        <motion.p
          className="font-hand mt-4 text-2xl text-champagne"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {content.herName}
        </motion.p>
        <p className="mt-3 max-w-xs text-sm text-cream/70">
          From {content.yourName} — with a ridiculous amount of love.
        </p>

        <button type="button" className="btn-love mt-10" onClick={onReplay}>
          Replay our story ♥
        </button>
      </div>
    </ChapterShell>
  );
}
