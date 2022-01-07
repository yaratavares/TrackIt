import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { AddHabit, Container, Text, TopoMenu } from "./style";

export default function PageHabits() {
  return (
    <>
      <HeaderPage />
      <Container>
        <TopoMenu>
          <p>Meus Hábitos</p>
          <AddHabit>+</AddHabit>
        </TopoMenu>
        <Text>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Text>
      </Container>
      <FooterPage />
    </>
  );
}
