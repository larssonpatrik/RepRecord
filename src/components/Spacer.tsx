import React from "react";

type SpacerProps = { size: 1 | 2 | 3 | 4 };
const SIZES = [4, 8, 16, 24, 32];

export default function Spacer({ size }: SpacerProps) {
  return <div style={{ height: SIZES[size], width: SIZES[size] }}></div>;
}
