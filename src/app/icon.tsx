import { ImageResponse } from "next/og";
import { Brand } from "@/components/brand";

export default function Icon() {
  return new ImageResponse(
    <Brand style={{ color: "#ff6002", width: 30, height: 30, margin: 1 }} />,
    {
      width: 32,
      height: 32,
    },
  );
}
