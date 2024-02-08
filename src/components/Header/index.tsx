import { useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import { MenuAboutMe } from "../MenuAboutMe";
import {
  HeaderContainer,
  HeaderContainerRigth,
  GlobalHeaderContainer,
} from "./styles";

export const Header = () => {
  const [languageContainerActive, setLanguageContainerActive] = useState(false);
  const [aboutMeContainerActive, setAboutMeContainerActive] = useState(false);

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <div>
          <h1>Gabriel Jorge</h1>
        </div>
        <HeaderContainerRigth>
          <h1>Home</h1>
          <div>
            <h1
              // onMouseOver ={toggleLanguage}
              onMouseEnter={() => setLanguageContainerActive(true)}
              onMouseLeave={() => setLanguageContainerActive(false)}
            >
              Idioma
            </h1>
            {languageContainerActive && <MenuLanguage />}
          </div>
          <div>
            <h1
              // onMouseOver ={toggleLanguage}
              onMouseEnter={() => setAboutMeContainerActive(true)}
              onMouseLeave={() => setAboutMeContainerActive(false)}
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
