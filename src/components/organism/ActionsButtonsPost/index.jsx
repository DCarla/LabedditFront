import seta from "../../../../public/assents/icons/seta.svg";
import coment_Button from "../../../../public/assents/icons/coment-button.svg";
import { StyledContainer, StyledImg } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { goToHome } from "../../../router/cordinator";

export default function ActionButtonPost({
  setIsCommentOpen,
  likes,
  dislikes,
  comments,
  likeOrDislike,
  postId,
  setLikedState,
  likedState,
}) {
  const navigate = useNavigate();
  function handleActivateComment() {
    if (!/.\/home/.test(location.href)) {
      goToHome(navigate);
    } else {
      setIsCommentOpen((prev) => !prev);
    }
  }

  return (
    <StyledContainer>
      <div className={` transparent-with-border`}>
        <button
          onClick={() => {
            likeOrDislike(postId, true),
              setLikedState((prev) => (prev === "liked" ? "" : "liked"));
          }}
          className="arrow-button"
        >
          <img
            className={`${likedState === "liked" ? "select-liked" : ""}`}
            src={seta}
            alt="seta transparente"
          />
        </button>
        <strong>{likes - dislikes || 0}</strong>
        <button
          onClick={() => {
            likeOrDislike(postId, false),
              setLikedState((prev) => (prev === "disliked" ? "" : "disliked"));
          }}
          className="arrow-button"
        >
          <StyledImg
            className={`${likedState === "disliked" ? "select-disliked" : ""}`}
            src={seta}
            alt="seta transparente"
          />
        </button>
      </div>
      <button
        onClick={handleActivateComment}
        className="transparent-with-border"
      >
        <img src={coment_Button} alt="icone de comentar" />
        <strong>{comments}</strong>
      </button>
    </StyledContainer>
  );
}
