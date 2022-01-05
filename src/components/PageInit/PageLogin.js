import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Loader from "react-loader-spinner";
import logo from "../../assets/logo.jpg";
import Container from "./style";

export default function PageLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function keyboardAnswer(parameterVariable, text) {
    setData({ ...data, [parameterVariable]: text });
    console.log(data);
  }

  function login(event) {
    event.preventDefault();

    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      data
    );

    request.then(() => navigate("/hoje"));
    request.catch(() => {
      alert("Não foi possível fazer o login! Tente novamente.");
      console.log(request);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logotipo TrackIt" />
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => keyboardAnswer(e.target.name, e.target.value)}
          placeholder="senha"
        />
        <button type="submit" disabled>
          <Loader type="ThreeDots" color="#FFFFFF" height={45} width={45} />
        </button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
