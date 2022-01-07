import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { Container, Text, TopoMenu } from "./style";

export default function PageHistory() {
  return (
    <>
      <HeaderPage></HeaderPage>
      <Container>
        <TopoMenu>
          <p>Histórico</p>
        </TopoMenu>
        <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
      </Container>
      <FooterPage></FooterPage>
    </>
  );
}
