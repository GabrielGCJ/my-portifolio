import styled from "styled-components";
import img from "../../assents/pattern-randomized.svg";

export const PresentationComponentContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const WallpaperLayerContainer = styled.style`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  /* @keyframes loop {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
  display: flex;
  height: 110vh;
  width: 100%;

  background: url(${img});
  background-size: 200%; 
  background-position: center; 

  animation: loop 300s linear infinite;  */

  /* ------- */

  @keyframes zoom {
    0% {
      background-size: 400%;
    }
    25% {
      background-size: 350%;
    }
    50% {
      background-size: 300%;
    }
    75% {
      background-size: 200%;
    }
    100% {
      background-size: 100%;
    }
  }

  display: flex;
  height: 100vh;
  width: 100%;

  /* background: url(${img}); */
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
  animation: zoom 2s linear alternate-reverse;
`;

export const BlurLayerContainer = styled.div`
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

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  height: 100vh;
  width: 100%;
`;

export const ProfessionLayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 5vw;
  z-index: 5;
  font-size: 1vw;

  position: absolute;

  h1 {
    color: pink;
    cursor: text;
  }

  @keyframes subir {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2rem);
    }
    100% {
      ransform: translateY(0);
    }
  }

  @keyframes decer {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  .left {
    animation: subir 5s ease-in-out forwards;
  }
  .right {
    animation: decer 5s ease-in-out forwards;
  }
`;

export const NameLayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 5vw;
  z-index: 4;
  font-size: 5vw;
  position: absolute;

  h1 {
    color: pink;
    cursor: text;
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(2rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-2rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  .top {
    animation: moveLeft 5s ease-in-out forwards;
  }

  .low {
    animation: moveRight 5s ease-in-out forwards;
  }
`;

export const RotatingRing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 3;
  position: absolute;
`;

export const PrimaryRing = styled.div`
  @keyframes rotate {
    0% {
      width: 2vw;
      height: 2vw;
      transform: rotate(0deg);
    }
    5% {
      width: calc((20vw + 20vh) / 2);
      height: calc((20vw + 20vh) / 2);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: flex;
  width: calc(20vw + 20vh / 2);
  height: calc(20vw + 20vh / 2);

  border: 9px solid rgb(102, 0, 17);

  border-radius: 0.8rem;

  animation: bloco 20s ease-in-out infinite alternate;
`;

export const SecundaryRing = styled.div`
  @keyframes bloco {
    0% {
      width: 2vw;
      height: 2vw;
      transform: rotate(0deg);
    }
    5% {
      width: calc(20vw + 20vh / 2);
      height: calc(20vw + 20vh / 2);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: flex;
  width: calc(20vw + 20vh / 2);
  height: calc(20vw + 20vh / 2);

  border: 6px solid rgb(35, 35, 35);

  border-radius: 0.8rem;

  animation: bloco 23s ease-in-out infinite alternate;
`;

export const TercearyRing = styled.div`
  @keyframes bloco {
    0% {
      width: 2vw;
      height: 2vw;
      transform: rotate(0deg);
    }
    5% {
      width: calc(20vw + 20vh / 2);
      height: calc(20vw + 20vh / 2);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  display: flex;
  width: calc(20vw + 20vh / 2);
  height: calc(20vw + 20vh / 2);
  border: 2px solid white;

  border-radius: 0.8rem;

  animation: bloco 26s ease-in-out infinite alternate;
`;
