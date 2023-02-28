import React from "react";
import CardSlider from "../components/CardSlider";
import Spacer from "../components/Spacer";
import Wrapper from "../components/Wrapper";

type StartPageProps = {
  WPsProp: {
    wpID: number;
    name: string;
    exercises: {
      exerciseID: number;
      weight: number;
      sets: number;
      reps: number;
    }[];
  }[];
};

export default function StartPage({ WPsProp }: StartPageProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Spacer size={3} />
      <img
        src={require("../Assets/RepRecord.png")}
        style={{ width: 200 }}
        alt="logo"
      />
      <Wrapper>
        <Spacer size={3} />
        <CardSlider WPArray={WPsProp} label="My Workouts" />
      </Wrapper>
    </div>
  );
}
