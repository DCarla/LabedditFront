import x from "../../../../public/assents/icons/x.svg";
import Logo from "../../../../public/assents/icons/Logo.png";
import { StyledHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../../router/cordinator";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <img src={x} alt="Ícone de X cinza" />
      <img
        src={Logo}
        alt="Quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"
      />
      <button onClick={() => goToLogin(navigate)}>Logout </button>
    </StyledHeader>
  );
}
