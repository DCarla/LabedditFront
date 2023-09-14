import React, { useState } from "react";
import { StyledContainer } from "./style";

export default function ComentPrincipal({ createPost }) {
  const [content, setContent] = useState("");

  return (
    <StyledContainer>
      <form onSubmit={(e) => (createPost(content, e), setContent(""))}>
        <div>
          <input
            autoComplete="off"
            name="post"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            placeholder="Escreva seu post"
          />
        </div>

        <button type="submit" className="button2">
          Postar
        </button>
      </form>
      <hr />
    </StyledContainer>
  );
}
