/**
 * ═══════════════════════════════════════════════════════════
 *  EDIT THIS FILE — everything romantic lives here
 * ═══════════════════════════════════════════════════════════
 *
 * PHOTOS: paste Google Drive FILE links or bare file IDs.
 *   Example link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   Example id:   1AbCDeFgHiJkLmNoPqRsTuVwXyZ
 *
 * Folder (album / leave memories): paste the shared FOLDER link.
 *   Example: https://drive.google.com/drive/folders/FOLDER_ID
 *
 * Sharing tip: each file + folder → Anyone with the link → Viewer
 */

export type PhotoItem = {
  /** Google Drive file id OR full file share URL — leave "" until you paste */
  driveFileId: string;
  caption: string;
  alt: string;
};

export type TimelineItem = {
  title: string;
  date?: string;
  text: string;
  /** optional index into photos[] (0-based) */
  photoIndex?: number;
  catReaction?: string;
};

export const content = {
  // ─── NAMES (replace placeholders) ───────────────────────
  herName: "HER_NAME",
  yourName: "YOUR_NAME",
  birthdayDate: "2026-10-30",

  heroTitle: "Happy Birthday, my love",
  heroSubtitle:
    "A little corner of the internet that exists only because you do.",

  // ─── GOOGLE DRIVE ALBUM (folder link) ───────────────────
  googleDriveAlbumUrl:
    "https://drive.google.com/drive/folders/GOOGLE_DRIVE_FOLDER_URL",

  driveFolders: [
    { title: "Our Dates", hint: "Coffee, walks, late nights" },
    { title: "Silly Moments", hint: "Unhinged & perfect" },
    { title: "Trips", hint: "Wherever we wandered" },
    { title: "Birthday 2026", hint: "Leave a new memory here" },
  ],

  // ─── ~10 PHOTOS FROM GOOGLE DRIVE ───────────────────────
  photos: [
    {
      driveFileId: "",
      caption: "PHOTO_1_CAPTION — the first soft smile",
      alt: "Memory 1",
    },
    {
      driveFileId: "",
      caption: "PHOTO_2_CAPTION — us, mid-laugh",
      alt: "Memory 2",
    },
    {
      driveFileId: "",
      caption: "PHOTO_3_CAPTION — golden hour",
      alt: "Memory 3",
    },
    {
      driveFileId: "",
      caption: "PHOTO_4_CAPTION — your eyes did that thing",
      alt: "Memory 4",
    },
    {
      driveFileId: "",
      caption: "PHOTO_5_CAPTION — chaos, but ours",
      alt: "Memory 5",
    },
    {
      driveFileId: "",
      caption: "PHOTO_6_CAPTION — quiet & enough",
      alt: "Memory 6",
    },
    {
      driveFileId: "",
      caption: "PHOTO_7_CAPTION — favorite accidental photo",
      alt: "Memory 7",
    },
    {
      driveFileId: "",
      caption: "PHOTO_8_CAPTION — proof I stared too long",
      alt: "Memory 8",
    },
    {
      driveFileId: "",
      caption: "PHOTO_9_CAPTION — soft launch forever",
      alt: "Memory 9",
    },
    {
      driveFileId: "",
      caption: "PHOTO_10_CAPTION — still choosing you",
      alt: "Memory 10",
    },
  ] satisfies PhotoItem[],

  timeline: [
    {
      title: "The spark",
      date: "Once upon a chat",
      text: "Something ordinary turned into the start of us.",
      photoIndex: 0,
      catReaction: "certified soft launch",
    },
    {
      title: "The laugh",
      text: "You said something silly. I never recovered.",
      photoIndex: 1,
      catReaction: "this is us",
    },
    {
      title: "The quiet",
      text: "Silence with you felt like home.",
      photoIndex: 2,
    },
    {
      title: "The chaos",
      text: "Plans failed. We stayed. That was the plan.",
      photoIndex: 4,
      catReaction: "plot twist: I fell harder",
    },
    {
      title: "The ordinary magic",
      text: "Groceries, memes, goodnight texts — all sacred.",
      photoIndex: 5,
    },
    {
      title: "Today",
      date: "Your birthday",
      text: "Another year of you. My favorite plotline.",
      photoIndex: 9,
      catReaction: "main character energy",
    },
  ] satisfies TimelineItem[],

  reasons: [
    "The way your smile rearranges my whole day",
    "How safe it feels to be completely myself with you",
    "Your tiny habits I pretend not to notice (I notice all of them)",
    "The softness you keep even on hard days",
    "How you make ordinary Tuesday nights feel like a movie",
    "Your laugh — my favorite sound in any room",
    "The way you care, quietly and completely",
    "Every inside joke that only we understand",
    "How you look at me like I'm already enough",
    "Choosing you again, on purpose, every morning",
  ],

  loveLetter: `My dearest HER_NAME,

Happy birthday to the girl who somehow became my favorite place.

I built you this little website because a text felt too small for everything you are. These photos, these words, these silly cats — they're just proof that loving you spills out of me in the most extra ways.

Thank you for the soft mornings, the chaotic evenings, the quiet in-betweens. Thank you for being you — stubbornly kind, impossibly lovely, endlessly mine to admire.

I hope this year wraps you in softness. I hope you feel chosen. I hope you know that wherever we go next, my heart already packed its bags for you.

Forever isn't a big word when it's you.

With all the love I have (and then some),
YOUR_NAME 💕`,

  cakeWishText: "Make a wish, my love — I'm already wishing for more of you.",

  futureCards: [
    {
      title: "Next adventures",
      text: "New cities, late trains, and snacks we pretend are dinner.",
    },
    {
      title: "Places we'll go",
      text: "Wherever your laugh leads — I'll follow with the camera.",
    },
    {
      title: "Promises",
      text: "More patience. More playlists. More choosing us.",
    },
    {
      title: "Forever note",
      text: "Forever starts every morning with you.",
    },
  ],

  catQuotes: [
    "me when you smile",
    "brain cells: 0 / love: 100",
    "emotionally attached to her laugh",
    "sir this is a Wendy's… and also my heart",
    "soft launch? nah. hard commit.",
    "currently buffering feelings",
    "certified girlfriend enjoyer",
    "do not disturb: staring at her",
  ],

  /** Optional: drop an mp3 at /public/music/soft-love.mp3 */
  musicSrc: "/music/soft-love.mp3",

  closingLine: "I love you more than yesterday",
} as const;

export type Content = typeof content;
