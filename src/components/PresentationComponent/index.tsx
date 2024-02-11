import {
  BlurLayerContainer,
  ProfessionLayerContainer,
  PresentationComponentContainer,
  WallpaperLayerContainer,
  NameLayerContainer,
} from "./styles";

export const PresentationComponent = () => {
  return (
    <PresentationComponentContainer>
      <WallpaperLayerContainer />
      <BlurLayerContainer />
      <ProfessionLayerContainer>
        <h1>Full-Stack</h1>
        <h1>Web Develloper</h1>
      </ProfessionLayerContainer>
      <NameLayerContainer>
        <h1>G</h1>
        <h1>J</h1>
      </NameLayerContainer>
    </PresentationComponentContainer>
  );
};
