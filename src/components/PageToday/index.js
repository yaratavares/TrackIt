import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { Container } from "./style";

export default function PageToday() {
  return (
    <Container>
      <HeaderPage />
      <div>Hoje!</div>
      <FooterPage />
    </Container>
  );
}
