import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../../common/contexts/UserLogin";
import { getUser } from "../../common/services/trackit";

import ButtonInPages from "./ButtonInPages/index";
import InputsInPages from "./InputsInPages/index";
import logo from "../../common/assets/logo.jpg";
import Container from "./style";

export default function PageLogin() {
  const inputs = [
    { field: "email", name: "email", text: "email" },
    { field: "password", name: "password", text: "senha" },
  ];
  const navigate = useNavigate();
  const [promise, setPromise] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserLogin);

  function login(event) {
    event.preventDefault();

    const request = getUser(data);
    setPromise(request);

    request.then((response) => {
      setUser(response.data);
      navigate("/hoje");
    });
    request.catch(() => {
      setPromise(null);
      alert("Não foi possível fazer o login! Tente novamente.");
    });
  }

  return (
    <Container>
      <img src={logo} alt="logotipo TrackIt" />
      <form onSubmit={login}>
        <InputsInPages
          inputs={inputs}
          promise={promise}
          data={data}
          setData={setData}
        />
        <ButtonInPages buttonName={"Entrar"} promise={promise} />
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
