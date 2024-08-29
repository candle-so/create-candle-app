import { ImageResponse } from "next/og";
import { candleColors } from "../../tailwind.config";

// Image metadata
export const size = {
  width: 36,
  height: 36,
};
export const contentType = "image/png";

// Load the Pacifico font from Google Fonts CDN
const pacificoFontUrl = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";

async function fetchFont(url: string) {
  const response = await fetch(url);
  const css = await response.text();

  // Extract the font URL from the CSS
  const fontUrlMatch = css.match(/url\(([^)]+)\)/);
  if (!fontUrlMatch) throw new Error("Could not extract font URL");

  const fontUrl = fontUrlMatch[1];
  const fontResponse = await fetch(fontUrl);
  return await fontResponse.arrayBuffer();
}

// Image generation
export default async function Icon() {
  console.log("Generating icon...");

  const pacificoFontData = await fetchFont(pacificoFontUrl);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          fontFamily: "Pacifico",
          fontWeight: "bold",
          color: candleColors.light,
          background: candleColors.primary[500],
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        U
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pacifico",
          data: pacificoFontData,
          style: "normal",
        },
      ],
    }
  );
}
