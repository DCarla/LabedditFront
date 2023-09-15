//comentario

import React, { useState } from "react";
import { StyledContainer } from "./style";

import { goToHomePrincipal } from "../../../router/cordinator";

export default function Coment({ onSubmit }) {
  const [content, setContent] = useState("");
  return (
    <StyledContainer>
      <form onSubmit={(e) => (onSubmit(content, e), setContent(""))}>
        <div>
          <input
            type="text"
            autoComplete="off"
            value={content}
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Adicionar comentario"
          />
        </div>

        <button type="submit" className="button2">
          Responder
        </button>
      </form>
      <hr />
    </StyledContainer>
  );
}
