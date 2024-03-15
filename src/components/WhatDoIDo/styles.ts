import styled from "styled-components";

export const WhatDoIDoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background-color: red;
  justify-content: space-around;
  align-items: center;
`;

const containerProps = styled.div`
  display: flex;
  width: 25vw;
  height: 25vw;
  background-color: blue;

  overflow: hidden;
`;

export const WhatDoIDoContainerLeft = styled(containerProps)`

background-color: purple;
@keyframes moveLeftToZero {
    0% {
      transform: translate(200%, 50%);
    }
    /* 50% {
      transform: translate(100%, 100%);
    } */
    100% {
      transform: translate(0, 0);
    }
  }

  animation: moveLeftToZero 2s forwards;
`;

export const WhatDoIDoContainerCentral = styled(containerProps)`
  width: 10vw;
  height: 10vw;
`;

export const WhatDoIDoContainerRigth = styled(containerProps)`

background-color: black;
  @keyframes moveRigthToZero {
    0% {
      transform: translate(-200%, -50%);
    }
    /* 50% {
      transform: translate(-100%, -100%);
    } */
    100% {
      transform: translate(0, 0);
    }
  }

  animation: moveRigthToZero 2s forwards;
`;
