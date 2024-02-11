import styled from "styled-components";
import img from "../../assents/pattern-randomized.svg";

export const PresentationComponentContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const WallpaperLayerContainer = styled.div`
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

  background: url(${img});
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
  animation: zoom 2s linear alternate-reverse;

  /* ---- */
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
  gap: 5rem;
  z-index: 4;

  position: absolute;

  h1 {
    color: pink;
    /* cursor: none; */
    cursor: text;
  }
`;

export const NameLayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 5rem;
  z-index: 3;
  font-size: 4rem;
  position: absolute;

  h1 {
    color: pink;
    cursor: text;
  }
`;

export const RotatingRing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: absolute;
`;

export const LeftRing = styled.div`
  @keyframes bloco {
    0% {
      width: 2vw;
      height: 2vw;
      transform: rotate(0deg);
    }
    5% {
      width: 30vw;
      height: 30vw;
    }
    
    6% {
      /* transform: rotate(0deg); */
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
  width: 30vw;
  height: 30vw;

  /* width: 5rem;
  height: 5 rem; */
  border: 2px solid rebeccapurple;

  border-radius: 0.8rem;

  animation: bloco 60s linear alternate;
  /* animation: rotate 60s linear alternate; */
`;

export const RigthRing = styled.div``;
