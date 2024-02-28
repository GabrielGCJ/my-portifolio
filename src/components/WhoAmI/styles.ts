import styled from "styled-components";
import img from "../../assents/pattern-randomized.svg";

export const WhoAmIContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(32, 32, 32);
  width: 100vw;
  height: 150%;
  padding: 10vw;
  position: relative;
  overflow: hidden;
`;

export const WallpaperWhoAmILayerContainer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @keyframes loop {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
  display: flex;
  height: 150vh;
  width: 100%;

  background: url(${img});
  background-size: 200%;
  background-position: center;

  animation: loop 300s linear infinite;

  /* ------- */

  /* @keyframes zoom {
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
  } */

  display: flex;
  height: 100vh;
  width: 100%;

  background: url(${img});
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
  /* animation: zoom 2s linear alternate-reverse;    */
`;
export const WallpaperWhoAmILayerContainer2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  @keyframes loop2 {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  display: flex;
  height: 110vh;
  width: 100%;

  background: url(${img});
  background-size: 200%;
  background-position: center;

  animation: loop2 300s linear infinite;

  /* ------- */

  /* @keyframes zoom {
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
  } */

  display: flex;
  height: 100vh;
  width: 100%;

  background: url(${img});
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
  /* animation: zoom 2s linear alternate-reverse;    */
`;

export const BlurLayerWhoAmIContainer = styled.div`
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
  bottom: 0;
  left: 0;
  z-index: 2;

  height: 100vh;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;

  img {
    border: 3px solid rgba(160, 0, 17, 0.9);
    width: 25vw;
    height: 25vw;
    border-radius: 30%;
    object-fit: cover;

    @media (max-width: 800px) {
      width: 50vw;
      height: 50vw;
    }
  }
`;

export const ImageAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: ${({ theme }) => theme.fonts.roboto};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 5;
  /* font-size: calc(1vw + 1vh); */
  font-size: 1rem;

  color: white;
  flex-direction: column;

  /* background:red ; */
`;
