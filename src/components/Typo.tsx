import React from "react";
import styled from "styled-components";

type H1Props = {
  color?: "light" | "dark" | "primary";
  align?: "left" | "center" | "right";
};

export function H1({
  children,
  color,
  align,
}: React.PropsWithChildren<H1Props>) {
  return <ScH1>{children}</ScH1>;
}

const ScH1 = styled.h1<{ align?: string }>`
  font-size: 22px;
  font-weight: 500;
  font-family: "Roboto";
  color: white;
`;
