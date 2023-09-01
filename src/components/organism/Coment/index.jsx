import React from "react";
import { StyledContainer } from "./style";

export default function Coment() {
  return (
    <StyledContainer>
      <div>
        <input type="text" placeholder="Adicionar comentario" />
      </div>

      <button>Responder</button>
      <hr />
    </StyledContainer>
  );
}
