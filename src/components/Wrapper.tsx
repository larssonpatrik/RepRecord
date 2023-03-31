import React from "react";
import styled from "styled-components";

type WrapperProps = {};

export default function Wrapper({ children }: React.PropsWithChildren) {
  return <ScDiv>{children}</ScDiv>;
}

const ScDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
