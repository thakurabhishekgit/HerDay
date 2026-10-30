"use client";

import { ExternalLink } from "lucide-react";
import { content } from "@/data/content";
import { driveFolderUrl } from "@/lib/drive";
import { ChapterShell, NavRow } from "../ChapterShell";
import { Polaroid } from "../Polaroid";

export function Vault({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const album = driveFolderUrl(content.googleDriveAlbumUrl);

  return (
    <ChapterShell>
      <div className="flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-[0.28em] text-rose/70">Chapter 08</p>
        <h2 className="font-display mt-2 text-4xl text-rose-deep">Our Forever Album</h2>
        <p className="mt-2 text-sm text-ink/70">
          Tap to open more photos — or leave a new memory in Drive.
        </p>

        <a
          href={album}
          target="_blank"
          rel="noreferrer"
          className="btn-love mt-6 w-full"
        >
          Open Google Drive Album <ExternalLink size={16} />
        </a>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {content.driveFolders.map((folder) => (
            <a
              key={folder.title}
              href={album}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-4 transition hover:-translate-y-1"
            >
              <p className="font-display text-lg text-rose-deep">{folder.title}</p>
              <p className="mt-1 text-xs text-ink/60">{folder.hint}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4 overflow-x-auto pb-2">
          {[0, 1, 2].map((i) => (
            <Polaroid
              key={i}
              caption="Add a memory in Drive"
              alt="Empty photo slot"
              index={i + 3}
              emptyHref={album}
              emptyLabel="Drop a photo ♥"
            />
          ))}
        </div>

        <NavRow onBack={onBack} onNext={onNext} nextLabel="One last thing →" />
      </div>
    </ChapterShell>
  );
}
