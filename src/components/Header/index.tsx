import { useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import {
  HeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigth,
  GlobalHeaderContainer,
} from "./styles";
import { MenuAboutMe } from "../MenuAboutMe";

export const Header = () => {
  const [language, setLanguage] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  // const toggleLanguage = () => {
  //   setLanguage(!language);
  // };

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Gabriel Jorge</h1>
        </HeaderContainerLeft>
        <HeaderContainerRigth>
          <h1>Home</h1>
          <div>
            <h1
              // onMouseOver ={toggleLanguage}
              onMouseEnter={() => setLanguage(true)}
              onMouseLeave={() => setLanguage(false)}
            >
              Idioma
            </h1>
            {language && <MenuLanguage />}
          </div>
          <div>
            <h1
              // onMouseOver ={toggleLanguage}
              onMouseEnter={() => setAboutMe(true)}
              onMouseLeave={() => setAboutMe(false)}
            >
              Quem sou eu
            </h1>
            {aboutMe && <MenuAboutMe />}
          </div>
          <h1>Projetos</h1>
          <h1>Contato</h1>
        </HeaderContainerRigth>
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
