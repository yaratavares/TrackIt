import logo from "../../assets/logo.jpg";
import Container from "./style";

export default function PageLogin() {
  return (
    <Container>
      <img src={logo} alt="logotipo TrackIt" />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? Cadastre-se!</p>
    </Container>
  );
}
