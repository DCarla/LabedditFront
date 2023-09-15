import x from "../../../../public/assents/icons/x.svg";
import Logo from "../../../../public/assents/icons/Logo.png";
import { StyledHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHomePrincipal, goToLogin } from "../../../router/cordinator";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <button onClick={() => goToHomePrincipal(navigate)}>
        {/.\/home/.test(location.href) && (
          <img src={x} alt="Ícone de X cinza" />
        )}
      </button>
      <img
        src={Logo}
        alt="Quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"
      />
      <button onClick={() => goToLogin(navigate)}>
        {/.\/cadastro/.test(location.href) ? "Entrar" : "Logout"}{" "}
      </button>
    </StyledHeader>
  );
}
