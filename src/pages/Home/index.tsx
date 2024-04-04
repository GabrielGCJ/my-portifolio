import { useContext, useState } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";
import { SliderComponent } from "../../components/SliderComponent";
import { Contact } from "../../components/Contact";

export function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const { menuMobileOptions, widthScream } = useContext(PortfolioContext);
  const larguraLimite = 750;

  window.onload = () => {
    setLoaded(true);
  };

  if (!loaded) {
    return <div>Carregando...</div>;
  }


  return (
    <HomeContainer>
      <PresentationComponent />
      <LateralMenu />
      {menuMobileOptions === true && widthScream <= larguraLimite ? (
        <MenuOptionsMobile />
      ) : null}
      <WhoAmI />
      <SliderComponent/>
      <Contact/>
    </HomeContainer>
  );
}
