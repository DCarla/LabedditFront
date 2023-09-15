import React, { useState } from "react";
import SentBy from "../../atom/SentBy";
import ActionButtonPost from "../ActionsButtonsPost";
import { StyledContainer } from "./styles";
import Coment from "../Coment";

export default function Post({
  text,
  creator,
  likes,
  dislikes,
  comments,
  likeOrDislike,
  postId,
}) {
  const [likedState, setLikedState] = useState("");

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <>
      <StyledContainer>
        <SentBy creator={creator} />
        <p>{text}</p>
        <ActionButtonPost
          setIsCommentOpen={setIsCommentOpen}
          likes={likes}
          dislikes={dislikes}
          comments={comments}
          likeOrDislike={likeOrDislike}
          postId={postId}
          likedState={likedState}
          setLikedState={setLikedState}
        />
      </StyledContainer>
    </>
  );
}
