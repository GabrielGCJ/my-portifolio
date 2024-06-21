import styled from "styled-components";
import img from "../../assents/texture.jpg";
import img2 from "../../assents/perfil-image.jpg";
import img3 from "../../assents/anime-profile.jpg";

export const WhoAmIContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(32, 32, 32);
  width: 100%;
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

  display: flex;
  height: 100vh;
  width: 100%;

  background: url(${img});
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
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

  display: flex;
  height: 100vh;
  width: 100%;

  background: url(${img});
  transform: rotate(180deg);
  background-size: 400%;
  background-position: center;
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
  min-width: 25vw;
  width: 25vw;
  height: 25vw;
  border-radius: 30%;
  border: 3px solid rgba(160, 0, 17, 0.9);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img3});

  @keyframes updateImage {
    0% {
      background-image: url(${img2});
    }
    80% {
      background-image: url(${img2});
    }
    100% {
      background-image: url(${img3});
    }
  }
  animation: updateImage 13s none;

  :hover {
    background-image: url(${img2});
    transition: 0.3s;
  }
  :active {
    background-image: url(${img2});
    transition: 0.3s;
  }

  @media (max-width: 800px) {
    width: 50vw;
    height: 50vw;
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

export const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 5;
  font-size: 1rem;
  color: white;

  a {
    text-decoration: none;
  }
`;

export const ButtonCv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid red;
  border-radius: 10px;
  width: 100%;
  height: 5vw;
  min-height: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;

  :hover {
    background-color: rgba(102, 0, 17, 0.5);
    transition: 0.7s;
  }
`;
