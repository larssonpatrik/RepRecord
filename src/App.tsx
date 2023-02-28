import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { exerciseData } from "./exerciseData";
import "./App.css";
import StartPage from "./pages/StartPage";
import WpPage from "./pages/WpPage";

function App() {
  const [exerciseBank, setExerciseBank] =
    useState<{ exerciseID: number; name: string }[]>(exerciseData);
  const [WPs, setWPs] = useState<
    {
      wpID: number;
      name: string;
      exercises: {
        exerciseID: number;
        weight: number;
        sets: number;
        reps: number;
      }[];
    }[]
  >([
    {
      wpID: 1,
      name: "Chest & Triceps",
      exercises: [
        {
          exerciseID: exerciseData[1].exerciseID,
          sets: 2,
          weight: 20,
          reps: 10,
        },
        {
          exerciseID: exerciseData[2].exerciseID,
          sets: 3,
          weight: 10,
          reps: 8,
        },
      ],
    },
    {
      wpID: 2,
      name: "Back & Glutes",
      exercises: [
        {
          exerciseID: exerciseData[4].exerciseID,
          sets: 2,
          weight: 20,
          reps: 10,
        },
        {
          exerciseID: exerciseData[6].exerciseID,
          sets: 3,
          weight: 10,
          reps: 8,
        },
      ],
    },
  ]);

  function addWP(newWP: {
    wpID: number;
    name: string;
    exercises: {
      exerciseID: number;
      weight: number;
      sets: number;
      reps: number;
    }[];
  }) {
    setWPs([...WPs, newWP]);
  }

  function getWP(wpID: number) {
    return [...WPs].find((WP) => {
      return WP.wpID === wpID;
    });
  }

  function getExerciseFromWP(wpID: number, exerciseID: number) {
    let tmpExerciseList = getWP(wpID)?.exercises;
    return tmpExerciseList?.find((exercise) => {
      return exercise.exerciseID === exerciseID;
    });
  }

  function getExerciseData(exerciseID: number) {
    return exerciseData.find((exercise) => {
      return exercise.exerciseID === exerciseID;
    });
  }

  function updateWPWeight(wpID: number, exerciseID: number, newWeight: number) {
    let tmpExerciseList = getExerciseFromWP(wpID, exerciseID);
    tmpExerciseList!.weight = newWeight;
    setWPs([...WPs]);
  }

  return (
    <Routes>
      <Route path="/" element={<StartPage WPsProp={WPs} />} />
      <Route
        path="/workoutprogram/:id"
        element={<WpPage getWP={getWP} getExerciseData={getExerciseData} />}
      />
      <Route
        path="/AddWP"
        element={<div style={{ color: "red" }}>TODO ADDWP PAGE</div>}
      />
    </Routes>
  );
}

export default App;
