"use client";

import { content } from "@/data/content";
import { driveFolderUrl } from "@/lib/drive";
import { ChapterShell, NavRow } from "../ChapterShell";
import { MemeCat } from "../MemeCat";
import { Polaroid } from "../Polaroid";

export function Gallery({
  onNext,
  onBack,
  onPhoto,
}: {
  onNext: () => void;
  onBack: () => void;
  onPhoto: (index: number) => void;
}) {
  const album = driveFolderUrl(content.googleDriveAlbumUrl);

  return (
    <ChapterShell>
      <div className="relative flex flex-1 flex-col">
        <div className="absolute -left-1 top-2 z-10">
          <MemeCat
            pose="peek"
            quote={content.catMemes[4].quote}
            driveFileId={content.catMemes[4].driveFileId}
            side="left"
          />
        </div>
        <div className="absolute -right-1 bottom-28 z-10">
          <MemeCat
            pose="cheer"
            quote={content.catMemes[5].quote}
            driveFileId={content.catMemes[5].driveFileId}
            side="right"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 03</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Our gallery</h2>
        <p className="mt-2 text-sm text-ink/70">Ten frames. Infinite soft feelings.</p>

        <div className="mt-6 grid flex-1 grid-cols-2 gap-4 pb-6 sm:gap-5">
          {content.photos.map((photo, i) => (
            <div key={i} className="flex justify-center">
              <Polaroid
                driveFileId={photo.driveFileId}
                caption={photo.caption}
                alt={photo.alt}
                index={i}
                emptyHref={album}
                onClick={() => onPhoto(i)}
              />
            </div>
          ))}
        </div>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="Reasons I love you →" />
      </div>
    </ChapterShell>
  );
}
