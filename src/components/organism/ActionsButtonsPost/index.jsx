import seta from "../../../../public/assents/icons/seta.svg";
import coment_Button from "../../../../public/assents/icons/coment-button.svg";
import { StyledContainer, StyledImg } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { goToHome } from "../../../router/cordinator";

export default function ActionButtonPost({
  isLiked,
  setIsLiked,
  setIsCommentOpen,
}) {
  const navigate = useNavigate();
  function handleActivteComment() {
    if (!/.\/home/.test(location.href)) {
      goToHome(navigate);
    } else {
      setIsCommentOpen((prev) => !prev);
    }
  }

  return (
    <StyledContainer>
      <button
        onClick={() => {
          setIsLiked((prev) => {
            return !prev;
          });
        }}
        className={`${isLiked ? "liked" : ""}`}
      >
        <img
          src={seta}
          alt="Seta transparente com borda cinza apontando para cima"
        />

        <strong>1.2k</strong>

        <StyledImg
          className="setaBaixo"
          src={seta}
          alt="Seta transparente com borda cinza apontando para baixo"
        />
      </button>
      <button onClick={handleActivteComment}>
        <img src={coment_Button} alt="Comentario" />
        <strong>122</strong>
      </button>
    </StyledContainer>
  );
}
