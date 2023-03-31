import React from "react";
import { BiChevronLeft, BiWrench } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BaseInput from "../components/BaseInput";
import ExerciseCardSlider from "../components/ExerciseCardSlider";
import Spacer from "../components/Spacer";
import { H1 } from "../components/Typo";

type AddWpPageProps = { ExBank: { exerciseID: number; name: string }[] };
export default function AddWpPage({ ExBank }: AddWpPageProps) {
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
        <H1>Add new workout</H1>
        <BiWrench color="white" size={28} />
      </div>
      <Spacer size={3} />
      <H1>Name of workout</H1>
      <Spacer size={0} />
      <BaseInput />
      <Spacer size={4} />
      <H1>Select exercises</H1>
      <Spacer size={0} />
      <ExerciseCardSlider ExList={ExBank} />
      <Spacer size={2} />
      <p style={{ color: "white", textAlign: "center" }}>
        Scroll right to view more exercises
      </p>
    </ScPageWrap>
  );
}

const ScPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;
