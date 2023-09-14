import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import { goToHomePrincipal } from "../../router/cordinator";
import Header from "../../components/organism/Header/index";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cadastro = async (e) => {
    e.preventDefault();
    console.log("Carla");
    try {
      const body = {
        nickname: form.name,
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}users/signup`, body);
      localStorage.setItem(TOKEN_NAME, response.data.token);
      goToHomePrincipal(navigate);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledHeader>
      <h1>Olá, boas vindas ao LabEddit ;&#41; </h1>
      <form onSubmit={cadastro} autoComplete="off">
        <input
          className="input1"
          onChange={changeForm}
          value={form.name}
          name="name"
          placeholder="Apelido"
        />
        <input
          className="input2"
          onChange={changeForm}
          value={form.email}
          name="email"
          placeholder="E-mail"
        />
        <input
          className="input3"
          onChange={changeForm}
          value={form.password}
          name="password"
          placeholder="Senha"
        />
        <span>
          Ao continuar, você concorda com o nosso Contrato de usuário e nossa
          Política de Privacidade
        </span>
        <label className="label1">
          <input id="checkbox" type="checkbox" />
          Eu concordo em receber emails sobre coisas legais no LabedditApelido
        </label>
        <button type="submit" className="button1">
          Cadastrar
        </button>
      </form>
    </StyledHeader>
  );
}
