import { useEffect, useState, useContext } from "react";
import { AddHabit, Container, Text, TopoMenu } from "./style";

import { UserLogin } from "../../contexts/UserLogin";
import updateHabits from "./common/updateHabits";
import HeaderPage from "../HeaderPage";
import FormAddHabit from "./FormAddHabit";
import CreateHabits from "./CreateHabits";
import FooterPage from "../FooterPage";

export default function PageHabits() {
  const { user } = useContext(UserLogin);
  const [listHabit, setListHabit] = useState([]);
  const [displayAdd, setDisplayAdd] = useState(true);

  useEffect(() => {
    updateHabits(setListHabit, user.token);
  }, []);

  return (
    <>
      <HeaderPage />
      <Container>
        <TopoMenu>
          <p>Meus Hábitos</p>
          <AddHabit onClick={() => setDisplayAdd(!displayAdd)}>+</AddHabit>
        </TopoMenu>
        <FormAddHabit
          setHabitGet={setListHabit}
          displayAdd={displayAdd}
          setDisplayAdd={setDisplayAdd}
        ></FormAddHabit>
        {listHabit.length === 0 ? (
          <Text>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Text>
        ) : (
          <CreateHabits listHabitGet={listHabit} setHabitGet={setListHabit} />
        )}
      </Container>
      <FooterPage />
    </>
  );
}
