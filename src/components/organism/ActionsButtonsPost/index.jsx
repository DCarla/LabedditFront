import seta from "../../../../public/assents/icons/seta.svg";
import coment_Button from "../../../../public/assents/icons/coment-button.svg";
import { StyledContainer, StyledImg } from "./style";

export default function ActionButtonPost() {
  return (
    <StyledContainer>
      <button>
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
      <button>
        <img src={coment_Button} alt="Comentario" />
      </button>
    </StyledContainer>
  );
}
