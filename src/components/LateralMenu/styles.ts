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

  @keyframes adjustSvgColors {
    0% {
      filter: invert(0%);
    }
    100% {
      filter: invert(100%);
    }
  }

  img {
    width: 2vw;
    transition: 0.25s linear;

    :hover {
      width: 3vw;
    }
  }

  animation: moveLeftToZero 2s forwards;

  /* A baixo estamos aplicando a animação de ajuste de cores apenas para imagens SVG */
  /* img[src$=".svg"] {
    animation: adjustSvgColors 2s forwards;
  } */
`;
