import { MenuMenuAboutMeContainer } from "./styles";
import { usePortfolio } from "../../hooks/usePortfolio";

export const MenuAboutMe = () => {
  const { language } = usePortfolio();

  return (
    <MenuMenuAboutMeContainer>
      <button>
        <a href="#whoAmI">
          {language === "portuguese" ? "Sobre mim" : "About me"}
        </a>
      </button>
      <button>
        {language === "portuguese" ? "O que eu faço" : "What do I do"}
      </button>
      <button>{language === "portuguese" ? "Educação" : "Education"}</button>
    </MenuMenuAboutMeContainer>
  );
};
