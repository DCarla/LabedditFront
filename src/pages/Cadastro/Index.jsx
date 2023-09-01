import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import { goToHome } from "../../router/cordinator";
export default function Cadastro() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1>Olá, boas vindas ao LabEddit ;&#41; </h1>
      <input className="input1" placeholder="Apelido" />
      <input className="input2" placeholder="E-mail" />
      <input className="input3" placeholder="Senha" />
      <spa>
        Ao continuar, você concorda com o nosso Contrato de usuário e nossa
        Política de Privacidade
      </spa>
      <label className="label1">
        <input id="checkbox" type="checkbox" />
        Eu concordo em receber emails sobre coisas legais no LabedditApelido
      </label>
      <button onClick={() => goToHome(navigate)} className="button1">
        Cadastrar
      </button>
    </StyledHeader>
  );
}
