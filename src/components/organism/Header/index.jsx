import x from "../../../../public/assents/icons/x.svg";
import Logo from "../../../../public/assents/icons/Logo.png";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <img src={x} alt="Ícone de X cinza" />
      <img
        src={Logo}
        alt="Quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"
      />
      <button>Logout</button>
    </StyledHeader>
  );
}
