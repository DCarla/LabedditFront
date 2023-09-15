import { styled } from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .post-container {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px !important;
  }

  .wrapper {
    width: calc(100% - 60px);
    gap: 10px;
  }
`;
