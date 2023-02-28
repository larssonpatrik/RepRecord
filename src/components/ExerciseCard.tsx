import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { H1 } from "./Typo";

type ExerciseCardProps = {
  exerciseName: string;
  reps: number;
  sets: number;
  weight: number;
  order: number;
};

export default function ExerciseCard({
  exerciseName,
  reps,
  sets,
  weight,
  order,
}: ExerciseCardProps) {
  return (
    <ScCardContainer>
      <ScHeader>
        <ScNumber>{order}</ScNumber>
        <Spacer size={2} />
        <H1>{exerciseName}</H1>
      </ScHeader>
      <Spacer size={2} />
      <ScContentTable>
        <ScContentColumn>
          <ScMetaText>Set</ScMetaText>
          <Spacer size={1} />
          <ScText>{sets}</ScText>
        </ScContentColumn>
        <ScContentColumn>
          <ScMetaText>Reps</ScMetaText>
          <Spacer size={1} />
          <ScText>{reps}</ScText>
        </ScContentColumn>
        <ScContentColumn>
          <ScMetaText>Weigth</ScMetaText>
          <Spacer size={1} />
          <ScText>{weight}kg</ScText>
        </ScContentColumn>
      </ScContentTable>
    </ScCardContainer>
  );
}

const ScCardContainer = styled.div`
  background-color: #212121;
  border-radius: 16px;
  padding: 16px 24px;
`;

const ScHeader = styled.div`
  display: flex;
`;

const ScContentTable = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScContentColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ScNumber = styled.div`
  color: #1da2dc;
  font-weight: 600;
  font-size: 22px;
`;

const ScMetaText = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 16px;
`;

const ScText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;
