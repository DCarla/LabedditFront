import { StyledContainer } from "./style";
import logo from "../../../public/assents/icons/logo.svg";

export default function Login() {
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

        <button className="button1">Continuar</button>
        <hr />
        <button className="button2">Crie uma conta!</button>
      </div>
    </StyledContainer>
  );
}
