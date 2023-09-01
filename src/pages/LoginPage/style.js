import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 84px;
    height: 84px;
    flex-shrink: 0;
    margin: 10px 10px 10px 10px;
  }

  h1 {
    color: #373737;

    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h2 {
    color: #000;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .div1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .div2 {
    margin: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 363px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #d5d8de;
    background: #fff;
    color: #323941;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
    padding: 0 0 0 16px;
  }
  .input2 {
    margin: 8px 0 0 0;
  }
  .button1 {
    display: flex;
    width: 365px;
    padding: 13px 133px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 27px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    margin: 56px 0 0 0;
  }

  hr {
    width: 363.006px;
    height: 1px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
    margin: 18px 0 18px 0;
  }
  .button2 {
    display: flex;
    background-color: transparent;
    width: 365px;
    padding: 13px 133px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 27px;
    border: 1px solid #fe7e02;
    color: #fe7e02;
    text-align: center;
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
