import styled from "styled-components";

export const MobileConfigGlobalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const BlurLayerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @keyframes blur {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    25% {
      background-color: rgba(0, 0, 0, 0);
    }
    50% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    75% {
      background-color: rgba(0, 0, 0, 0.4);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  animation: blur 2s linear alternate;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 6;

  height: 100vh;
  width: 100vw;
`;

export const MobileConfigContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 7;
  gap: 10vh;
  font-family: ${({ theme }) => theme.fonts.roboto};

  svg {
    color: red;
  }

  a {
    text-decoration: none;
    font-weight: normal;
    color: inherit;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      color: black;
    }
    100% {
      transform: translateY(0%);
      color: white;
    }
  }

  svg {
    color: rgba(160, 0, 17, 0.9);
  }
  animation: slideDown 1s linear;
`;
