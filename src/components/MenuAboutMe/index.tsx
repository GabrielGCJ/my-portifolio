import { useContext } from "react";
import { MenuMenuAboutMeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";

export const MenuAboutMe = () => {
  const { language } = useContext(PortfolioContext);

  return (
    <MenuMenuAboutMeContainer>
      <button>
        {language === "portuguese" ? "Sobre mim" : "About me"}
      </button>
      <button>
        {language === "portuguese" ? "O que eu faço" : "What do I do"}
      </button>
      <button>
        {language === "portuguese" ? "Educação" : "Education"}
      </button>
    </MenuMenuAboutMeContainer>
  );
};
