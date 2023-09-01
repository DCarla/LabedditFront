import React from "react";
import SentBy from "../../atom/SentBy";
import ActionButtonPost from "../ActionsButtonsPost";
import { StyledContainer } from "./styles";
import Coment from "../Coment";

export default function Post() {
  return (
    <StyledContainer>
      <SentBy />
      <p>
        Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
        tecnologia usam Linux ?
      </p>
      <ActionButtonPost />
    </StyledContainer>
  );
}
