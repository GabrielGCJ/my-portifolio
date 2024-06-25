import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuLanguageContainer } from "./styles";

export const MenuLanguage = () => {
  const { changeLanguageToEnglish, changeLanguageToPortuguese } =
    useContext(PortfolioContext);
  return (
    <MenuLanguageContainer>
      <button onClick={changeLanguageToPortuguese}>Portugues</button>
      <button onClick={changeLanguageToEnglish}>English</button>
    </MenuLanguageContainer>
  );
};
