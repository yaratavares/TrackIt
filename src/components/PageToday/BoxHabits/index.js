import { Habit } from "./style";
import CheckHabits from "../CheckHabits";
import { useEffect, useState } from "react";

export default function BoxHabits({ habit, setHabit }) {
  const [greenRecord, setGreenRecord] = useState(false);
  const [greenSequence, setGreenSequence] = useState(false);

  useEffect(() => {
    if (habit.done) {
      setGreenSequence(true);
      if (
        habit.currentSequence === habit.highestSequence &&
        habit.highestSequence > 0
      ) {
        setGreenRecord(true);
      }
    } else {
      setGreenSequence(false);
      setGreenRecord(false);
    }
  }, [habit]);

  return (
    <Habit
      key={habit.id}
      greenRecord={greenRecord}
      greenSequence={greenSequence}
    >
      <div className="tittleAndInformations">
        <h3>{habit.name}</h3>
        {habit.currentSequence !== undefined ? (
          <p>
            Sequência atual:{" "}
            <span className="sequence">{habit.currentSequence} dias</span>
            <br />
            Seu recorde:{" "}
            <span className="record">{habit.highestSequence} dias</span>
          </p>
        ) : null}
      </div>
      <CheckHabits habit={habit} setHabit={setHabit} />
    </Habit>
  );
}
