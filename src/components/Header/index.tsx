import { PortfolioContext } from "../../contexts/PortfolioContext";
import { useContext, useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import { MenuAboutMe } from "../MenuAboutMe";
import {
  HeaderContainer,
  HeaderContainerRigth,
  GlobalHeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigthMobile,
} from "./styles";
import { List } from "phosphor-react";

export const Header = () => {
  const { activateMobileOptions, widthScream, language } =
    useContext(PortfolioContext);
  const [languageContainerActive, setLanguageContainerActive] = useState(false);
  const [aboutMeContainerActive, setAboutMeContainerActive] = useState(false);
  const larguraLimite = 750;

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Gabriel Jorge</h1>
        </HeaderContainerLeft>

        {widthScream >= larguraLimite ? (
          <HeaderContainerRigth>
            <a href="#home">
              <h1>Home</h1>
            </a>

            <div
              onMouseEnter={() => setLanguageContainerActive(true)}
              onMouseLeave={() => setLanguageContainerActive(false)}
            >
              <h1>{language === "portuguese" ? "Idioma" : "Language"}</h1>
              {languageContainerActive && <MenuLanguage />}
            </div>
            <div
              onMouseEnter={() => setAboutMeContainerActive(true)}
              onMouseLeave={() => setAboutMeContainerActive(false)}
            >
              <h1>
                {language === "portuguese" ? "Quem sou eu?" : "Who am I?"}
              </h1>
              {aboutMeContainerActive && <MenuAboutMe />}
            </div>

            <a href="#projects">
              <h1>{language === "portuguese" ? "Projetos" : "Projects"}</h1>
            </a>

            <a href="#contact">
              <h1>{language === "portuguese" ? "Contato" : "Contact"}</h1>
            </a>
          </HeaderContainerRigth>
        ) : (
          <HeaderContainerRigthMobile onClick={activateMobileOptions}>
            <List size={32} />
          </HeaderContainerRigthMobile>
        )}
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
