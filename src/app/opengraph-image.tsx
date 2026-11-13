import { ImageResponse } from "next/og";

// The preview picture shown when a page from the site is shared (LinkedIn,
// Facebook, text messages, and so on). 1200x630 is the standard size.
export const alt = "Ironclad Consulting Group: financial and management consulting in Lancaster, PA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16223A",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="88" height="88" viewBox="0 0 100 100">
            <path d="M78 28 A 34 34 0 1 0 78 72" fill="none" stroke="#FFFFFF" strokeWidth={15} />
            <rect x="43" y="36" width="14" height="28" fill="#FFFFFF" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 28,
              fontSize: 34,
              letterSpacing: 8,
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            Ironclad
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 6, color: "#AEB8CC", textTransform: "uppercase" }}>
            Financial & Management Consulting
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 68, lineHeight: 1.12, fontWeight: 700 }}>
            <div style={{ display: "flex", color: "#FFFFFF" }}>Financial guidance as solid</div>
            <div style={{ display: "flex", color: "#C17A35", fontStyle: "italic" }}>as the name.</div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#AEB8CC" }}>
          Ironclad Consulting Group · Lancaster, PA
        </div>
      </div>
    ),
    { ...size }
  );
}
