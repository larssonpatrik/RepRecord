import React from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { H1 } from "../components/Typo";
import { BiChevronLeft, BiWrench } from "react-icons/bi";
import ExerciseCard from "../components/ExerciseCard";
import { useNavigate, useParams } from "react-router-dom";

type WpPageProps = { getWP: Function; getExerciseData: Function };

export default function WpPage({ getWP, getExerciseData }: WpPageProps) {
  const { id } = useParams();
  const WP: {
    wpID: number;
    name: string;
    exercises: {
      exerciseID: number;
      weight: number;
      sets: number;
      reps: number;
    }[];
  } = getWP(Number(id));

  const navigate = useNavigate();

  return (
    <ScPageWrap>
      <Spacer size={3} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BiChevronLeft color="white" size={40} onClick={() => navigate(-1)} />
        <H1>{WP.name}</H1>
        <BiWrench color="white" size={28} />
      </div>
      <Spacer size={4} />
      {WP.exercises.map((exercise) => {
        const exerciseData = getExerciseData(exercise.exerciseID);
        return (
          <>
            <ExerciseCard
              exerciseName={exerciseData?.name}
              reps={exercise.reps}
              sets={exercise.sets}
              weight={exercise.weight}
            />
            <Spacer size={2} />
          </>
        );
      })}
    </ScPageWrap>
  );
}

const ScPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;
