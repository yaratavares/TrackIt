import BoxHabits from "../../PageToday/BoxHabits";
import { DayTitle } from "./style";

export default function PageTodayHistory({ historyUser, dateChangeHistory }) {
  let habitsDay = 0;
  historyUser.map((dayHabit) =>
    dayHabit.day === dateChangeHistory ? (habitsDay = dayHabit.habits) : null
  );

  return (
    <>
      <DayTitle>{dateChangeHistory} </DayTitle>
      {habitsDay.map((habit) => (
        <BoxHabits key={habit.id} habit={habit}></BoxHabits>
      ))}
    </>
  );
}
