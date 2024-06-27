import { useContext } from "react";
import {
  BlurLayerContainer,
  MobileConfigContainer,
  MobileConfigGlobalContainer,
} from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { XCircle } from "phosphor-react";

export const MenuOptionsMobile = () => {
  const {
    disableMobileOptions,
    optionsMenu,
    changeOptionsMenuLanguage,
    changeOptionsMenuInitial,
    changeOptionsMenuWhoAmI,
  } = useContext(PortfolioContext);

  const changeInitial = () => {
    disableMobileOptions();
    changeOptionsMenuInitial();
  };

  return (
    <MobileConfigGlobalContainer>
      <BlurLayerContainer />
      {optionsMenu === "initial" ? (
        <MobileConfigContainer>
          <h2>Home</h2>
          <h2 onClick={changeOptionsMenuLanguage}>Idioma</h2>
          <h2 onClick={changeOptionsMenuWhoAmI}>Quem sou eu</h2>
          <h2>Contatos</h2>
          <h2>Projetos</h2>
          <XCircle onClick={disableMobileOptions} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : optionsMenu === "language" ? (
        <MobileConfigContainer>
          <h2>Portugues</h2>
          <h2>English</h2>
          <XCircle onClick={changeInitial} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : optionsMenu === "whoAmI" ? (
        <MobileConfigContainer>
          <h2>Sobre mim</h2>
          <h2>O que eu faço</h2>
          <h2>Educação</h2>
          <XCircle onClick={changeInitial} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : null}
    </MobileConfigGlobalContainer>
  );
};
