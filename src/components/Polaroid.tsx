"use client";

import { motion } from "framer-motion";
import { driveImageUrl } from "@/lib/drive";

const tilts = [-6, -3, 2, 5, -4, 3, -2, 4, -5, 1];

export function Polaroid({
  driveFileId,
  caption,
  alt,
  index = 0,
  onClick,
  emptyHref,
  emptyLabel = "Add a memory in Drive",
}: {
  driveFileId?: string;
  caption: string;
  alt: string;
  index?: number;
  onClick?: () => void;
  emptyHref?: string;
  emptyLabel?: string;
}) {
  const src = driveImageUrl(driveFileId);
  const rotate = tilts[index % tilts.length];

  const inner = (
    <motion.figure
      className="polaroid w-[11.5rem] sm:w-[13rem] cursor-pointer"
      style={{ rotate }}
      whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-200 via-orange-100 to-champagne">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
            <span className="text-3xl">📷</span>
            <span className="font-hand text-sm text-rose-deep/80">{emptyLabel}</span>
            <span className="text-[10px] text-rose/60">Paste Drive file id in content.ts</span>
          </div>
        )}
      </div>
      <figcaption className="font-hand mt-2 text-center text-sm text-ink/80">
        {caption}
      </figcaption>
    </motion.figure>
  );

  if (!src && emptyHref) {
    return (
      <a href={emptyHref} target="_blank" rel="noreferrer" className="inline-block">
        {inner}
      </a>
    );
  }

  return inner;
}

export function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string;
  caption: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-night/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="polaroid max-w-lg w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption}
          className="max-h-[70vh] w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <p className="font-hand mt-3 text-center text-base text-ink/85">{caption}</p>
        <button type="button" className="btn-love mt-3 w-full" onClick={onClose}>
          Close ♥
        </button>
      </motion.div>
    </motion.div>
  );
}
