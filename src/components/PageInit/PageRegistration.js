import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Container from "./style";

import { postRegistration } from "../../services/trackit";
import ButtonInPages from "./ButtonInPages";
import InputsInPages from "./InputsInPages";

export default function PageRegistration() {
  const inputs = [
    { field: "email", name: "email", text: "email" },
    { field: "password", name: "password", text: "senha" },
    { field: "name", name: "name", text: "nome" },
    { field: "url", name: "image", text: "foto" },
  ];

  const navigate = useNavigate();
  const [promise, setPromise] = useState(null);
  const [data, setData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function registration(event) {
    event.preventDefault();

    const request = postRegistration(data);
    setPromise(request);

    request.then(() => navigate("/"));
    request.catch(() => {
      alert("Não foi possível fazer o cadastro! Tente novamente.");
      setPromise(null);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logotipo TrackIt" />
      <form onSubmit={registration}>
        <InputsInPages
          inputs={inputs}
          promise={promise}
          data={data}
          setData={setData}
        />
        <ButtonInPages buttonName={"Cadastrar"} promise={promise} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
