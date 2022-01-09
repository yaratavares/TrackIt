import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../contexts/UserLogin";

import HeaderPage from "../HeaderPage";
import DayFormat from "./DayFormat";
import PercentageToday from "./PercentageToday";
import BoxHabits from "./BoxHabits";
import FooterPage from "../FooterPage";
import { Container } from "./style";
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
        <PercentageToday habits={habitsDay} />
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
