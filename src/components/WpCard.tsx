import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { H1 } from "./Typo";

type WpCardProps = { label: string; action: Function };

export default function WpCard({ label, action }: WpCardProps) {
  return (
    <ScCardContainer onClick={() => action()}>
      <ScCard>
        <p style={{ color: "white" }}>{label}</p>
      </ScCard>
    </ScCardContainer>
  );
}

const ScCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: #212121;
  border-radius: 16px;
`;
