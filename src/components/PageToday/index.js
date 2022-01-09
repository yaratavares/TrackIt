import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../contexts/UserLogin";

import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import BoxHabits from "./BoxHabits";
import { Container, PercentageDay } from "./style";
import DayFormat from "./DayFormat";
import updateHabitsToday from "./common/updateHabitsToday";

export default function PageToday() {
  const [habitsDay, setHabitsDay] = useState([]);
  const { user } = useContext(UserLogin);

  useEffect(() => {
    updateHabitsToday(user.token, setHabitsDay);
  }, [user.token]);

  return (
    <>
      <HeaderPage />
      <Container>
        <DayFormat />
        <PercentageDay>Nenhum hábito concluído ainda</PercentageDay>
        {habitsDay.map((habit) => (
          <BoxHabits
            key={habit.id}
            habit={habit}
            setHabit={setHabitsDay}
          ></BoxHabits>
        ))}
      </Container>
      <FooterPage />
    </>
  );
}
