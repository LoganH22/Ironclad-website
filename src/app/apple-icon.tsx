import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#16223A",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100">
          <path
            d="M78 28 A 34 34 0 1 0 78 72"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={15}
          />
          <rect x="43" y="36" width="14" height="28" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
