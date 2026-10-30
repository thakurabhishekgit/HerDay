"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FloatingParticles, Starfield } from "./Ambient";

export function ChapterShell({
  children,
  night = false,
  className = "",
}: {
  children: ReactNode;
  night?: boolean;
  className?: string;
}) {
  return (
    <motion.section
      className={`relative min-h-[100dvh] w-full overflow-x-hidden ${
        night ? "night-sky text-cream" : "love-gradient text-ink"
      } film-grain ${className}`}
      initial={{ opacity: 0, filter: "blur(8px)", y: 24 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(8px)", y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {night ? <Starfield /> : null}
      <FloatingParticles night={night} />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-5 py-8 sm:max-w-xl">
        {children}
      </div>
    </motion.section>
  );
}

export function NavRow({
  onBack,
  onNext,
  nextLabel = "Continue",
  hideBack,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  hideBack?: boolean;
}) {
  return (
    <div className="mt-auto flex items-center justify-between gap-3 pt-8">
      {!hideBack && onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-4 py-2 text-sm text-rose-deep/70 underline-offset-4 hover:underline"
        >
          Back
        </button>
      ) : (
        <span />
      )}
      {onNext && (
        <button type="button" className="btn-love" onClick={onNext}>
          {nextLabel}
        </button>
      )}
    </div>
  );
}
