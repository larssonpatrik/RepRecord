import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { H1 } from "./Typo";

type ExSliderCardProps = { label: string; action: Function };

export default function ExerciseSliderCard({
  label,
  action,
}: ExSliderCardProps) {
  return (
    <ScCardContainer onClick={() => action()}>
      <ScCard>
        <p style={{ color: "white", textAlign: "center" }}>{label}</p>
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
  height: 175px;
  width: 175px;
  background-color: #212121;
  border-radius: 16px;
`;
