import styled from "styled-components";

export const GlobalHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 6;

  h1 {
    color: ${({ theme }) => theme.colors["base-white"]};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem 0rem 0.625rem;
  width: 100%;

  height: 2.5rem;
  background: rgba(3, 3, 3, 0.5);

  :hover {
    transition: 1.5s linear;
    background: rgba(160, 0, 17, 0.9);
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;

  font-family: ${({ theme }) => theme.fonts.roboto};
`;

export const HeaderContainerLeft = styled.div`

@keyframes moveLeftToZero {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
animation: moveLeftToZero 2s forwards;

:hover {
  @keyframes floatAndChangeFont {
    0% {
      transform: translateX(0px);
      font-family: Arial, sans-serif;
    }
    25% {
      transform: translateX(50px);
      font-family: "Times New Roman", Times, serif;
    }
    50% {
      transform: translateX(25px);
      font-family: "Courier New", Courier, monospace;
    }
    75% {
      transform: translateX(0px);
      font-family: Arial, sans-serif;
    }
  }
  animation: floatAndChangeFont 4s none;
  }
`;

export const HeaderContainerRigth = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 3.5rem;

  a {
    text-decoration: none;
    font-weight: normal;
    color: inherit;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100%;
    cursor: default;    

    :hover {
      transition: 0.4s;
      background: rgb(35, 35, 35);
      border-radius: 7px 0px 7px 0px;
      border-bottom: 5px solid white;
    }
  }
`;

export const HeaderContainerRigthMobile = styled.div`
  display: flex;
  padding-right: 0.3rem;

  img {
    width: 1.875rem;
  }
`;
