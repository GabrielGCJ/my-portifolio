import styled from "styled-components";

export const SliderComponentGlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    padding-left: 10vw;
    font-family: ${({ theme }) => theme.fonts.roboto};
    background-color: rgba(29, 29, 29);
    border-top: 3px solid rgba(160, 0, 17, 0.9);
    border-bottom: 3px solid rgb(0, 135, 95);
  }
`;

export const SliderAndTextComponent = styled.div`
  display: flex;
  justify-content: center;
`;

export const SliderComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  flex-direction: row;

  img {
    width: 25vw;
    border-radius: 5%;
  }
`;
