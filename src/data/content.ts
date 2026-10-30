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
  herName: "Sharanya",
  yourName: "Abhishek",
  birthdayDate: "2026-10-31",

  heroTitle: "Happy Birthday, my love",
  heroSubtitle:
    "A little corner of the internet that exists only because you do.",

  // ─── GOOGLE DRIVE ALBUM (folder link — used by empty photo slots) ───
  googleDriveAlbumUrl:
    "https://drive.google.com/drive/folders/GOOGLE_DRIVE_FOLDER_URL",

  // ─── ~10 PHOTOS FROM GOOGLE DRIVE ───────────────────────
  photos: [
    {
      driveFileId:
        "https://drive.google.com/file/d/1vBD8oxOCdO5jt99JEthHcXv6JZKmN8Jy/view?usp=sharing",
      caption: "my cutie cupcake — Our First Date we realised it lately",
      alt: "Our First Date we realised it lately",
    },
    {
      driveFileId: "https://drive.google.com/file/d/15nnpFAJ3yHgGgpQRfGrwl_3XkKZ6YTEZ/view?usp=sharing",
      caption: "The Day when we felt we are FUCKING LOVERS",
      alt: "Memory 2",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1vKdCKHGQtmJjyOnG_94FKLPjfTi3-EmG/view?usp=sharing",
      caption: "The moment we felt we don't care are we took depe breath and just HUG Eachother",
      alt: "Memory 3",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1ih0aR7HTx-6phJqDI8K0AGvpldVaEFil/view?usp=sharing",
      caption: "PHOTO_4_CAPTION — your eyes did that thing",
      alt: "Memory 4",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1OTs0eSuggFBwELOTY1uuvNKFNAP7Nvbv/view?usp=sharing",
      caption: "when foir the first time meko shmje aaya what's NIHAARNA",
      alt: "Memory 5",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1u5yeBVSQKQrpl0FRnbqr0h6-XyY8CAkr/view?usp=sharing",
      caption: "I still remember kaise sharma rahi thi tu",
      alt: "Memory 6",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1wNhGkrHQJS6f8kXlaKiiv8NsjeCF7IDW/view?usp=sharing",
      caption: "UNIVERSE MADE US DO THIS (CAM KI MKC FR)",
      alt: "Memory 7",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1RJOKKiXf76foTF8uQVQrNwWq7NlwPMDG/view?usp=sharing",
      caption: "BEST MOMENT OF OUR LIFE FIRST KISS AND WE ACTUALLY CAPTURED IT",
      alt: "Memory 8",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1s98k4VVMwgcHNn1IB-UJ3mYNWDmFupI0/view?usp=sharing",
      caption: "PINTREST TO REALITY MOMENT",
      alt: "Memory 9",
    },
    {
      driveFileId: "https://drive.google.com/file/d/1um2WFN3yslSZEVyRJMZVJaLqnKaw8cjI/view?usp=sharing",
      caption: "The way you look at me when i hit a shot (U DA REAL SHOT)",
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
    "KYUKI TU ITEM HAI HEHEHEHEHHE",
    "I FELT THAT SPARK THE MOMENT I SAW YOU FOR 1ST TIME",
    "I STILL CAN'T HOLD EYE CONTACT WITH YOU THOSE EYES ARE AHHHH",
    "THE WAY TO BOUGHT ME BACK FROM MY PAST",
    "How you make ordinary Tuesday at newmark nights feel like a movie",
    "Your laugh — my favorite sound in any room",
    "NIGGA HOW CAN I KEEP 10 REASONS WHEN I HAVE TONS OF REASON TO LOVE YOU",
    "KYUKI TU CHATPATI HAI",
    "COZ YOUR DAD IS DIRECTOR OF COGNIZANT (YE PAD KE HAM DONO HASENGE)",
    "MAIN REASON WE BOTH FREAKY AHH COUPLE",
  ],

  loveLetter: `My dearest SHARANYA , NAPILLA,

Happy birthday to the girl who somehow became my favorite place.

I built you this little website because a text felt too small for everything you are. These photos, these words, these silly cats — they're just proof that loving you spills
out of me in the most extra ways. 

IDK still everything looks like dream and we are in a very FUCKING GOOD FLOW ki even we dont know , this energy is not normal FR hamara kuch to connectio tha pahele se 

Thank you for the soft mornings (I EXPECT GOOFY LOVE BOMBING WHICH YOU DO), the chaotic evenings(AT NEWMARK POOL CAFE MY DESK OMG UN REPETABLE MOMENTS), the quiet in-betweens (AFTER WE KISS OR DO SOME FREAK AND WE SAY BANEEEEEE). Thank you for being you — stubbornly kind (WHEN MEETINGS), impossibly lovely, endlessly mine to admire.

I hope this year wraps you in softness. I hope you feel chosen. I hope you know that wherever we go next, my heart already packed its bags for you.

Forever isn't a big word when it's you.

With all the love I have (and then some),
Abhishek  💕`,

  cakeWishText: "Make a wish, my love — I'm already wishing for more of you.",

  futureCards: [
    {
      title: "Next adventures",
      text: "New ways to meet, late nights, and snacks we pretend are dinner.",
    },
    {
      title: "Places we'll go",
      text: "anyplace with you dosen't matter its the best (bas kiss karne miljaye)",
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

  /**
   * Cute meme cats — paste Drive FILE links in driveFileId (same as photos).
   * Quote stays as the speech bubble; photo replaces the ASCII face.
   */
  catMemes: [
    {
      quote: "me when you smile",
      driveFileId: "https://drive.google.com/file/d/1PnUS2vPBs15FOR0J1aFJwA7ZtFC_sB0c/view?usp=sharing",
    },
    {
      quote: "brain cells: 0 / love: 100",
      driveFileId: "https://drive.google.com/file/d/1pTfeYPmX1lGNBudl9N5QGqY99o6ADjb-/view?usp=sharing",
    },
    {
      quote: "me everytime i see her ",
      driveFileId: "https://drive.google.com/file/d/1j4QVBWXrbDUQg9Sk73vZOZg_oxQOo2cP/view?usp=sharing",
    },
    {
      quote: "maa girllll",
      driveFileId: "https://drive.google.com/file/d/1h6k-25UJv9flTSfpq36mWqDQumfYSgpg/view?usp=sharing",
    },
    {
      quote: "US EVERYTIME WE MEET",
      driveFileId: "https://drive.google.com/file/d/1JoVhY_o0KxggQfx7FBdE5NIG1wpPtiBt/view?usp=sharing",
    },
    {
      quote: "EXACETLY",
      driveFileId: "https://drive.google.com/file/d/1m96qiCl7xjG-5gVl57QnKId68-Fu8FOv/view?usp=sharing",
    },
    {
      quote: "certified girlfriend enjoyer",
      driveFileId: "https://drive.google.com/file/d/1lRtPzaGLNhlUTiR6voW-FFyn3943k-eC/view?usp=sharing",
    },
    {
      quote: "IM GONNA WORK ON THIS PROJECT",
      driveFileId: "https://drive.google.com/file/d/1jUSaEBcUFDrXanfUAp8hO9K3MX9hTd9n/view?usp=sharing",
    },
  ],

  /** Optional: drop an mp3 at /public/music/soft-love.mp3 then set this path */
  musicSrc: "",

  closingLine: "I love you more than yesterday",
} as const;

export type Content = typeof content;
