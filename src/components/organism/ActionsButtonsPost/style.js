import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  button + button {
    margin: 0 0 0 11px;
  }

  button {
    border-radius: 28px;
    border: 1.5px solid #ececec;
    background: transparent;
    padding: 4.67px;
    display: flex;
    align-items: center;
  }

  .liked {
    background: red;
  }
  strong {
    margin: 0 18px 0 18px;
    color: #6f6f6f;
    font-weight: 700;
    font-size: 9.5px;
  }
`;
export const StyledImg = styled.img`
  transform: rotate(3.142rad);
`;
