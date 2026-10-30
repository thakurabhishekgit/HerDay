"use client";

import { motion } from "framer-motion";
import { driveImageUrl } from "@/lib/drive";

type Pose = "peek" | "walk" | "sleep" | "cheer" | "wave";

const faces: Record<Pose, string> = {
  peek: "(=^･ω･^=)",
  walk: "ฅ^•ﻌ•^ฅ",
  sleep: "(⇀‸↼‶)",
  cheer: "(ﾉ´ヮ`)ﾉ*: ･ﾟ",
  wave: "／(=｀ェ´=)＼",
};

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

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
      }}
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
