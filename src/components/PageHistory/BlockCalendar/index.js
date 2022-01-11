import { useEffect, useState } from "react/cjs/react.development";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import { BoxCalendar } from "./style";

export default function BlockCalendar({
  historyUser,
  changeHistory,
  setOnChangeHistory,
}) {
  const [arrayNoDone, setArrayNoDone] = useState([]);
  const [arrayDays, setArrayDays] = useState([]);

  useEffect(() => {
    const array = [];
    const arrayNoDone = [];
    const today = dayjs().format("DD/MM/YYYY");
    historyUser.map((days) => {
      days.habits.map((habit) =>
        !habit.done
          ? arrayNoDone.push(dayjs(habit.date).format("DD/MM/YYYY"))
          : null
      );
      days.habits.map((habit) =>
        array.push(dayjs(habit.date).format("DD/MM/YYYY"))
      );
    });

    const arrayFilter = array.filter((days) => days !== today);
    setArrayDays(arrayFilter);

    const arrayNoDoneFilter = arrayNoDone.filter((days) => days !== today);
    setArrayNoDone(arrayNoDoneFilter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyUser]);

  function onChangeClick(date) {
    const dateClick = dayjs(date).format("DD/MM/YYYY");
    if (arrayDays.includes(dateClick)) {
      setOnChangeHistory(dateClick);
    }
  }

  return (
    <BoxCalendar>
      <Calendar
        // className={changeHistory !== undefined ? "hidden" : null}
        onChange={(date) => onChangeClick(date)}
        showFixedNumberOfWeeks={true}
        calendarType="US"
        tileClassName={({ date, view }) =>
          view === "month" &&
          arrayDays.includes(dayjs(date).format("DD/MM/YYYY"))
            ? arrayNoDone.includes(dayjs(date).format("DD/MM/YYYY"))
              ? "noDone"
              : "done"
            : null
        }
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
    </BoxCalendar>
  );
}
