import { useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import { MenuAboutMe } from "../MenuAboutMe";
import {
  HeaderContainer,
  HeaderContainerRigth,
  GlobalHeaderContainer,
  HeaderContainerLeft
} from "./styles";

export const Header = () => {
  const [languageContainerActive, setLanguageContainerActive] = useState(false);
  const [aboutMeContainerActive, setAboutMeContainerActive] = useState(false);

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Gabriel Jorge</h1>
        </HeaderContainerLeft>
        <HeaderContainerRigth>
          <h1>Home</h1>
          <div
            onMouseEnter={() => setLanguageContainerActive(true)}
            onMouseLeave={() => setLanguageContainerActive(false)}
          >
            <h1
            // onMouseOver ={toggleLanguage}
            >
              Idioma
            </h1>
            {languageContainerActive && <MenuLanguage />}
          </div>
          <div
            onMouseEnter={() => setAboutMeContainerActive(true)}
            onMouseLeave={() => setAboutMeContainerActive(false)}
          >
            <h1
            // onMouseOver ={toggleLanguage}
            >
              Quem sou eu
            </h1>
            {aboutMeContainerActive && <MenuAboutMe />}
          </div>
          <h1>Projetos</h1>
          <h1>Contato</h1>
        </HeaderContainerRigth>
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
