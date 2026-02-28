import { MenuLanguageContainer } from "./styles";
import { usePortfolio } from "../../hooks/usePortfolio";

export const MenuLanguage = () => {
  const { changeLanguageToEnglish, changeLanguageToPortuguese } =
    usePortfolio();
  return (
    <MenuLanguageContainer>
      <button onClick={changeLanguageToPortuguese}>Portugues</button>
      <button onClick={changeLanguageToEnglish}>English</button>
    </MenuLanguageContainer>
  );
};
