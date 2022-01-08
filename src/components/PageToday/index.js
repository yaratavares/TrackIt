import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../contexts/UserLogin";
import { getHabitsToday } from "../../services/trackit";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import BoxHabits from "./BoxHabits";
import { Container, DayTitle, PercentageDay } from "./style";

export default function PageToday() {
  const [habitsDay, setHabitsDay] = useState([]);
  const { user } = useContext(UserLogin);

  useEffect(() => {
    const request = getHabitsToday(user.token);
    request.then((response) => {
      setHabitsDay(response.data);
      console.log(response.data);
    });
    request.catch((response) => console.log(request));
  }, []);

  return (
    <>
      <HeaderPage />
      <Container>
        <DayTitle>Segunda, 17/05</DayTitle>
        <PercentageDay>Nenhum hábito concluído ainda</PercentageDay>
        {habitsDay.map((habit) => (
          <BoxHabits key={habit.id} habit={habit}></BoxHabits>
        ))}
      </Container>
      <FooterPage />
    </>
  );
}
