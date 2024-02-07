import { useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import {
  HeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigth,
  GlobalHeaderContainer,
  LanguageContainer,
} from "./styles";

export const Header = () => {
  const [language, setLanguage] = useState(false);

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
          <LanguageContainer>
            {/* <h1
              onMouseEnter={() => setLanguage(true)}
              onMouseLeave={() => setLanguage(false)}
            >
              
              Idioma
            </h1> */}

            <h1
            // onMouseOver ={toggleLanguage}
              onMouseEnter={() => setLanguage(true)}
              onMouseLeave={() => setLanguage(false)}
            >
              
              Idioma
            </h1>
            {language && <MenuLanguage />}
          </LanguageContainer>
          <h1>Quem sou eu</h1>
          <h1>Projetos</h1>
          <h1>Contato</h1>
        </HeaderContainerRigth>
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
