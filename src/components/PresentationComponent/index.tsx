import {
  BlurLayerContainer,
  PresentationComponentContainer,
  WallpaperLayerContainer,
} from "./styles";

export const PresentationComponent = () => {
  return (
    <PresentationComponentContainer>
      <WallpaperLayerContainer />
      <BlurLayerContainer />
    </PresentationComponentContainer>
  );
};
