"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { celebrationBurst } from "@/lib/confetti";
import { ChapterShell } from "../ChapterShell";

export function Gate({ onOpen }: { onOpen: () => void }) {
  return (
    <ChapterShell night>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          className="mb-6 text-xs uppercase tracking-[0.35em] text-cream/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          For {content.herName} only
        </motion.p>

        <motion.button
          type="button"
          aria-label="Open your surprise"
          onClick={() => {
            celebrationBurst();
            onOpen();
          }}
          className="group relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.div
            className="relative mx-auto flex h-44 w-56 flex-col items-center justify-center rounded-md bg-gradient-to-br from-rose to-rose-deep shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-champagne/40" />
            <div className="absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-1/2 bg-champagne/40" />
            <motion.div
              className="absolute -top-3 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-champagne text-rose-deep shadow-lg"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              ♥
            </motion.div>
            <span className="font-display mt-6 text-xl text-cream">Tap to open</span>
            <span className="mt-1 text-xs text-cream/70">your birthday letter</span>
          </motion.div>
        </motion.button>

        <motion.p
          className="font-hand mt-10 max-w-xs text-lg text-cream/85"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          A sealed little universe — made only for you.
        </motion.p>
      </div>
    </ChapterShell>
  );
}
