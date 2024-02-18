import styled from "styled-components";

export const LateralMenuContainerGlobal = styled.div`
  position: fixed;
  left: 1rem;
  top: 50%;
  transform: translateY(-15%);
  height: 100%;
  z-index: 6;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LateralMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  background-color: rgba(102, 0, 17, 0.5);
  border-radius: 10px;
  gap: 1rem;

  @keyframes moveLeftToZero {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: moveLeftToZero 2s forwards;

  img {
    width: 2vw;
  }

  .whiteIcon {
    filter: invert(100%);
  }
`;
