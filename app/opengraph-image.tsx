import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "R.P Jewellers & Sons, wedding jewellery in Dalsinghsarai since 1998";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #7A1424 0%, #3E0A12 48%, #2A070C 100%)",
          color: "#F6E7B8",
        }}
      >
        <div
          style={{
            width: 120,
            height: 140,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #E6CB8A",
            color: "#E6CB8A",
            fontSize: 42,
          }}
        >
          RP
        </div>
        <div style={{ marginTop: 28, fontSize: 64 }}>R.P Jewellers & Sons</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#E6CB8A" }}>Wedding jewellery · Dalsinghsarai · Since 1998</div>
      </div>
    ),
    { ...size },
  );
}
