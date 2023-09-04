import React from "react";
import { StyledContainer } from "./style";
import { goToHome } from "../../../router/cordinator";
import { useNavigate } from "react-router-dom";

export default function ComentPrincipal() {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <div>
        <input type="text" placeholder="Escreva seu post" />
      </div>

      <button onClick={() => goToHome(navigate)} className="button2">
        Postar
      </button>

      <hr />
    </StyledContainer>
  );
}
