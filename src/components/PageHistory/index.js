import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../common/contexts/UserLogin";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { Container, Text, TopoMenu, BoxCalendar } from "./style";
import { getHistoryUser } from "../../common/services/trackit";

export default function PageHistory() {
  const [historyUser, setHistoryUser] = useState([]);
  const [arrayDays, setArrayDays] = useState([]);
  const { user } = useContext(UserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      alert("Primeiro faça Login ou cadastre-se!");
      navigate("/");
    } else {
      const request = getHistoryUser(user.token);
      request.then((response) => {
        let array = [];
        setHistoryUser(response.data);
        response.data.map((days) => {
          days.habits.map((habit) =>
            !habit.done
              ? array.push(dayjs(habit.date).format("DD/MM/YYYY"))
              : null
          );
        });
        setArrayDays(array);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(historyUser);
  console.log(arrayDays);

  return (
    <>
      <HeaderPage></HeaderPage>
      <Container>
        <TopoMenu>
          <p>Histórico</p>
        </TopoMenu>
        <BoxCalendar>
          <Calendar
            className="calendarStyle"
            showFixedNumberOfWeeks={true}
            calendarType="US"
            tileClassName={({ date, view }) =>
              view === "month" &&
              arrayDays.includes(dayjs(date).format("DD/MM/YYYY"))
                ? "noDone"
                : null
            }
            formatDay={(locale, date) => dayjs(date).format("DD")}
          />
        </BoxCalendar>
      </Container>
      <FooterPage></FooterPage>
    </>
  );
}
