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

import img from "../../assents/pattern-randomized.svg";

export const PresentationComponent = () => {
  const estiloDoFundo = {
    backgroundImage: `url('${img}')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "400%",
  };
  return (
    <PresentationComponentContainer>
      <WallpaperLayerContainer style={estiloDoFundo}></WallpaperLayerContainer>
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
