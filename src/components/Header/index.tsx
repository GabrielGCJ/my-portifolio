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
  const { activateMobileOptions, widthScream } = useContext(PortfolioContext);
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
            <h1>Home</h1>
            <div
              onMouseEnter={() => setLanguageContainerActive(true)}
              onMouseLeave={() => setLanguageContainerActive(false)}
            >
              <h1>Idioma</h1>
              {languageContainerActive && <MenuLanguage />}
            </div>
            <div
              onMouseEnter={() => setAboutMeContainerActive(true)}
              onMouseLeave={() => setAboutMeContainerActive(false)}
            >
              <h1>Quem sou eu</h1>
              {aboutMeContainerActive && <MenuAboutMe />}
            </div>
            <h1>Projetos</h1>
            <h1>Contato</h1>
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
