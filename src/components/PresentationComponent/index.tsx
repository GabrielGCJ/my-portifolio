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
  ScrollHint,
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
      <ScrollHint aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m6 8 6 6 6-6M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ScrollHint>
    </PresentationComponentContainer>
  );
};
