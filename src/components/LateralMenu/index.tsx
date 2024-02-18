import { LateralMenuContainer, LateralMenuContainerGlobal } from "./styles";
import gitImage from "../../assents/lateralMenu/github.svg";
import instagramImage from "../../assents/lateralMenu/instagram.svg";
import linkedinImage from "../../assents/lateralMenu/linkedin.svg";
import whatsappImage from "../../assents/lateralMenu/whatsapp.svg";
import spotifyImage from "../../assents/lateralMenu/spotify.svg";

export const LateralMenu = () => {
  return (
    <LateralMenuContainerGlobal>
      <LateralMenuContainer>
        <img className="whiteIcon" src={gitImage} alt="" />
        <img className="whiteIcon" src={instagramImage} alt="" />
        <img className="whiteIcon" src={linkedinImage} alt="" />
        <img className="whiteIcon" src={whatsappImage} alt="" />
        <img className="whiteIcon" src={spotifyImage} alt="" />
      </LateralMenuContainer>
    </LateralMenuContainerGlobal>
  );
};
