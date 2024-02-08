import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }

  `

export const MenuLanguageContainer = styled.header`
  position: absolute ;
  width:  7rem;
  height: 7rem;

  background-color: black ;
  animation: ${moveRight} 0.5s ease-in-out forwards;
`;


