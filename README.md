# HerDay 💕

A cinematic birthday surprise website for your girlfriend — sealed envelope intro, memory lane, Drive-powered photo gallery, reasons deck, typewriter love letter, cake wish, future promises, and a Google Drive vault for leaving more memories.

Built with **Next.js + Tailwind + Framer Motion**. Ready for **Vercel**.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Personalize (one file)

Edit **`src/data/content.ts`**:

| Field | What to put |
|---|---|
| `herName` / `yourName` | Replace `HER_NAME` / `YOUR_NAME` |
| `loveLetter` | Your full letter |
| `reasons` | Why you love her |
| `timeline` | Your story moments |
| `photos[].driveFileId` | Google Drive **file** link or file ID |
| `photos[].caption` | Soft captions |
| `googleDriveAlbumUrl` | Shared **folder** link |
| `futureCards` / `catQuotes` | Optional polish |

### Google Drive photos (no local uploads)

1. Upload ~10 photos to a Google Drive folder.
2. For **each photo**: Share → Anyone with the link → Viewer → copy link.
3. Paste each link into `photos[n].driveFileId`.
4. Share the **folder** the same way → paste into `googleDriveAlbumUrl`.
5. Empty Polaroids / “Add a memory” buttons open that folder.

Supported link shapes:

- `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
- bare `FILE_ID`
- folder: `https://drive.google.com/drive/folders/FOLDER_ID`

---

## Optional music

Drop a soft track at:

```text
public/music/soft-love.mp3
```

Music starts after she taps **Open your surprise** (autoplay rules). Mute pill floats bottom-right.

If you skip the file, the mute control simply won’t play audio.

---

## Deploy on Vercel

1. Push this repo to GitHub (`thakurabhishekgit/HerDay`).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Deploy (defaults are fine).
4. Send her the `*.vercel.app` link on WhatsApp.

---

## Chapter map

0. Sealed envelope gate  
1. Hero birthday wish  
2. Our story / memory lane  
3. Photo gallery (Drive)  
4. Reasons I love you  
5. Typewriter love letter  
6. Cake + wish  
7. Future with you  
8. Google Drive vault  
9. Closing + replay  

---

Made with ridiculous amounts of love.
