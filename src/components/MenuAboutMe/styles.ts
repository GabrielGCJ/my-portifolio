import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }

  `

export const MenuMenuAboutMeContainer = styled.header`
  position: absolute ;
  width:  10rem;
  height: 10rem;

  background-color: black ;
  animation: ${moveRight} 0.1s ease-in-out forwards;
  
`;




