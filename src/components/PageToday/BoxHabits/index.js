import { Habit } from "./style";
import CheckHabits from "../CheckHabits";

export default function BoxHabits({ habit }) {
  return (
    <Habit key={habit.id}>
      <div className="tittleAndInformations">
        <h3>{habit.name}</h3>
        <p>
          Sequência atual: {habit.currentSequence} dias
          <br />
          Seu recorde: {habit.highestSequence} dias
        </p>
      </div>
      <CheckHabits></CheckHabits>
    </Habit>
  );
}
