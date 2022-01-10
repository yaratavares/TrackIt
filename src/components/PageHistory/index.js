import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../common/contexts/UserLogin";

import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { Container, Text, TopoMenu } from "./style";

export default function PageHistory() {
  const { user } = useContext(UserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      alert("Primeiro faça Login ou cadastre-se!");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
