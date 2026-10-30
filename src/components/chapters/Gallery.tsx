"use client";

import { content } from "@/data/content";
import { driveFolderUrl } from "@/lib/drive";
import { ChapterShell, NavRow } from "../ChapterShell";
import { Polaroid } from "../Polaroid";
import { WalkingCat } from "../MemeCat";

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
      <WalkingCat quote={content.catQuotes[2]} />
      <div className="flex flex-1 flex-col">
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
          <div className="col-span-2 flex justify-center pt-2">
            <Polaroid
              caption="More memories coming…"
              alt="Add memory"
              index={11}
              emptyHref={album}
              emptyLabel="Leave a photo in Drive"
            />
          </div>
        </div>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="Reasons I love you →" />
      </div>
    </ChapterShell>
  );
}
