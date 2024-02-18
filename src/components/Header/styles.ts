import styled from "styled-components";

export const GlobalHeaderContainer = styled.header`
  position: absolute;
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

  :hover {
    transition: 1.5s;
    background: ${({ theme }) => theme.colors["base-error"]};
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
`;

export const HeaderContainerLeft = styled.div`
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

  :hover {
    animation: floatAndChangeFont 4s none;
  }
`;

export const HeaderContainerRigth = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 3.5rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100%;

    cursor: default;

    :hover {
      transition: 0.4s;
      background: ${({ theme }) => theme.colors["brand-purple"]};
      border-radius: 7px 0px 7px 0px;
      border-bottom: 5px solid green;
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
