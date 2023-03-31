import React from "react";
import styled from "styled-components";
import ExerciseSliderCard from "./ExerciseSliderCard";
import Spacer from "./Spacer";

type ExerciseCardSliderProps = {
  ExList: { exerciseID: number; name: string }[];
};
export default function ExerciseCardSlider({
  ExList,
}: ExerciseCardSliderProps) {
  const half = Math.ceil(ExList.length / 2);
  const ExList1 = ExList.slice(0, half);
  const ExList2 = ExList.slice(half);
  return (
    <ScSliderContainer>
      <div style={{ display: "flex" }}>
        {ExList1.map((exercise) => {
          return (
            <div style={{ display: "flex" }}>
              <ExerciseSliderCard
                label={exercise.name}
                action={() => alert(exercise.name)}
              />
              <Spacer size={1} />
            </div>
          );
        })}
      </div>
      <Spacer size={1} />
      <div style={{ display: "flex" }}>
        {ExList2.map((exercise) => {
          return (
            <div style={{ display: "flex" }}>
              <ExerciseSliderCard
                label={exercise.name}
                action={() => alert(exercise.name)}
              />
              <Spacer size={1} />
            </div>
          );
        })}
      </div>
    </ScSliderContainer>
  );
}

const ScSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
`;
