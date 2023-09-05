import Coment from "../../components/organism/Coment";
import Post from "../../components/organism/Post";
import { StyledContainer } from "./style";
export default function Home() {
  return (
    <StyledContainer>
      <div classeName="wrappe">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </StyledContainer>
  );
}
