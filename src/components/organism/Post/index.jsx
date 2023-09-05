import React, { useState } from "react";
import SentBy from "../../atom/SentBy";
import ActionButtonPost from "../ActionsButtonsPost";
import { StyledContainer } from "./styles";
import Coment from "../Coment";

export default function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <>
      <StyledContainer>
        <SentBy />
        <p>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
          tecnologia usam Linux ?
        </p>
        <ActionButtonPost
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          setIsCommentOpen={setIsCommentOpen}
        />
      </StyledContainer>
      {isCommentOpen ? <Coment /> : <></>}
    </>
  );
}
