import { DaysOfWeek } from "./style";

export default function ButtonsDays({ listHabit, setListHabit, click }) {
  const daysOfWeek = [
    { id: 1, day: "D" },
    { id: 2, day: "S" },
    { id: 3, day: "T" },
    { id: 4, day: "Q" },
    { id: 5, day: "Q" },
    { id: 6, day: "S" },
    { id: 7, day: "S" },
  ];

  function clickDay(id) {
    const days = listHabit.days;
    if (days.includes(id)) {
      const filterDays = days.filter((days) => days !== id);
      setListHabit({ ...listHabit, days: filterDays });
    } else {
      setListHabit({ ...listHabit, days: [...days, id] });
    }
  }

  return (
    <>
      {daysOfWeek.map((button) => (
        <DaysOfWeek
          key={button.id}
          type="button"
          id={button.id}
          onClick={() => (click ? clickDay(button.id) : false)}
          days={listHabit.days}
        >
          {button.day}
        </DaysOfWeek>
      ))}
    </>
  );
}
