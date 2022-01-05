import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Container from "./style";

export default function PageRegistration() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function keyboardAnswer(parameterVariable, text) {
    setData({ ...data, [parameterVariable]: text });
  }

  function registration(event) {
    event.preventDefault();

    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      data
    );

    request.then(() => navigate("/"));
    request.catch(() => {
      alert("Não foi possível fazer o cadastro! Tente novamente.");
      console.log(request);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logotipo TrackIt" />
      <form onSubmit={registration}>
        <input
          type="email"
          name="email"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="senha"
        />
        <input
          type="name"
          name="name"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="nome"
        />
        <input
          type="url"
          name="image"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="foto"
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
