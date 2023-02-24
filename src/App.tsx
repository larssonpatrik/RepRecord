import React, { useState } from "react";
import { exerciseData } from "./exerciseData";
import "./App.css";

function App() {
  const [exerciseBank, setExerciseBank] =
    useState<{ exerciseID: number; name: string }[]>(exerciseData);
  const [workoutPrograms, setWorkoutPrograms] = useState<
    { exerciseID: number; weight: number; sets: number; reps: number }[]
  >([]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>TEST</h1>
        {exerciseBank.map((exercise) => {
          return (
            <div>
              <h2>{exercise.name}</h2>
              <p>id: {exercise.exerciseID}</p>
              <button
                onClick={() => {
                  setWorkoutPrograms([
                    ...workoutPrograms,
                    {
                      exerciseID: exercise.exerciseID,
                      weight: 1,
                      sets: 3,
                      reps: 8,
                    },
                  ]);
                }}
              >
                Add to workout program
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>TEST</h1>
        {workoutPrograms.map((workoutProgram) => {
          return (
            <div>
              <h1>
                {
                  exerciseBank.find(
                    (exercise) =>
                      exercise.exerciseID === workoutProgram.exerciseID
                  )?.name
                }
              </h1>
              <button>Test</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
