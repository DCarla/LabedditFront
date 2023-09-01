import { StyledContainer } from "./style";
import logo from "../../../public/assents/icons/logo.svg";
import { goToCadastro, goToHome } from "../../router/cordinator";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
        <input type="email" placeholder="E-mail" />
        <input className="input2" type="password" placeholder="Senha" />

        <button onClick={() => goToHome(navigate)} className="button1">
          Continuar
        </button>
        <hr />
        <button onClick={() => goToCadastro(navigate)} className="button2">
          Crie uma conta!
        </button>
      </div>
    </StyledContainer>
  );
}
