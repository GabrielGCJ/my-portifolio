import styled from "styled-components";

export const MobileConfigGlobalContainer = styled.div`
  display: flex;
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
      background-color: rgba(0, 0, 0, 0.6);
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
  transform: 5s linear;
  z-index: 7;
  gap: 10vh;
`;
