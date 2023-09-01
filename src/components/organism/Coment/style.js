import { styled } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  div {
    border-radius: 12px;
    background: #ededed;
    width: calc(100% - 32px);
    height: 131px;
    margin: 12px 0 8px 0;
    color: #6f6f6f;
    padding: 13px 16px;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    input {
      border: none;
      background: transparent;
      outline: none;
      color: #6f6f6f;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  button {
    display: flex;
    width: 100%;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
    margin: 0 0 16px 0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border: none;
  }

  hr {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
    border: none;
  }
`;
