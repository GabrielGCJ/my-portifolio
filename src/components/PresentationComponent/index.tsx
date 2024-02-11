import {
  BlurLayerContainer,
  ProfessionLayerContainer,
  PresentationComponentContainer,
  WallpaperLayerContainer,
  NameLayerContainer,
  RotatingRing,
  LeftRing,
  RigthRing,
} from "./styles";

export const PresentationComponent = () => {
  return (
    <PresentationComponentContainer>
      <WallpaperLayerContainer />
      <BlurLayerContainer />
      <ProfessionLayerContainer>
        <h1>Full-Stack</h1>
        <h1>Developer</h1>
      </ProfessionLayerContainer>
      <NameLayerContainer>
        <h1>G</h1>
        <h1>J</h1>
      </NameLayerContainer>
      <RotatingRing>
        <LeftRing/>
        <RigthRing/>
      </RotatingRing>
    </PresentationComponentContainer>
  );
};
