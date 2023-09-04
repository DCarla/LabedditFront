import Coment from "../../components/organism/Coment";
import ComentPrincipal from "../../components/organism/ComentPrincipal";
import Post from "../../components/organism/Post";
import { StyledContainer } from "./style";
export default function HomePrincipal() {
  return (
    <StyledContainer>
      <div classeName="wrappe">
        <ComentPrincipal />
        <Post />
      </div>
    </StyledContainer>
  );
}
