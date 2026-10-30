"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { driveFolderUrl } from "@/lib/drive";
import { ChapterShell, NavRow } from "../ChapterShell";
import { Polaroid } from "../Polaroid";

export function MemoryLane({
  onNext,
  onBack,
  onPhoto,
}: {
  onNext: () => void;
  onBack: () => void;
  onPhoto: (index: number) => void;
}) {
  return (
    <ChapterShell>
      <div className="flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 02</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Our story</h2>
        <p className="mt-2 text-sm text-ink/70">A few frames from the movie of us.</p>

        <div className="mt-6 flex-1 space-y-8 overflow-y-auto pb-4 pr-1">
          {content.timeline.map((item, i) => {
            const photo =
              item.photoIndex !== undefined ? content.photos[item.photoIndex] : undefined;
            return (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, x: i % 2 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
              >
                <div className={`flex items-start gap-4 ${i % 2 ? "flex-row-reverse" : ""}`}>
                  {photo && (
                    <Polaroid
                      driveFileId={photo.driveFileId}
                      caption={photo.caption}
                      alt={photo.alt}
                      index={item.photoIndex ?? i}
                      emptyHref={driveFolderUrl(content.googleDriveAlbumUrl)}
                      onClick={() =>
                        item.photoIndex !== undefined ? onPhoto(item.photoIndex) : undefined
                      }
                    />
                  )}
                  <div className="glass-card flex-1 rounded-2xl p-4">
                    {item.date && (
                      <p className="text-[11px] uppercase tracking-[0.2em] text-rose/60">
                        {item.date}
                      </p>
                    )}
                    <h3 className="font-display mt-1 text-xl text-rose-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
                    {item.catReaction && (
                      <p className="font-hand mt-3 text-sm text-rose">“{item.catReaction}”</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="All our photos →" />
      </div>
    </ChapterShell>
  );
}
