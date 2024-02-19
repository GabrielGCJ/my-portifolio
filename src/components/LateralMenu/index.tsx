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
        <a href="https://github.com/GabrielGCJ" target="_blank">
          <img className="whiteIcon" src={gitImage} alt="" />
        </a>

        <a href="https://www.instagram.com/gb.j_dev/" target="_blank">
          <img className="whiteIcon" src={instagramImage} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-jorge-67635b221/"
          target="_blank"
        >
          <img className="whiteIcon" src={linkedinImage} alt="" />
        </a>
        <a href="https://wa.me/5521988436194" target="_blank">
          <img className="whiteIcon" src={whatsappImage} alt="" />
        </a>
        <a
          href="https://open.spotify.com/user/ggcj.333?si=j5p0rC6TRpyt3OA3AtgHjQ&utm_source=copy-link"
          target="_blank"
        >
          <img className="whiteIcon" src={spotifyImage} alt="" />
        </a>
      </LateralMenuContainer>
    </LateralMenuContainerGlobal>
  );
};
