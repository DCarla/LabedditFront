import { StyledContainer } from "./style";
import logo from "../../../public/assents/icons/logo.svg";
import { goToCadastro, goToHomePrincipal } from "../../router/cordinator";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { TOKEN_NAME } from "../../constants/url";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const login = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}users/login`, body);
      const authToken = response.data.token;

      // Armazena o token no localStorage
      window.localStorage.setItem(TOKEN_NAME, authToken);

      setIsLoading(false);
      goToHomePrincipal(navigate);
    } catch (error) {}
  };

  return (
    <StyledContainer>
      <div className="div1">
        <img
          src={logo}
          alt="quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"
        />
        <h1>LabEddit</h1>
        <h2>O projeto de rede social da Labenu</h2>
      </div>

      <div className="div2">
        <form onSubmit={login} autoComplete="off">
          <input
            name="email"
            value={form.email}
            onChange={changeForm}
            required
            type="email"
            placeholder="E-mail"
          />
          <input
            name="password"
            value={form.password}
            onChange={changeForm}
            required
            type="password"
            placeholder="Senha"
            className="input2"
          />
          <button className="button1" onClick={login} disabled={isLoading}>
            Continuar
          </button>
          <hr />
        </form>
        <button className="button2" onClick={() => goToCadastro(navigate)}>
          Crie uma Conta!
        </button>
      </div>
    </StyledContainer>
  );
}
