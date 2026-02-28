import { useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import { MenuAboutMe } from "../MenuAboutMe";
import {
  HeaderContainer,
  HeaderContainerRigth,
  GlobalHeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigthMobile,
} from "./styles";
import { List,  } from "phosphor-react";
import { usePortfolio } from "../../hooks/usePortfolio";

export const Header = () => {
  const { activateMobileOptions, widthScreen, language } =
    usePortfolio();
  const [languageContainerActive, setLanguageContainerActive] = useState(false);
  const [aboutMeContainerActive, setAboutMeContainerActive] = useState(false);
  const larguraLimite = 750;

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Gabriel Jorge</h1>
        </HeaderContainerLeft>

        {widthScreen >= larguraLimite ? (
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
            <List size={32} color="white" />
          </HeaderContainerRigthMobile>
        )}
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
