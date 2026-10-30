/** Turn a Google Drive file id or share link into a displayable image URL. */
export function driveImageUrl(
  fileIdOrUrl: string | undefined,
  size = 1600,
): string | null {
  if (!fileIdOrUrl?.trim()) return null;
  const id = extractDriveFileId(fileIdOrUrl.trim());
  if (!id) return null;
  // googleusercontent is the most reliable for <img> embeds
  return `https://lh3.googleusercontent.com/d/${id}=w${size}`;
}

export function extractDriveFileId(input: string): string | null {
  if (/^[a-zA-Z0-9_-]{20,}$/.test(input)) return input;

  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
    /\/uc\?.*?id=([a-zA-Z0-9_-]+)/,
  ];

  for (const re of patterns) {
    const m = input.match(re);
    if (m?.[1]) return m[1];
  }
  return null;
}

export function driveFolderUrl(folderIdOrUrl: string): string {
  if (folderIdOrUrl.startsWith("http")) return folderIdOrUrl;
  return `https://drive.google.com/drive/folders/${folderIdOrUrl}`;
}
