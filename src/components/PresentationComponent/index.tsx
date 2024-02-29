import {
  BlurLayerContainer,
  ProfessionLayerContainer,
  PresentationComponentContainer,
  WallpaperLayerContainer,
  NameLayerContainer,
  RotatingRing,
  PrimaryRing,
  SecundaryRing,
  TercearyRing,
} from "./styles";

export const PresentationComponent = () => {
  return (
    <PresentationComponentContainer>
      <WallpaperLayerContainer />
      <BlurLayerContainer />
      <ProfessionLayerContainer>
        <h1 className="left">Full-Stack</h1>
        <h1 className="right">Developer</h1>
      </ProfessionLayerContainer>
      <NameLayerContainer>
        <h1 className="top">G</h1>
        <h1 className="low">J</h1>
      </NameLayerContainer>
      <RotatingRing>
        <PrimaryRing />
      </RotatingRing>

      <RotatingRing>
        <SecundaryRing />
      </RotatingRing>
      
      <RotatingRing>
        <TercearyRing />
      </RotatingRing>
    </PresentationComponentContainer>
  );
};
