import { useContext, useEffect, useState } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";
import { SliderComponent } from "../../components/SliderComponent";
import { Contact } from "../../components/Contact";

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const { menuMobileOptions, widthScream } = useContext(PortfolioContext);
  const larguraLimite = 750;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
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
      <SliderComponent />
      <Contact />
    </HomeContainer>
  );
}
