import { useEffect, useState } from "react";
import { MenuLanguage } from "../MenuLanguage";
import { MenuAboutMe } from "../MenuAboutMe";
import { NavLink } from "react-router-dom";
import icone from "../../assents/icone-options.svg";
import {
  HeaderContainer,
  HeaderContainerRigth,
  GlobalHeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigthMobile,
} from "./styles";

export const Header = () => {
  const [languageContainerActive, setLanguageContainerActive] = useState(false);
  const [aboutMeContainerActive, setAboutMeContainerActive] = useState(false);
  const [widthScream, setWidthScream] = useState(window.innerWidth);
  const larguraLimite = 700;

  useEffect(() => {
    const handleResize = () => {
      setWidthScream(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthScream]);

  return (
    <GlobalHeaderContainer>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Gabriel Jorge</h1>
        </HeaderContainerLeft>

        {widthScream >= larguraLimite ? (
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
        ) : (
          <HeaderContainerRigthMobile>
            <NavLink to="/mobileComponent">
              <img src={icone} alt="options" />
            </NavLink>
          </HeaderContainerRigthMobile>
        )}
      </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
