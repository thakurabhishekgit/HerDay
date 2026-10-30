"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicToggle({
  src,
  unlocked,
}: {
  src?: string;
  unlocked: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) return;
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    setReady(true);
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !unlocked || !ready) return;
    if (muted) {
      audio.pause();
    } else {
      audio.play().catch(() => undefined);
    }
  }, [unlocked, muted, ready]);

  if (!src) return null;

  return (
    <button
      type="button"
      aria-label={muted ? "Unmute music" : "Mute music"}
      onClick={() => setMuted((m) => !m)}
      className="fixed bottom-5 right-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-rose shadow-lg backdrop-blur-md ring-1 ring-rose/20"
    >
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
}
