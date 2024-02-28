import { useContext } from "react";
import {
  BlurLayerContainer,
  MobileConfigContainer,
  MobileConfigGlobalContainer,
} from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { XCircle } from "phosphor-react";

export const MenuOptionsMobile = () => {

  const { disableMobileOptions } = useContext(PortfolioContext);

  return (
    <MobileConfigGlobalContainer>      
      <BlurLayerContainer />
      <MobileConfigContainer>
        <h2>Home</h2>
        <h2>Idioma</h2>
        <h2>Quem sou eu</h2>
        <h2>Contatos</h2>
        <h2>Projetos</h2>
        <XCircle onClick={disableMobileOptions} size={32} weight="bold" />
      </MobileConfigContainer>
    </MobileConfigGlobalContainer>
  );
};
