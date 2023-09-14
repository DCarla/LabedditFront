import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;

  .arrow-button {
    border: none;
    background: transparent;
  }

  .transparent-with-border {
    border-radius: 28px;
    border: 1.5px solid #ececec;
    background: transparent;
    padding: 4.67px;
    align-items: center;
    display: flex;
  }

  button.transparent-with-border {
    margin: 0 0 0 11px;
  }

  .select-liked {
    background: green;
  }
  .select-disliked {
    background: red;
  }

  strong {
    margin: 0 18px;
    color: #6f6f6f;
    font-weight: 700;
    font-size: 9.561px;
  }
`;

export const StyledImg = styled.img`
  transform: rotate(3.142rad);
`;
