import styled from "styled-components";

export const WhatDoIDoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  padding-left: 10vw;
  padding-right: 10vw;
  /* overflow: hidden; */
`;

const sideContainersProps = styled.div`
  display: flex;
  width: 30vw;
  height: 30vw;
  border: 7px solid blue;
  border-radius: 2%;
  overflow: hidden;
`;

export const WhatDoIDoContainerLeft = styled(sideContainersProps)`

  @keyframes moveLeftContainerToZero {
    0% {
      transform: translate(300%, 100%);
      width: 10vw;
      height: 10vw;
    }
    50% {
      transform: translate(0, 0);
      width: 10vw;
      height: 10vw;
    }
    100% {
      transform: translate(0, 0);
      width: 30vw;
      height: 30vw;
    }
  }

  animation: moveLeftContainerToZero 2s forwards;
`;

export const WhatDoIDoContainerCentral = styled.div`
  width: 3rem;

  height: 3rem;

  border: 3px solid red;
  border-radius: 10%;
  overflow: hidden;
  @keyframes rodateWhatDoIDoContainer {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: rodateWhatDoIDoContainer 10s ease-in-out infinite alternate;
`;

export const WhatDoIDoContainerRigth = styled(sideContainersProps)`

  @keyframes moveRigthContainerToZero {
    0% {
      transform: translate(-300%, -100%);
      width: 10vw;
      height: 10vw;
    }
    50% {
      transform: translate(0, 0);
      width: 10vw;
      height: 10vw;
    }
    100% {
      transform: translate(0, 0);
      width: 30vw;
      height: 30vw;
    }
  }

  animation: moveRigthContainerToZero 2s forwards;
`;
