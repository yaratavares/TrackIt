import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../common/contexts/UserLogin";

import HeaderPage from "../HeaderPage";
import DayFormat from "./DayFormat";
import PercentageToday from "./PercentageToday";
import BoxHabits from "./BoxHabits";
import FooterPage from "../FooterPage";
import { Container } from "./style";
import updateHabitsToday from "../../common/functions/updateHabitsToday";
import { useNavigate } from "react-router-dom";

export default function PageToday({ changeHistory }) {
  const [habitsDay, setHabitsDay] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserLogin);

  console.log(changeHistory);

  useEffect(() => {
    if (!user.token) {
      alert("Primeiro faça Login ou cadastre-se!");
      navigate("/");
    } else {
      updateHabitsToday(user.token, setHabitsDay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
