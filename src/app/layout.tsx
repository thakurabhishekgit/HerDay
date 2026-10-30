import type { Metadata } from "next";
import { content } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `Happy Birthday ${content.herName} 💕`,
  description: `A private little love letter website from ${content.yourName} — photos, wishes, and soft chaos.`,
  openGraph: {
    title: `Happy Birthday ${content.herName} 💕`,
    description: "Open your surprise — made only for you.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
