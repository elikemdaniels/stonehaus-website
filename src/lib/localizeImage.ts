import fs from "fs";
import path from "path";

/**
 * Downloads an image from Statamic to the Next.js public directory
 * and returns the local public path for SSG.
 */
export async function localizeImage(remoteUrl: string): Promise<string> {
  // 1. Guard clauses
  if (!remoteUrl) return remoteUrl;
  // If it already looks like a localized path, we don't need to do anything
  if (remoteUrl.startsWith("/cms-images/")) return remoteUrl;

  try {
    // 2. Safely construct the absolute URL
    // We use your env variable, but fall back safely to your local Herd/Valet domain
    const baseUrl = process.env.STATAMIC_URL || "http://stonehaus.test";

    // Statamic sometimes returns relative paths (like /assets/img.jpg).
    // This ensures we always have a fully qualified URL to fetch from.
    const fullUrl = remoteUrl.startsWith("http")
      ? remoteUrl
      : `${baseUrl}${remoteUrl.startsWith("/") ? "" : "/"}${remoteUrl}`;

    // 3. Set up the local file paths
    const urlObj = new URL(fullUrl);
    // path.basename grabs just the file name (e.g., 'hero.jpg') and ignores query strings
    const fileName = path.basename(urlObj.pathname);

    const localDir = path.join(process.cwd(), "public", "cms-images");
    const localFilePath = path.join(localDir, fileName);
    const publicUrlPath = `/cms-images/${fileName}`;

    // 4. Cache Check: Prevent re-downloading existing images to keep builds fast
    if (fs.existsSync(localFilePath)) {
      return publicUrlPath;
    }

    // 5. Ensure the target directory exists before writing to it
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }

    // 6. Fetch the image from your local Statamic instance
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${fullUrl} - Status: ${response.statusText}`,
      );
    }

    // 7. Convert the response to a Buffer and write it to the disk
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(localFilePath, buffer);

    // 8. Return the new local path so it gets saved into your GraphQL data
    return publicUrlPath;
  } catch (error) {
    console.error("Error localizing image:", error);
    // If something fails (e.g., Statamic is turned off), return the original URL as a fallback
    return remoteUrl;
  }
}
