import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE } from "@/features/(site)/shared";

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export const OG_IMAGE_CONTENT_TYPE = "image/png";

type OgImageOptions = {
  title?: string;
  subtitle?: string;
};

export async function createOgImage({
  title = SITE.name,
  subtitle = `${SITE.tagline} · Community Takeover on BSC`,
}: OgImageOptions = {}) {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/images/logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          padding: 72,
        }}
      >
        {/* ImageResponse only supports a raw img element */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={148}
          height={148}
          alt=""
          style={{
            borderRadius: 999,
            marginBottom: 28,
            border: "4px solid #38bdf8",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 48 : 72,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            color: "#7dd3fc",
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    },
  );
}
