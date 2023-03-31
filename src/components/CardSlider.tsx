import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import AddButton from "./AddButton";
import { H1 } from "./Typo";
import WpCard from "./WpCard";
import { useNavigate } from "react-router-dom";

type CardSliderProps = {
  WPArray: {
    wpID: number;
    name: string;
    exercises: {
      exerciseID: number;
      weight: number;
      sets: number;
      reps: number;
    }[];
  }[];
  label: string;
};

export default function CardSlider({ WPArray, label }: CardSliderProps) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <H1>{label}</H1>
        <AddButton navigation="/addWP">Add WP</AddButton>
      </div>
      <Spacer size={1} />
      <ScSliderContainer>
        {WPArray.map((WP) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <WpCard
                label={WP.name}
                action={() => navigate("/workoutprogram/" + WP.wpID)}
              />
              <Spacer size={1} />
            </div>
          );
        })}
      </ScSliderContainer>
    </div>
  );
}

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ScSliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 0 0 8px;
`;
