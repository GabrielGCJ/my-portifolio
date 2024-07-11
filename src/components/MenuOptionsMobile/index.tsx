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
    language,
    disableMobileOptions,
    optionsMenu,
    changeOptionsMenuLanguage,
    changeOptionsMenuInitial,
    changeOptionsMenuWhoAmI,
    changeLanguageToPortuguese,
    changeLanguageToEnglish,
  } = useContext(PortfolioContext);

  const changeInitial = () => {
    disableMobileOptions();
    changeOptionsMenuInitial();
  };

  const changeLanguagePortuguese = () => {
    disableMobileOptions();
    changeLanguageToPortuguese();
    changeOptionsMenuInitial();
  };

  const changeLanguageEnglish = () => {
    disableMobileOptions();
    changeLanguageToEnglish();
    changeOptionsMenuInitial();
  };

  return (
    <MobileConfigGlobalContainer>
      <BlurLayerContainer />
      {optionsMenu === "initial" ? (
        <MobileConfigContainer>
          <h2>Home</h2>
          <h2 onClick={changeOptionsMenuLanguage}>
            {language === "portuguese" ? "Idioma" : "Language"}
          </h2>
          <h2 onClick={changeOptionsMenuWhoAmI}>
            {language === "portuguese" ? "Quem sou eu" : "Who am I"}
          </h2>
          <a href="#projects" onClick={changeInitial}>
            <h2>{language === "portuguese" ? "Projetos" : "Projects"}</h2>
          </a>
          <a href="#contact" onClick={changeInitial}>
            <h2>{language === "portuguese" ? "Contatos" : "Contacts"}</h2>
          </a>
          <XCircle onClick={disableMobileOptions} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : optionsMenu === "language" ? (
        <MobileConfigContainer>
          <h2 onClick={changeLanguagePortuguese}>Portugues</h2>
          <h2 onClick={changeLanguageEnglish}>English</h2>
          <XCircle onClick={changeInitial} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : optionsMenu === "whoAmI" ? (
        <MobileConfigContainer>
          <h2>{language === "portuguese" ? "Sobre mim" : "About me"}</h2>
          <h2>
            {language === "portuguese" ? "O que eu faço" : "What do I do"}
          </h2>
          <h2>{language === "portuguese" ? "Educação" : "Education"}</h2>
          <XCircle onClick={changeInitial} size={33} weight="bold" />
        </MobileConfigContainer>
      ) : null}
    </MobileConfigGlobalContainer>
  );
};
