"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { driveImageUrl } from "@/lib/drive";

type Pose = "peek" | "walk" | "sleep" | "cheer" | "wave";

const faces: Record<Pose, string> = {
  peek: "(=^･ω･^=)",
  walk: "ฅ^•ﻌ•^ฅ",
  sleep: "(⇀‸↼‶)",
  cheer: "(ﾉ´ヮ`)ﾉ*: ･ﾟ",
  wave: "／(=｀ェ´=)＼",
};

const PAD = 8;

export function MemeCat({
  pose = "peek",
  quote,
  driveFileId,
  className = "",
  side = "left",
}: {
  pose?: Pose;
  quote?: string;
  /** Google Drive file link or id — shows photo instead of ASCII cat */
  driveFileId?: string;
  className?: string;
  side?: "left" | "right";
}) {
  const photo = driveImageUrl(driveFileId, 400);
  const rootRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const keepInPage = () => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let dx = 0;
    let dy = 0;
    if (rect.left < PAD) dx = PAD - rect.left;
    if (rect.right > window.innerWidth - PAD) dx = window.innerWidth - PAD - rect.right;
    if (rect.top < PAD) dy = PAD - rect.top;
    if (rect.bottom > window.innerHeight - PAD) dy = window.innerHeight - PAD - rect.bottom;
    if (dx) x.set(x.get() + dx);
    if (dy) y.set(y.get() + dy);
  };

  return (
    <motion.div
      ref={rootRef}
      drag
      style={{ x, y, touchAction: "none" }}
      dragElastic={0.12}
      dragMomentum={false}
      dragPropagation={false}
      onDrag={keepInPage}
      onDragEnd={keepInPage}
      whileDrag={{ scale: 1.06, zIndex: 60 }}
      className={`pointer-events-auto relative z-30 cursor-grab touch-none select-none active:cursor-grabbing ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.5 } }}
      aria-label={quote ? `Draggable meme: ${quote}` : "Draggable meme"}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none"
      >
        {quote && (
          <div
            className={`mb-1 max-w-[10rem] rounded-2xl bg-white/90 px-2.5 py-1.5 text-[11px] leading-snug text-rose-deep shadow-md ${
              side === "right" ? "ml-auto" : ""
            }`}
          >
            {quote}
          </div>
        )}
        <div
          className={`inline-flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 shadow-lg ring-1 ring-rose/15 ${
            side === "right" ? "ml-auto" : ""
          } ${photo ? "p-1" : "px-3 py-2"}`}
        >
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt={quote || "cute meme"}
              className="h-16 w-16 rounded-xl object-cover sm:h-[4.5rem] sm:w-[4.5rem]"
              loading="lazy"
              draggable={false}
              referrerPolicy="no-referrer"
            />
          ) : (
            <>
              <span className="text-lg tracking-tight text-rose-deep">{faces[pose]}</span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-rose/70">
                cat
              </span>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WalkingCat({
  quote,
  driveFileId,
}: {
  quote?: string;
  driveFileId?: string;
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute bottom-4 left-0 z-20"
      animate={{ x: ["-20vw", "110vw"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <MemeCat pose="walk" quote={quote} driveFileId={driveFileId} />
    </motion.div>
  );
}
